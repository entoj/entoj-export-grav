'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const ErrorHandler = require('entoj-system').error.ErrorHandler;
const Context = require('entoj-system').application.Context;
const GravExportTask = require('../task/GravExportTask.js').GravExportTask;
const GravModuleConfiguration = require('../configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const ModelSynchronizer = require('entoj-system').watch.ModelSynchronizer;
const co = require('co');


/**
 * @memberOf command
 */
class GravExportCommand extends ExportCommand
{
    /**
     */
    constructor(context)
    {
        super(context);

        // Assign options
        this._name = ['export', 'watch'];
        this._exportName = 'grav';
        this._moduleConfigurationClass = GravModuleConfiguration;
        this._exportTaskClass = GravExportTask;
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [Context] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'command/GravExportCommand';
    }


    /**
     * Uses watch.ModelSynchronizer to wait for changes on .j2 files
     * to compile them
     *
     * @protected
     * @param {Object} parameters
     * @returns {Promise}
     */
    watch(parameters)
    {
        const scope = this;
        const promise = co(function *()
        {
            const logger = scope.createLogger(scope.loggerPrefix + '.' + scope.exportName);
            const modelSynchronizer = scope.context.di.create(ModelSynchronizer);
            yield scope.export(parameters);
            yield modelSynchronizer.start();
            /* istanbul ignore next */
            modelSynchronizer.signals.invalidated.add((synchronizer, invalidations) =>
            {
                if (invalidations.extensions.indexOf('.j2') > -1)
                {
                    logger.info('Detected change in <Jinja Files>');
                    for (const entity of invalidations.entity.update)
                    {
                        parameters._[0] = entity.id.pathString;
                        scope.export(parameters);
                    }
                }
            });
        }).catch(ErrorHandler.handler(scope));
        return promise;
    }


    /**
     * @inheritDoc
     */
    dispatch(action, parameters)
    {
        if ((action || '').toLowerCase() == this.exportName.toLowerCase())
        {
            if (parameters && parameters.command == 'export')
            {
                return this.export(parameters);
            }
            if (parameters && parameters.command == 'watch')
            {
                return this.watch(parameters);
            }
        }
        return Promise.resolve(false);
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravExportCommand = GravExportCommand;

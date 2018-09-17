'use strict';

/**
 * Requirements
 * @ignore
 */
const ExportCommand = require('entoj-system').command.ExportCommand;
const Context = require('entoj-system').application.Context;
const GravExportTask = require('../task/GravExportTask.js').GravExportTask;
const GravModuleConfiguration = require('../configuration/GravModuleConfiguration.js').GravModuleConfiguration;


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
}


/**
 * Exports
 * @ignore
 */
module.exports.GravExportCommand = GravExportCommand;

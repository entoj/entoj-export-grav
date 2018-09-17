'use strict';

/**
 * Requirements
 * @ignore
 */
const GravExporter = require('../export/GravExporter.js').GravExporter;
const ExportTask = require('entoj-system').task.ExportTask;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const CliLogger = require('entoj-system').cli.CliLogger;
const EntitiesRepository = require('entoj-system').model.entity.EntitiesRepository;


/**
 * @memberOf task
 */
class GravExportTask extends ExportTask
{
    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [CliLogger, EntitiesRepository, GlobalRepository, GravExporter] };
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'task/GravExportTask';
    }


    /**
     * @inheritDoc
     */
    get sectionName()
    {
        return 'Exporting Twig files for GravCMS';
    }


    /**
     * @inheritDoc
     */
    get exportName()
    {
        return 'grav';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravExportTask = GravExportTask;

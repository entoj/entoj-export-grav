'use strict';

// Requirements
const TwigExporter = require('entoj-export-twig').export.TwigExporter;
const GlobalRepository = require('entoj-system').model.GlobalRepository;
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const GravRenderer = require('./GravRenderer.js').GravRenderer;
const GravTransformer = require('./GravTransformer.js').GravTransformer;
const GravModuleConfiguration = require('../configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const GravConfiguration = require('./GravConfiguration.js').GravConfiguration;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class GravExporter extends TwigExporter
{
    /**
     * @ignore
     */
    constructor(globalRepository, buildConfiguration, moduleConfiguration, renderer, transformer)
    {
        super(globalRepository, buildConfiguration, moduleConfiguration, renderer, transformer);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, GravModuleConfiguration);

        // Assign options
        this._configurationClass = GravConfiguration;
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/GravExporter';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': [GlobalRepository, BuildConfiguration, GravModuleConfiguration, GravRenderer, GravTransformer] };
    }
}


// Exports
module.exports.GravExporter = GravExporter;

'use strict';

/**
 * Requirements
 * @ignore
 */
const BuildConfiguration = require('entoj-system').model.configuration.BuildConfiguration;
const GlobalConfiguration = require('entoj-system').model.configuration.GlobalConfiguration;
const TwigModuleConfiguration = require('entoj-export-twig').configuration.TwigModuleConfiguration;


/**
 * @memberOf configuration
 */
class GravModuleConfiguration extends TwigModuleConfiguration
{
    /**
     * @param  {model.configuration.GlobalConfiguration} globalConfiguration
     */
    constructor(globalConfiguration, buildConfiguration, options)
    {
        super(globalConfiguration, buildConfiguration, { prefix: 'grav' });
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': [GlobalConfiguration, BuildConfiguration, 'configuration/GravModuleConfiguration.options'] };
    }


    /**
     * @inheritDocss
     */
    static get className()
    {
        return 'configuration/GravModuleConfiguration';
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravModuleConfiguration = GravModuleConfiguration;

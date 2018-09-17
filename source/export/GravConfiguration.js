'use strict';

// Requirements
const TwigConfiguration = require('entoj-export-twig').export.TwigConfiguration;
const GravModuleConfiguration = require('../configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const EntityCategoryType = require('entoj-system').model.entity.EntityCategoryType;
const assertParameter = require('entoj-system').utils.assert.assertParameter;


/**
 * @memberOf export.fluid
 * @extends export.Configuration
 */
class GravConfiguration extends TwigConfiguration
{
    /**
     * @ignore
     */
    constructor(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration)
    {
        super(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);

        // Check params
        assertParameter(this, 'moduleConfiguration', moduleConfiguration, true, GravModuleConfiguration);
    }


    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/GravConfiguration';
    }


    /**
     * @inheritDoc
     */
    getFilePath(configuration)
    {
        let result = this.moduleConfiguration.basePath;
        if (configuration.entity.id.category.type == EntityCategoryType.TEMPLATE)
        {
            result+= 'layouts/';
        }
        else
        {
            result+= 'macros/';
        }
        return result;
    }


    /**
     * @inheritDoc
     */
    getIncludePath(configuration)
    {
        let result = this.moduleConfiguration.includePath;
        if (configuration.entity.type == EntityCategoryType.TEMPLATE)
        {
            result+= 'layouts/';
        }
        else
        {
            result+= 'macros/';
        }
        return result;
    }
}


// Exports
module.exports.GravConfiguration = GravConfiguration;

'use strict';

/**
 * Requirements
 */
const GravConfiguration = require(GRAV_SOURCE + '/export/GravConfiguration.js').GravConfiguration;
const GravModuleConfiguration = require(GRAV_SOURCE + '/configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const configurationSpec = require('entoj-system/test').export.ConfigurationShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(GravConfiguration.className, function()
{
    /**
     * Configuration Test
     */
    function prepareParameters(parameters)
    {
        const fixture = projectFixture.createStatic(true);
        const moduleConfiguration = new GravModuleConfiguration(fixture.globalConfiguration, fixture.buildConfiguration);
        if (parameters && parameters.length)
        {
            parameters.push(moduleConfiguration);
            return parameters;
        }
        else
        {
            return [undefined, undefined, {}, undefined, undefined, undefined, fixture.globalRepository, fixture.buildConfiguration, moduleConfiguration];
        }
    }

    configurationSpec(GravConfiguration, 'export/GravConfiguration', prepareParameters, { identifier: 'grav' });
});

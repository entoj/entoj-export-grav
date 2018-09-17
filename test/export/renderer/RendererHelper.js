'use strict';

/**
 * Exports
 * @ignore
 */
module.exports.options = function(dynamic, fixtureConfiguration)
{
    const result =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const GravModuleConfiguration = require(GRAV_SOURCE + '/configuration/GravModuleConfiguration.js').GravModuleConfiguration;
            const GravConfiguration = require(GRAV_SOURCE + '/export/GravConfiguration.js').GravConfiguration;
            const moduleConfiguration = new GravModuleConfiguration(global.fixtures.globalConfiguration, buildConfiguration);
            return new GravConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        basePath: GRAV_FIXTURES + '/nodeRenderer'
    };
    if (dynamic === true)
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createDynamic(fixtureConfiguration);
    }
    else
    {
        result.createFixture = () => require('entoj-system/test').fixture.project.createStatic(fixtureConfiguration);
    }
    result.resultExtension = '.j2';
    return result;
};

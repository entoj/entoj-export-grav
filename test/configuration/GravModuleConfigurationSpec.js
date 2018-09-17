'use strict';

/**
 * Requirements
 */
const GravModuleConfiguration = require(GRAV_SOURCE + '/configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const baseSpec = require('entoj-system/test').BaseShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(GravModuleConfiguration.className, function()
{
    /**
     * Base Test
     */
    baseSpec(GravModuleConfiguration, 'configuration/GravModuleConfiguration', () =>
    {
        return [global.fixtures.globalConfiguration, global.fixtures.buildConfiguration];
    });


    beforeEach(function()
    {
        global.fixtures = projectFixture.createStatic();
    });
});

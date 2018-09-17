'use strict';

/**
 * Requirements
 */
const GravRenderer = require(GRAV_SOURCE + '/export/GravRenderer.js').GravRenderer;
const GravConfiguration = require(GRAV_SOURCE + '/export/GravConfiguration.js').GravConfiguration;
const GravModuleConfiguration = require(GRAV_SOURCE + '/configuration/GravModuleConfiguration.js').GravModuleConfiguration;
const GravNodeRenderers = require(GRAV_SOURCE + '/export/renderer/index.js');
const rendererSpec = require('entoj-system/test').export.RendererShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(GravRenderer.className, function()
{
    /**
     * Renderer Test
     */
    const testFixtures =
    {
        'should render conditions': 'conditions',
        'should render assignments': 'assignments',
        'should render calls': 'calls',
        'should render loops': 'loops',
        //'should render filter': 'filter',
        'should render macros': 'macro'
    };
    const options =
    {
        configurationCreator: function(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration)
        {
            const moduleConfiguration = new GravModuleConfiguration(global.fixtures.globalConfiguration, global.fixtures.buildConfiguration);
            return new GravConfiguration(entity, macro, settings, parser, renderer, transformer, globalRepository, buildConfiguration, moduleConfiguration);
        },
        fixtureInputPath: GRAV_FIXTURES + '/renderer',
        fixtureExpectedPath: GRAV_FIXTURES + '/renderer',
        createFixture: () => projectFixture.createDynamic()
    };
    const prepareParameters = (parameters) =>
    {
        global.fixtures.context.di.map('nunjucks.filter/ImageUrlFilter.dataProperties', ['src']);
        global.fixtures.context.di.map('nunjucks.filter/LinkUrlFilter.dataProperties', ['url']);
        const classes = GravNodeRenderers.rendererList;
        const nodeRenderers = global.fixtures.context.createInstances(classes);
        return [nodeRenderers];
    };
    rendererSpec(GravRenderer, 'export/GravRenderer', prepareParameters, testFixtures, options);
});

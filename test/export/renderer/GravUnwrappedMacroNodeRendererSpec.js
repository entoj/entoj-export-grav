'use strict';

/**
 * Requirements
 */
const GravUnwrappedMacroNodeRenderer = require(GRAV_SOURCE + '/export/renderer/GravUnwrappedMacroNodeRenderer.js').GravUnwrappedMacroNodeRenderer;
const nodeRendererSpec = require('entoj-system/test').export.NodeRendererShared;


/**
 * Spec
 */
describe(GravUnwrappedMacroNodeRenderer.className, function()
{
    /**
     * NodeRenderer Test
     */
    const options = require('./RendererHelper.js').options();
    options.settings =
    {
        unwrap: true
    };
    nodeRendererSpec(GravUnwrappedMacroNodeRenderer, 'export.renderer/GravUnwrappedMacroNodeRenderer', undefined, options);
});

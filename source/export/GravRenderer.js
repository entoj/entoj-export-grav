'use strict';

// Requirements
const TwigRenderer = require('entoj-export-twig').export.TwigRenderer;


/**
 * @memberOf export
 * @extends export.Renderer
 */
class GravRenderer extends TwigRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export/GravRenderer';
    }


    /**
     * @inheritDoc
     */
    static get injections()
    {
        return { 'parameters': ['export/GravRenderer.nodeRenderers', 'export/GravRenderer.options'] };
    }
}


// Exports
module.exports.GravRenderer = GravRenderer;

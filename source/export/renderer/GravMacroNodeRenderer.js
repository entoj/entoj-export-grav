'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigMacroNodeRenderer = require('entoj-export-twig').export.renderer.TwigMacroNodeRenderer;


/**
 * Renders a macro call
 */
class GravMacroNodeRenderer extends TwigMacroNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/GravMacroNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    addParameters(isFirst, node, configuration)
    {
        return Promise.resolve((isFirst ? '' : ', ') + 'page');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravMacroNodeRenderer = GravMacroNodeRenderer;

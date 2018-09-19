'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigCallNodeRenderer = require('entoj-export-twig').export.renderer.TwigCallNodeRenderer;


/**
 * Renders a macro call
 */
class GravCallNodeRenderer extends TwigCallNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/GravCallNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    addArguments(isFirst, node, configuration)
    {
        return Promise.resolve((isFirst ? '' : ', ') + 'page');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravCallNodeRenderer = GravCallNodeRenderer;

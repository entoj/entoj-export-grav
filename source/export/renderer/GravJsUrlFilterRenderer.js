'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigFilterNodeRenderer = require('entoj-export-twig').export.renderer.TwigFilterNodeRenderer;

/**
 * Renders the |markup filter.
 */
class GravJsUrlFilterRenderer extends TwigFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/GravJsUrlFilterRenderer';
    }


    /**
     * @type {Boolean|Array}
     */
    get filterName()
    {
        return ['jsUrl'];
    }


    /**
     * @return {Promise<String>}
     */
    render(node, configuration)
    {
        if (!node || !configuration)
        {
            return Promise.resolve('');
        }
        const filter = node.find('FilterNode', { name: this.filterName });
        if (!filter)
        {
            throw new Error('Could not locate jsUrl filter in ' + node.type);
        }
        let jsUrl = filter.value.value;
        if (!jsUrl)
        {
            jsUrl = 'common.js';
        }

        return Promise.resolve('url(\'theme://assets/js/' + jsUrl + '\')');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravJsUrlFilterRenderer = GravJsUrlFilterRenderer;

'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigFilterNodeRenderer = require('entoj-export-twig').export.renderer.TwigFilterNodeRenderer;


/**
 * Renders the |markup filter.
 */
class GravCssUrlFilterRenderer extends TwigFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/CmMarkupFilterRenderer';
    }


    /**
     * @type {Boolean|Array}
     */
    get filterName()
    {
        return ['cssUrl'];
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
            throw new Error('Could not locate cssUrl filter in ' + node.type);
        }
        let cssUrl = filter.value.value;
        if (!cssUrl)
        {
            cssUrl = 'common.css';
        }

        return Promise.resolve('url(\'theme://assets/css/' + cssUrl + '\')');
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravCssUrlFilterRenderer = GravCssUrlFilterRenderer;

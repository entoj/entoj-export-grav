'use strict';

/**
 * Requirements
 * @ignore
 */
const TwigFilterNodeRenderer = require('entoj-export-twig').export.renderer.TwigFilterNodeRenderer;
const co = require('co');


/**
 * Renders the |imageUrl filter.
 */
class GravImageUrlFilterRenderer extends TwigFilterNodeRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/GravImageUrlFilterRenderer';
    }


    /**
     * @type {Boolean|Array}
     */
    get filterName()
    {
        return ['imageUrl'];
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
        const promise = co(function*()
        {
            let result = '';
            result+= yield configuration.renderer.renderNode(node.value, configuration);
            result+= '|' + node.name + '(';
            const args = ['page'];
            if (node.arguments)
            {
                for (const argument of node.arguments)
                {
                    args.push(yield configuration.renderer.renderNode(argument.value, configuration));
                }
            }
            result+= args.join(', ');
            result+= ')';
            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravImageUrlFilterRenderer = GravImageUrlFilterRenderer;

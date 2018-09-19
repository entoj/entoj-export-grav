'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeListRenderer = require('entoj-system').export.renderer.NodeListRenderer;
const prepareParameters = require('entoj-system').export.renderer.helper.prepareParameters;
const co = require('co');


/**
 * Renders a macro
 */
class GravUnwrappedMacroNodeRenderer extends NodeListRenderer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.renderer/GravUnwrappedMacroNodeRenderer';
    }


    /**
     * @return {Promise<Boolean>}
     */
    willRender(node, configuration)
    {
        return Promise.resolve(node && node.is('MacroNode') && configuration.settings.unwrap);
    }


    /**
     * @return {Promise<Boolean>}
     */
    addParameters(isFirst, node, configuration)
    {
        return Promise.resolve((isFirst ? '' : ', ') + 'page');
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
            // Prepare
            let result = '';
            const macroConfiguration = yield configuration.getMacroConfiguration(node.name);

            // Parameters
            const parameters = prepareParameters(node, macroConfiguration, configuration, 'literals');
            for (const paramName in parameters)
            {
                if (parameters[paramName].value !== null)
                {
                    result+= '{% set ' + paramName + ' = ' + paramName + '|default(';
                    result+= parameters[paramName].value;
                    result+= ') %}\n';
                }
            }

            // Generate body
            const body = yield configuration.renderer.renderList(node.children, configuration);

            // Add imports
            let isFirst = true;
            for (const callName in configuration.macroCalls)
            {
                if (isFirst)
                {
                    result+= '\n';
                    isFirst = false;
                }
                const call = configuration.macroCalls[callName];
                call.addedInclude = true;
                result+= '{% from \'' + call.includePath + '\' import ' + call.macro.name + ' %}\n';
            }

            // Add body
            result+= body;

            return result;
        });
        return promise;
    }
}


/**
 * Exports
 * @ignore
 */
module.exports.GravUnwrappedMacroNodeRenderer = GravUnwrappedMacroNodeRenderer;

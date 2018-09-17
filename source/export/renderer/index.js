/**
 * @namespace export.renderer
 */
module.exports =
{
    GravUnwrappedMacroNodeRenderer: require('./GravUnwrappedMacroNodeRenderer.js').GravUnwrappedMacroNodeRenderer,

    rendererList:
    [
        require('./GravUnwrappedMacroNodeRenderer.js').GravUnwrappedMacroNodeRenderer
    ].concat(require('entoj-export-twig').export.renderer.rendererList)
};

/**
 * @namespace export.renderer
 */
module.exports =
{
    GravCssUrlFilterRenderer: require('./GravCssUrlFilterRenderer.js').GravCssUrlFilterRenderer,
    GravJsUrlFilterRenderer: require('./GravJsUrlFilterRenderer.js').GravJsUrlFilterRenderer,
    GravUnwrappedMacroNodeRenderer: require('./GravUnwrappedMacroNodeRenderer.js').GravUnwrappedMacroNodeRenderer,

    rendererList:
    [
        require('./GravCssUrlFilterRenderer.js').GravCssUrlFilterRenderer,
        require('./GravJsUrlFilterRenderer.js').GravJsUrlFilterRenderer,
        require('./GravUnwrappedMacroNodeRenderer.js').GravUnwrappedMacroNodeRenderer
    ].concat(require('entoj-export-twig').export.renderer.rendererList)
};

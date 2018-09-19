/**
 * @namespace export.renderer
 */
module.exports =
{
    transformerList:
    [
        require('entoj-system').export.transformer.MapParametersTransformer,
        require('entoj-system').export.transformer.MapVariablesTransformer
    ].concat(require('entoj-export-twig').export.transformer.transformerList)
};

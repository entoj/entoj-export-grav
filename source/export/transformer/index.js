/**
 * @namespace export.renderer
 */
module.exports =
{
    transformerList:
    [
        require('entoj-system').export.transformer.MapParametersTransformer,
    ].concat(require('entoj-export-twig').export.transformer.transformerList)
};

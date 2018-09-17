'use strict';

// Requirements
const TwigTransformer = require('entoj-export-twig').export.TwigTransformer;


/**
 * @memberOf export
 * @extends export.Transformer
 */
class GravTransformer extends TwigTransformer
{
    /**
     * @inheritDocs
     */
    static get className()
    {
        return 'export/GravTransformer';
    }


    /**
     * @inheritDocs
     */
    static get injections()
    {
        return { 'parameters': ['export/GravTransformer.nodeTransformers'] };
    }
}


// Exports
module.exports.GravTransformer = GravTransformer;

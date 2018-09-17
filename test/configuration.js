'use strict';

/**
 * Configure path
 */
const path = require('path');
global.GRAV_SOURCE = path.resolve(__dirname + '/../source');
global.GRAV_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.GRAV_TEST = __dirname;


/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;

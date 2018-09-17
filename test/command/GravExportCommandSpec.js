'use strict';

/**
 * Requirements
 */
const GravExportCommand = require(GRAV_SOURCE + '/command/GravExportCommand.js').GravExportCommand;
const exportCommandSpec = require('entoj-system/test').command.ExportCommandShared;
const projectFixture = require('entoj-system/test').fixture.project;


/**
 * Spec
 */
describe(GravExportCommand.className, function()
{
    /**
     * Command Test
     */
    function prepareParameters()
    {
        const fixture = projectFixture.createDynamic();
        return [fixture.context];
    }

    exportCommandSpec(GravExportCommand, 'command/GravExportCommand', prepareParameters, { action: 'grav' });
});

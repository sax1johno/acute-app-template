/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var architect = require('architect'),
    acute_utils = require('acute-utils'),
    path = require('path'),
    configPath = path.join(__dirname, "config.js");

// /**
//  * Allows you to return the C9 architect application created by this plugin.
//  **/

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
    acute_utils.loadApp(configPath, function(err, arch) {
        register(err, {
          "acute-user-base": arch
        });
    });
};
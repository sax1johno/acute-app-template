/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var architect = require('architect'),
    path = require('path'),
    acute_utils = require('acute-utils'),
    configPath = path.join(__dirname, "config.js");

/**
 * @options is the hash of options the user passes in when creating an instance
 * of the plugin.
 * @imports is a hash of all services this plugin consumes.
 * @register is the callback to be called when the plugin is done initializing.
 */
module.exports = function setup(options, imports, register) {
    acute_utils.loadApp(configPath, function(err, arch) {
        register(err, {
          "johnwoconnor.com": arch
        });
    });

};
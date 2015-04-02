/**
 * This file runs the application bootstrap, and can be used to run other
 * arbitrary code and configurations.
 **/
var architect = require('architect'),
    path = require('path'),
    configPath = path.join(__dirname, "config.js"),
    acute_utils = require('acute-utils'),
    thisApp = require('./index'),
    Q = require('q');

/**
 * Finally, let's boot up this app and get it running.  Once the application
 * is booted, you can use any mechanism you want to listen on any port
 * you'd like and the application configures the port.
 **/

acute_utils.loadApp(configPath, function(err, arch) {
    if (!err) {
        /**
         * Listen on the configured port.
         **/
        var appService = arch.getService("app");
        var userApp = arch.getService('acute-user-base').getService('app');
        
        // var userBase = arch.getService('acute-user-base');
        // var userSchema = userBase.getService('models').getSchema('user');
        
        appService.app.use('/user', userApp.app);
        appService.app.listen(appService.config.port);
        console.log("Now listening to acute app on port ", appService.config.port);
    } else {
        // If the boot promise is rejected, then display the errors.
        console.error("Unable to boot application: ", err);
    }
});
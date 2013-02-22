/**
 * Use this to modify application boot parameters.  You can also use this to set the loglevel of the
 * application boot, and perform any actions before the boot takes place.
 **/
 
 var simpleLogger = require('ghiraldi-simple-logger');
 
 simpleLogger.loglevel = 'debug';
 
 simpleLogger.log("debug", "Starting up the BlogApp application");
 
 require('./app.js');
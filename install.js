/**
 * This is the install file for your new express-powered Ghiraldi app.
 * If you have tasks that need to be completed prior to running the Ghiraldi framework (such as creating initial
 * user types or admin users), you can do so using this install script.
 * 
 * To use, just place your installation tasks beneath the INSTALL TASKS GO HERE comments and run the install script
 * when you're ready to install.
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. 
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Copyright (C) 2012, John O'Connor
 **/
 
/** 
 * First, bootstrap the framework.iterate through the plugins and run the "install" file on each one.
 **/
 var fs = require('fs'),
    logger = require('ghiraldi-simple-logger'),
    _ = require('underscore'),
    exec = require('child_process').exec,
    child,
    pluginRegistry = require('ghiraldi-plugin-registry').registry;
    
var express = require('express');

var app = express();

// Boot the MVC framework and start listening if the boot completes successfully.
var mvc = require('./mvc');

logger.loglevel = 'debug';

mvc.boot(app).then(function(statusObject) {
    // console.log(statusObject.port);
    logger.log('debug', 'app was boot successfully.  Running installation scripts now.');
    var loadedPlugins = pluginRegistry.getKeys();
    logger.log('debug', "Loaded the following plugins: " + JSON.stringify(loadedPlugins));
    loadedPlugins.forEach(function(p) {
        // Requiring should automatically run the scripts.
        var install = pluginRegistry.get(p).getModule('/install');
        logger.log('debug', 'Install location = ' + install);        
        try {
            require(install).install();
        } catch (e) {
            logger.log('warning', e);
            // do nothing.
        }
    });
}, function(err) {
    logger.log('error', "Failed to boot: " + JSON.stringify(err));
});

/** INSTALL TASKS GO HERE **/
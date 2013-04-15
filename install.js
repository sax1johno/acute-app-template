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
    pluginRegistry = require('ghiraldi-plugin-registry');
    
var express = require('express');

var app = express();

// Boot the MVC framework and start listening if the boot completes successfully.
var mvc = require('./mvc');

app.on('boot', function(port) {
    // Once the framework is booted, iterate through the plugins and run the install function on each of them.
    fs.readdir(__dirname + '/app/plugins', function(err, plugins) {
        if (err) {
            logger.log("warning", err);
        } else if (_.isNull(plugins) || _.isUndefined(plugins)) {
            logger.log('debug', "No plugins found");    
        } else {
            try {
                if (plugins.length === 0) {
                    logger.log('debug', 'Finished running install scripts');
                } else {
                    _.each(plugins, function(plugin, index, pluginList) {
                        var installFile = __dirname + '/app/plugins/' + plugin + '/install.js';
                        var include = './app/plugins/' + plugin + '/install'
                        logger.log('debug', installFile);
                        fs.stat(installFile, function(err, stats) {
                            if (!err) {
                                logger.log('object', JSON.stringify(stats));
                                require(include).install();
                            }
                            if (index >= _.size(pluginList) - 1) {
                                process.exit;
                            }
                        });
                        // require(__dirname + '/app/plugins' + plugin);
                    });
    //                    bootPlugin(app, plugins[index], function() {
    //                        logger.log('trace', index);
    //                        if (index == _.size(plugins) - 1) {
    //                            bootEventEmitter.emit('bootPlugins');
    //                        } else {
    //                            index++;
    //                            bootPlugin(app, plugins[index], this);
    //                        }
    //                    });
                }
            } catch (e) {
                logger.log('warning', e.stack);
            }
        }
    });
});

app.on('bootError', function(err) {
    logger.log('error', "Failed to boot: " + JSON.stringify(err.stack));
});

mvc.boot(app);


/** INSTALL TASKS GO HERE **/
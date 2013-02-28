/**
 * index.js
 * This file contains a simple index controller for Rosetta.
 * @author John O'Connor
 * @license MIT License
 * 
 * Copyright 2012, John O'Connor
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

var plugins = require('ghiraldi-plugin-registry').registry;

var index = function(req, res) {
    var views = plugins.get('app');
    console.log("plugins = " + JSON.stringify(plugins.log()));
    console.log("view = " + JSON.stringify(views));
    
    res.render(plugins.get('app').views['index'], {title: 'Ghiraldi'});
};

module.exports = {
    routes: [
        { 
            verb: 'get',
            route: '/',
            method: index
        }
    ]
}
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    registry = require('mongoose-schema-registry'),
    _ = require('underscore'),
    logger = require('ghiraldi-simple-logger');

var ConfigSettings = registry.getSchema('ConfigSettings');

ConfigSettings.add({
    title    : String
});

registry.add('ConfigSettings', ConfigSettings);

module.exports = {
    'ConfigSettings': ConfigSettings
};
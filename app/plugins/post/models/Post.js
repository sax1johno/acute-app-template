var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    registry = require('mongoose-schema-registry'),
    _ = require('underscore'),
    logger = require('ghiraldi-simple-logger');

var Post = registry.get('Post');

Post.add({
    title   : String,
    slug    : String,
    body    : String
});

module.exports = {
    'Post': Post
};
/**
 * User.js
 * The core model for a basic User object. The user object provides basic authentication using
 * username and password, using a SHA1 salted hash.
 **/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    passwordUtils = require('../util/PasswordUtils.js'),
    registry = require('mongoose-schema-registry');

var SALT_LENGTH = 30;

var User = new Schema({
    username        : String,
    password        : {type: String, set: setPassword},
    salt            : String
});

User.methods.authenticate = authenticate;

function setPassword(pPassword) {
    this.salt = passwordUtils.generateSalt(SALT_LENGTH);
    return passwordUtils.hash(pPassword, this.salt);
}

function authenticate(pPassword) {
    return passwordUtils.validate(this.password, pPassword, this.salt);
}

module.exports = User;

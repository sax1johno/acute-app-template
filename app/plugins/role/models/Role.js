var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    registry = require('mongoose-schema-registry'),
    _ = require('underscore'),
    logger = require('ghiraldi-simple-logger');

var Role = registry.get('Role');

Role.add({
    title    : String,
});

/** 
 * Role also modifies the user schema.  Since we don't know whether or not we have one registered,
 * let's create one as a placeholder.
 **/
var User = registry.get('User');
logger.log('trace', 'User in role.js = ' + JSON.stringify(User));

User.add({role : {type: ObjectId, ref: 'Role'}});
registry.add('User', User);


module.exports = {
    'Role': Role,
    'User': User
};
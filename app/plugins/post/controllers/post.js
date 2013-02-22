var mongoose = require('mongoose'),
    logger = require('ghiraldi-simple-logger');

// require('../models/User.js');
var Post = mongoose.model('Post');
var _ = require('underscore');

function get(id, fn) {
    Post.findById(id, fn);
}

var index = function(req, res){
    logger.log('debug', 'In the user index');
    Post.find({}, function(err, posts) {
        if (err) {
            logger.log('error', err);
            res.send(err);
        } else {
            res.send(posts);            
        }
    });
};

var add = function(req, res) {
    // res.render('../views/add.jade', {title: 'Add a User', selected: 'users'});
    res.send({'message': 'Add page for posts. This should be overridden'});
};

var show = function(req, res, next){
    get(req.params.id, function(err, post){
        if (err) return next(err);
        // res.render('../views/show.jade', {user: user, title: 'User View', selected: 'users'});
        res.send(post);
    });
};

var edit = function(req, res, next){
    get(req.params.id, function(err, post) {
        if (err) return next(err);
        res.send({'message': 'Edit page for a post.  This should be overridden.'});
    });
};

var update = function(req, res, next){
    var thisPost = req.body.post;
    var id = req.params.id;
    get(id, function(err, post) {
        if (err) {
            req.session.messages = {'error': 'Unable to update: ' + err};
            return next(err);
        }
        var thisPost = req.body.post;
        _.extend(post, thisPost);
        post.save(function(error) {
            if (!error) {
                res.send({'success': 'Successfully updated post  ' + post.title});
            } else {
                res.send({'error': 'Unable to update: ' + error});
            }
        });
    }
    );
};

var create = function(req, res, next) {
    var thisPost = req.body.post;
    var addedPost = new Post();
    _.extend(addedPost, thisPost);
    addedPost.save(function(error) {
        if (!error) {
            res.send({'success': 'Successfully created new user  ' + addedPost.title});
        } else {
            res.send({'error': 'Unable to create: ' + error});
        }
    });
}; 

var destroy =  function(req, res, next) {
    var id = req.params.id;
    get(id, function(err, post) {
        if (err) return next(err);
        var deleted = post;
        post.remove(function(err) {
            if (!err) {
                res.send({'success': 'Successfully deleted  ' + deleted.username});
            }
        });
    });
};

module.exports = {
  // /users
  routes: [
    {
        method: index,
        verb: 'get',
        route: '/'
    },
    {
        method: show,
        verb: 'get',
        route: '/show/:id.:format?'
    },
    {
        method: add,
        verb: 'get',
        route: '/add'
    },
    {
        method: create,
        verb: 'post',
        route: '/create'
    },
    {
        method: edit,
        verb: 'get',
        route: '/edit/:id'
    },
    {
        method: update,
        verb: 'put',
        route: '/:id'
    },
    {
        method: destroy,
        verb: 'del',
        route: '/:id'
    }
  ]
};
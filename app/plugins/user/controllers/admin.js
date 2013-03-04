var logger = require('ghiraldi-simple-logger'),
    plugins = require('ghiraldi-plugin-registry').registry

var index = function(req, res){
    console.log('User admin');
    res.send("user admin");
    // res.render(plugins.get('admin').views['index'], {});
};

module.exports = {
  // /users
  routes: [
    {
        method: index,
        verb: 'get',
        route: '/'
    }
  ]
};
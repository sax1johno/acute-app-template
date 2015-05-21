/**
 * Each controller receives an injector and a router.  Injectors can be used to
 * request services from the app injector, and router is used to register 
 * routes on the app.  By default, the route for a controller follows its file
 * structure, with "controller/index.js" mapping to "/" and everything else
 * mapping to it's file name or folder name.
 * 
 * eg: controller/test.js would map to a route with the prefix of /test/:action
 * eg: controller/folder/file_name would map to a route with prefix of /folder/file_name/:action
 * You specify routes and middle-ware directly, and other plugins can apply
 * global or specific middleware to your controller (ie: anything in the /admin requires
 * admin authentication)
 * 
 * The export returns an object with the router and optional config. 
**/
module.exports = function(router) {
   // ex: set up a main responding method.
   var index = function(req, res, next) {
      res.render("index.jade", {});
   };
   
   router.all("/", index);
   router.all("/cis67", function(req, res) {
      res.redirect('https://sites.google.com/site/joconnorcis67');
   });
   
   router.all("/cis18b", function(req, res) {
      res.redirect('https://sites.google.com/site/joconnorcis18b');
   });
   
   router.all("/cis21", function(req, res) {
      res.redirect('https://sites.google.com/site/johnoconnorcis21');
   });

   router.all("/blog", function(req, res, next) {
      res.redirect("https://johnwoconnor.blogspot.com");
   });
   
   router.all("/development", function(req, res, next) {
      res.redirect("http://johnwoconnor.blogspot.com/p/big-list-of-development-resources.html");
   });

   router.all("/design", function(req, res, next) {
      res.redirect("http://johnwoconnor.blogspot.com/p/big-list-of-design-resources.html");
   });
   
   return {
      routes: router,
      config: {
           // base_path: "/test"
      }
   }
}
aCute User Base and µService Template
==============
aCute applications can be composed of other aCute apps and microservices.  Services are used
and shared as part of the Cloud9 architect dependency container.

Generally, an app consists of two different types of services:
1) Plugins
    A "plugin" is a component of the application FRAMEWORK and adds functionality to the framework
    Plugins generally do not operate as standalone microservices but instead are used by developers
    to build component apps (which we call microservices).
2) Apps
    An application is a complete program or microservice that can either stand alone or be used to
    compose other applications.  Applications implement the business logic for the developer,
    whereas "plugins" add functionality to the framework so developers can build their business
    logic apps.
    
The acute-user-base is a microservice template that can be used to create compose-able apps.

The application can be a hosted microservice on a web server by running the "app.js" file, or
can be included as a local service using the service injection module (the same one the
application framework uses).

The app folder contains the structure of an application.aCute

assets/ -- this folder contains all frontend that are directly included into the public folder.
controllers/ -- Application controllers with routes
middleware/ -- Custom middleware that can be used with routes
models/ -- data models
scripts/ -- uncompiled, uncompressed, unminified scripts (javascript, coffeescript, etc)
    : bower_components - components from the bower package management system
    : vendor - all non-bower vendor software
    : folder1 - a folder containing some javascript.  All js files are flattened into
                resource bundles, which are configured by environment and "application".
                "applications" allows developers to have distinct parts of the app that don't
                serve certain resources to the frontend.
stylesheets -- all uncompiled, unprocessed, uncompressed stylesheet files (less, scss, etc)
    : vendor/ - contains all vendor files (ie: not original)
    : folder1 - a folder containing some css.  All styles are eventually flattened into
                resource bundles, which are configured by environment and by "application".
                "applications" allow a developer to have distinct parts of the app that don't
                serve certain resources to the frontend.
views/ -- contains the view templates
www/ -- contains all of the public statically served files.  These are automatically generated
        and this folder should not be modified.
    : js/ - all compiled, minified javascript files.
    :: applicationName_environment.min.js - contains the minified javascript for the specified application in the specified environment.
    :: applicationName_environment.map - the source map for the compressed javascript
    : css/ - all compiled, minified css files
    :: applicationName_environment.min.css - contains the minified css for the specified application in the specified environment.
    :: applicationName_environment.map - contains the source map for the compressed CSS
    : images/ - all images pulled from "assets"
app.js -- The application bootstrap.  This runs the application.
config.js       the configuration data for the application
routes.js       contains any global route overrides.
Gulpfile.js     a GULP-flavored build script that makes development a little easier.  Tasks
                can be run from the acute binary command (ie: for generating new user models and
                etc).
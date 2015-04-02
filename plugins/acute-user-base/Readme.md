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
config.js -- the configuration data for the application
routes.js -- contains any global route overrides.

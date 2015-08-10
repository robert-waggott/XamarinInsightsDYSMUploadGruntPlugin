/*
 * grunt-XamarinInsightsDYSMUpload
 * https://github.com/robert-waggott/XamarinInsightsDYSMUploadGruntPlugin
 *
 * Copyright (c) 2015 robert.waggott
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask("XamarinInsightsDYSMUpload", "Quick way to zip and upload your iOS DYSM to Xamarin Insights", function() {
        var data = this.data;
        var directory = data.directory;
        var apiKey = data.apiKey;

        grunt.log.writeln(directory);
        grunt.log.writeln(apiKey);

        if (!directory) {
            grunt.fail.fatal("directory not specified");
        }

        if (!apiKey) {
            grunt.fail.fatal("apiKey not specified");    
        }
    });
};

/*
 * grunt-XamarinInsightsDYSMUpload
 * https://github.com/robert-waggott/XamarinInsightsDYSMUploadGruntPlugin
 *
 * Copyright (c) 2015 robert.waggott
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        XamarinInsightsDYSMUpload: {
            debug: {
                dysm: "/foo/bar/ed.dYSM",
                apiKey: "abc"
            }
        }
    });

    grunt.loadTasks("tasks");

    grunt.registerTask("default", [
        "XamarinInsightsDYSMUpload:debug"
    ]);
};
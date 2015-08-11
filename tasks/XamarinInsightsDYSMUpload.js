/*
 * grunt-XamarinInsightsDYSMUpload
 * https://github.com/robert-waggott/XamarinInsightsDYSMUploadGruntPlugin
 *
 * Copyright (c) 2015 robert.waggott
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
    var exec = require("child_process").exec;

    grunt.registerMultiTask("XamarinInsightsDYSMUpload", "Quick way to zip and upload your iOS DYSM to Xamarin Insights", function() {
        var data = this.data;
        var dysm = data.dysm;
        var apiKey = data.apiKey;

        if (!dysm) {
            grunt.fail.fatal("dysm not specified");
        }

        if (!apiKey) {
            grunt.fail.fatal("apiKey not specified");    
        }

        var zipCommand = [
            'zip', 
            '-r', 
            dysm + '.zip', 
            dysm
        ].join(' ');

        var curlCommand = [
            'curl',
            '-F "dsym=@' + dysm + '.zip;type=application/zip"',
            'https://xaapi.xamarin.com/api/dsym?apikey=' + apiKey,
        ].join(' ');

        exec(zipCommand, function(error, stdout, stderr) {
            exec(curlCommand, function(error, stdout, stderr) {
                if (error !== null) {
                    grunt.fail.fatal(error);
                }
            });            

            if (error !== null) {
                grunt.fail.fatal(error);
            }
        });      
    });
};
/**
 * Created by avi on 19-Dec-15.
 */
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;
var filesToWatch = ["./**/*"];

gulp.task('serve', [], function() {
    browserSync.init(null, {
        server: "./app.js",
        port: 3000,
        files: filesToWatch,
        browser: ["google chrome"]
    });
});

gulp.task('test-quality', [], function(){
    console.log('running jshint tests');
    var command = 'bash ./node_modules/.bin/jshint . --reporter checkstyle -c ./config/jshint-config.json > jshint-report.xml';
    exec(command, function(err){
        var message = err || 'jshint finished. Output file: jshint-report.xml';
        console.log(message.toString());
    });
    console.log('running jscpd tests...');
    exec('bash ./node_modules/.bin/jscpd', function(err){
        var message = err || 'jscpd finished. Output file: jscpd-report.xml';
        console.log(message.toString());
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['serve']);
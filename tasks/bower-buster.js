'use strict';
module.exports = function (grunt) {
    var path = require('path');
    var _ = grunt.util._;
    
    grunt.registerMultiTask('bowerbuster', 'Dump Bower components into bowerbuster.json config', function () {
	var cb = this.async();
        var excludes = this.options({exclude: []}).exclude;
        var filePath;
        if (this.data.path) {
	    filePath = this.data.path;
        } else {
            filePath = 'bowerbuster.json';
        }
       
	require('bower').commands.list({paths: true})
	    .on('data', function (data) {
		var paths = [];
          	if (data) {
		    // remove extension from JS files and remove excludes
		    data = _.forOwn(data, function (val, key, obj) {
			if (excludes.indexOf(key) !== -1 || key === 'requirejs') {
			    delete obj[key];
			    return;
			}
                        
			obj[key] = grunt.file.isDir(val) ? val : val.replace(/\.js$/, '');
		    });
                    
                    // convert into array useful to buster.js sources config
                    for (var propertyName in data) {
                        paths.push(data[propertyName]);
                    }
                    grunt.file.write(filePath, JSON.stringify(paths) + '\n');
		    grunt.log.writeln('Updated Buster.JS config with installed Bower components'.green);
		    cb();
		}
	    })
	    .on('error', function (err) {
		grunt.warn(err.message);
		cb();
	    });
    });
};

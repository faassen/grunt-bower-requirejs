'use strict';
module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			]
		},
		clean: {
			test: [
				'tmp',
				'components'
			]
		},
		nodeunit: {
			tasks: ['test/*_test.js']
		},
		bowerbuster: {
			options: {
			    exclude: ['underscore']
			},
			standard: {
                            path: "tmp/bowerbuster.json"
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('mkdir', function (dir) {
		require('fs').mkdirSync(dir);
	});

	grunt.registerTask('bower-install', function () {
		require('bower').commands
			.install(['jquery', 'underscore'])
			.on('end', this.async());
	});

	grunt.registerTask('test', [
		'clean',
		'mkdir:tmp',
		'bower-install',
		'bowerbuster',
		'nodeunit',
		'clean'
	]);

	grunt.registerTask('default', ['test']);
};

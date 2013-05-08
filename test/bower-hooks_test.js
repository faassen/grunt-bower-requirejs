'use strict';
var grunt = require('grunt');

exports.bowerBuster = {
	wireupComponent: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/bowerbuster.json');
		var expected = grunt.file.read('test/fixtures/bowerbuster-expected.json');
		test.equal(actual, expected, 'should wireup Bower components in bowerbuster.js');

		test.done();
	}
};

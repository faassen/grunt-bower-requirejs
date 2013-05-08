# grunt-bower-busterjs

Automagically wire-up installed Bower components into your Buster.JS config

Adapted from grunt-bower-requirejs which does the same for RequireJS. Thanks!

## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-bower-busterjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-busterjs');
```

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Example usage

```js
grunt.initConfig({
	bowerbuster: {
		target: {
			sources: 'bowerbuster.json'
		}
	}
});

grunt.loadNpmTasks('grunt-bower-busterjs');

grunt.registerTask('default', ['bower']);
```


## Documentation

When the `bower` task is run it merges the paths of installed Bower
components into a JSON file that can be loaded into your Buster.JS
config.

You trigger this task from another task in your Gruntfile or through
the CLI: `grunt bower`


### rjsConfig

**Required**  
Type: `String`

Specify a relative path to your RequireJS config.

Make sure to specify the `baseUrl` property in your RequireJS config if you want to use relative paths.


### Options

#### exclude

Default: `[]`  
Type: `Array`

Specify components to be excluded from being added to the RequireJS config.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php) and copyright Google

# grunt-bower-busterjs

Automagically wire-up installed Bower components into your Buster.JS
config

Adapted from grunt-bower-requirejs which does the same for
RequireJS. Thanks!

## Getting Started

If you haven't used [grunt][] before, be sure to check out the
[Getting Started][] guide, as it explains how to create a
[gruntfile][Getting Started] as well as install and use grunt
plugins. Once you're familiar with that process, install this plugin
with this command:

```shell
npm install grunt-bower-busterjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-busterjs');
```

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Example usage

```js
grunt.initConfig({
   bowerbuster: {
     path: 'bowerbuster.json'     
   },
   buster: {
        test: {
            config: 'buster.js'
        },
        server: {
            port: 1111
        }
   }
});

grunt.loadNpmTasks('grunt-bower-busterjs');
grunt.loadNpmTasks('grunt-buster');

grunt.registerTask('test', ['bowerbuster', 'buster']);
```

## Documentation

When the `bowerbuster` task is run generates a JSON file (default name: bowerbuster.json)
with the installed Bower components in it.

This file can then be loaded in your buster.js:

```js
var fs = require('fs');

var sources = JSON.parse(fs.readFileSync('bowerbuster.json', 'utf8'));
sources.push('src/**/*.js'); // add local sources under test
```

and then use these sources in the buster config:

```js
config["my tests"] = {
  ...
  sources: sources
  ...
};
```

You trigger this task from another task in your Gruntfile or through
the CLI: `grunt bowerbuster`


### path

**Optional**  
Type: `String`

Specify a relative path to the .json file to dump.

### Options

#### exclude

Default: `[]`  
Type: `Array`

Specify components to be excluded from being added to the .json file.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


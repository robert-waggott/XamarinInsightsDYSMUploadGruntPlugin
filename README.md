# grunt-XamarinInsightsDYSMUpload

> Quick way to zip and upload your iOS DYSM to Xamarin Insights

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-XamarinInsightsDYSMUpload --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-XamarinInsightsDYSMUpload');
```

## The "XamarinInsightsDYSMUpload" task

### Overview
In your project's Gruntfile, add a section named `XamarinInsightsDYSMUpload` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  XamarinInsightsDYSMUpload: {
    directory: "",
    apiKey: "abc"
  }
});
```

### Options

#### apiKey
Type: `String`
Default value: `''`

Your Xamarin Insights API key. 

#### directory
Type: `String`
Default value: `''`

The path to the directory where your generated DYSM is located. 

### Usage Examples

```js
grunt.initConfig({
  XamarinInsightsDYSMUpload: {
    directory: "",
    apiKey: "abc"
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
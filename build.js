var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');
var pkg = require('./package.json');
var assets = require('metalsmith-assets');

var dir = {
    base: __dirname + '/',
    lib: __dirname + '/lib/',
    source: './src/',
    dest: './www/'
  };

templateConfig = {
    engine: 'handlebars',
    directory: dir.source + 'template/',
    partials: dir.source + 'partials/',
    default: 'page.html'
  };

Metalsmith(__dirname)
  .metadata({
    title: "Agile Reaction",
    description: "Games/Software Development",
    generator: "Metalsmith",
    url: "http://www.agilereaction.com/",
    author: "Terrence Drumm",
    contact: "https://twitter.com/lttdog",
    version: pkg.version
  })
  .source(dir.source + "html/")
  .destination(dir.dest)
  .clean(true)
  .use(markdown())
  .use(permalinks())
  .use(layouts(templateConfig))
  .use(browserSync({
    server : "www",
    files  : [dir.source + "**/*"]
  }))
  .use(assets({
    source: dir.source + 'assets/', // relative to the working directory 
    destination: './' // relative to the build directory 
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
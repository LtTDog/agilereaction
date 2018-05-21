var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var browserSync = require('metalsmith-browser-sync');
var pkg = require('./package.json');
var assets = require('metalsmith-assets');
var collections = require('metalsmith-collections');
var linkcheck = require('metalsmith-linkcheck');
var imagemin = require('metalsmith-imagemin');
var htmlMinifier = require("metalsmith-html-minifier");
var compress = require('metalsmith-gzip');
var static = require('metalsmith-static');

var dir = {
  base: __dirname + '/',
  lib: __dirname + '/lib/',
  source: './src/',
  dest: './www/'
};

var staticConfig = {
  src: "public",
  dest: "."
}

templateConfig = {
  engine: 'handlebars',
  directory: dir.source + 'template/',
  partials: dir.source + 'partials/',
  default: 'page.html'
};

Metalsmith(__dirname)
  .metadata({
    siteTitle: "Agile Reaction",
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
  .use(static(staticConfig))
  .use(collections({ // determine page collection/taxonomy
    page: {
      pattern: '**/index.*',
      sortBy: 'priority',
      reverse: true,
      refer: false
    },
    games: {
      pattern: 'games/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      limit: 50,
      metadata: {
        layout: 'gamepage.html'
      }
    },
    projects: {
      pattern: 'projects/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      limit: 50,
      metadata: {
        layout: 'page.html'
      }
    },
    assets: {
      pattern: 'assets/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      limit: 50,
      metadata: {
        layout: 'page.html'
      }
    },
    pages: {
      pattern: 'pages/**/*',
      sortBy: 'priority',
      reverse: true,
      refer: true,
      limit: 50,
      metadata: {
        layout: 'page.html'
      }
    }
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts(templateConfig))
  .use(assets({
    source: dir.source + 'assets/', // relative to the working directory 
    destination: './' // relative to the build directory 
  }))
  .use(imagemin({
    optimizationLevel: 3,
    svgoPlugins: [{ removeViewBox: false }]
  }))
  .use(htmlMinifier())
  .use(compress())
  // .use(linkcheck())
  // .use(browserSync({
  //   server: "www",
  //   files: [dir.source + "**/*"]
  // }))
  .build(function (err, files) {
    if (err) { throw err; }
  });
'use strict'

var Metalsmith = require("metalsmith"),
  markdown = require("metalsmith-markdown"),
  sass = require("metalsmith-sass"),
  templates = require("metalsmith-templates"),
  ignore = require("metalsmith-ignore");

var metalsmith = Metalsmith(__dirname)
  .use(markdown())
  .use(sass())
  .use(templates({
    engine: "handlebars",
    directory: "./src/templates"
  }))
  .use(ignore([
    "templates/**/*"
  ]))

metalsmith
  .build(function(err){
    if (err) throw err
  })

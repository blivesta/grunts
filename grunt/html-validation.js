module.exports = function(grunt) {
  "use strict";
  grunt.config('validation', {
    options: {
      charset: 'utf-8',
      doctype: 'HTML5',
      failHard: false,
      reset: true,
      relaxerror: [
        'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
        'Element img is missing required attribute src.'
      ]
    },
    jekyll: {
      src: [
        '<%= pkg.dir.pub %>/index.html',
        '<%= pkg.dir.pub %>/**/*.html'
      ]
    }
  });
};

module.exports = function(grunt) {
  "use strict";
  grunt.config('gh-pages', {
    site: {
      options: {
        base: 'build/wwwroot',
        clone: 'build/gh-pages',
      },
      src: ['**/*'],
    },
  });
};

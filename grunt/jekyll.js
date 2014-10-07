module.exports = function(grunt) {
  "use strict";
  grunt.config('jekyll', {
    dist: {
      options: {
        config: '_config.yml'
      }
    }
  });  
};

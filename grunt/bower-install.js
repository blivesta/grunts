module.exports = function(grunt) {
  "use strict";
  grunt.config('bower', {
    install: {
      options: {
        targetDir: '<%= pkg.docs %>/vendor',
        layout: 'byComponent',
        install: true,
        verbose: false,
        cleanTargetDir: true,
        cleanBowerDir: false
      }
    }
  });

};

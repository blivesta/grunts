module.exports = function(grunt) {
  "use strict";
  grunt.config('copy', {
    dist: {
      expand: true,
      cwd: './<%= pkg.docs %>',
      src: [
        'js/jquery.<%= pkg.name %>.js',
        'js/jquery.<%= pkg.name %>.min.js',
        'css/*.css',
        'css/*.map'
      ],
      dest: './<%= pkg.dist %>'
    }
  });
};

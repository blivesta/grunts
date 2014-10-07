module.exports = function(grunt) {
  "use strict";
  grunt.config('clean', {
    files: [
      '<%= pkg.dir.dist %>/js/*.js',
      '<%= pkg.dir.dist %>/css/*.css',
      '<%= pkg.dir.dist %>/images/**'
    ]
  });

};

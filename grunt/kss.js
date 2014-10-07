module.exports = function(grunt) {
  "use strict";
  grunt.config('kss', {
    options: {
      includeType: 'css',
      includePath: '<%= pkg.dir.dist %>/css/<%= pkg.name %>.css',
    },
    dist: {
        files: {
          '<%= pkg.dir.pub %>': ['<%= pkg.dir.dist %>/css']
        }
    }
  });
};

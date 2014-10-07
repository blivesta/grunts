module.exports = function(grunt) {
  "use strict";
  grunt.config('less', {
    main: {
      options: {
        strictMath: true,
        sourceMap: true,
        outputSourceFiles: true,
        sourceMapURL: ['<%= pkg.name %>.css.map'],
        sourceMapFilename: '<%= pkg.dir.dist %>/css/<%= pkg.name %>.css.map'
      },
      files: {
        '<%= pkg.dir.dist %>/css/<%= pkg.name %>.css': '<%= pkg.dir.src %>/less/<%= pkg.name %>.less'
      } 
    },
    mainMin: {
      options: {
        cleancss: true
      },
      files: {
        '<%= pkg.dir.dist %>/css/<%= pkg.name %>.min.css': '<%= pkg.dir.dist %>/css/<%= pkg.name %>.css'
      }
    }
  });
};

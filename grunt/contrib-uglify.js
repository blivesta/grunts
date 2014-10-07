module.exports = function(grunt) {
  "use strict";
  grunt.config('uglify', {
    options: {
      banner: '<%= banner %>',
      report: 'min',
      mangle: false,
      compress:false,
    },
    main:{
      options: {
        indentLevel: 2,
        beautify: true
      },
      files :  { 
        '<%= pkg.dir.dist %>/js/<%= pkg.name %>.js' : [
          '<%= pkg.dir.src %>/js/<%= pkg.name %>.js'
        ]
      } 
    },
    mainMin:{
      files :  { 
        '<%= pkg.dir.dist %>/js/<%= pkg.name %>.min.js' : [
          '<%= pkg.dir.dist %>/js/<%= pkg.name %>.js' 
        ]
      } 
    }
  });
};

module.exports = function(grunt) {
  "use strict";
  grunt.config('jshint', {
    options: {
      jshintrc: '<%= pkg.dir.src %>/js/.jshintrc',
    },
    grunt: {
      src: ['Gruntfile.js','grunt/*.js']
    },
    main: {
      src: [
        '<%= pkg.dir.src %>/js/<%= pkg.name %>.js',
        '<%= pkg.dir.src %>/js/<%= pkg.name %>.min.js'
      ]
    }
  });
};

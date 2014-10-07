module.exports = function(grunt) {
  "use strict";
  grunt.config('csslint', {
    options: {
      csslintrc: '<%= pkg.dir.src %>/less/.csslintrc'
    },
    source: [
      '<%= pkg.dir.dist %>/css/<%= pkg.name %>.css',
    ]
  });
};

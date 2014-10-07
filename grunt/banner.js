module.exports = function(grunt) {
  "use strict";
  grunt.config('usebanner', {
    options: {
      position: 'top',
      banner: '<%= banner %>'
    },
    main: {
      src: '<%= pkg.dir.dist %>/css/*.css'
    }
  });

};

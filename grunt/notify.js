module.exports = function(grunt) {
  "use strict";
  grunt.config('notify', {
      options: {
        title: '<%= pkg.name %> Grunt Notify'
      },
      success:{
        options: {
          message: 'Success!'
        }
      }
  });
};

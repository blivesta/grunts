module.exports = function(grunt) {

  grunt.config('csscomb', {
    options: {
      config: '<%= pkg.dir.src %>/less/.csscomb.json'
    },
    main: {
      expand: true,
      cwd: '<%= pkg.dir.src %>/css/',
      src: ['*.css', '!*.min.css'],
      dest: '<%= pkg.dir.src %>/css/'
    }
  });

};

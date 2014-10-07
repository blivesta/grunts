module.exports = function(grunt) {
  "use strict";
  grunt.config('buildcontrol', {
      options: {
        dir: '<%= pkg.dir.public %>',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:<%= pkg.repository.user %>/<%= pkg.name %>.git',
          branch: 'gh-pages'
        }
      }
  });

};

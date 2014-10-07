module.exports = function(grunt) {
  "use strict";
  grunt.config('ftp-deploy', {
    build: {
      auth: {
        host: 'server.com',
        port: 21,
        authKey: 'key1'
      },
      src: 'path/to/source/folder',
      dest: '/path/to/destination/folder',
      exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
    }
  });
};

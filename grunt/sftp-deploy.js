module.exports = function(grunt) {
  "use strict";
  grunt.config('sftp-deploy', {
    build: {
      auth: {
        host: 'server.com',
        port: 22,
        authKey: 'key1'
      },
      cache: 'sftpCache.json',
      src: '/path/to/source/folder',
      dest: '/path/to/destination/folder',
      exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp'],
      serverSep: '/',
      concurrency: 4,
      progress: true
    }
  });
};

module.exports = function(grunt) {
  "use strict";
  grunt.config('connect', {
    server: {
      options: {
        port: 9999,
        hostname: '0.0.0.0',
        base: '<%= pkg.dir.pub %>/',
        open: {
          server: {
            path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
          }
        }
      }
    }    
  });
};

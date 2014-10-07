module.exports = function(grunt) {
  "use strict";
  grunt.config('image', {
    // static: {
    //   options: {
    //     pngquant: true,
    //     optipng: true,
    //     advpng: true,
    //     zopflipng: true,
    //     pngcrush: true,
    //     pngout: true,
    //     mozjpeg: true,
    //     jpegRecompress: true,
    //     jpegoptim: true,
    //     gifsicle: true,
    //     svgo: true
    //   },
    //   files: { 
    //     'dist/img.png': 'src/img.png',
    //     'dist/img.jpg': 'src/img.jpg',
    //     'dist/img.gif': 'src/img.gif',
    //     'dist/img.svg': 'src/img.svg'
    //   }
    // },
    dynamic: {
      files: [{
        expand: true,
        cwd: '<%= pkg.dir.src %>/images', 
        src: ['*.{png,jpg,gif,svg}'],
        dest: '<%= pkg.dir.dist %>/images'
      }]
    }
  });  
};

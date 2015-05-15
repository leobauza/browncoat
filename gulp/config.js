var src = './src',
    dest = './web/assets',
    base = '.';

module.exports = {
  main: {
    src: src,
    dest: dest,
    base: base
  },
  browserify: {
    bundleConfigs: [{
      entry: src + '/js/app.js',
      outputName: 'main.js',
      dest: dest + '/js'
    }
    // {
    //   entry: './sites/all/themes/jf/src/js/other.js',
    //   outputName: 'randomnameipicked.js',
    //   dest: './sites/all/themes/jf/assets/js'
    // }
    ]
  },
  sass: {
    entry: src + '/scss/styles.scss',
    dest: dest + '/css',
    style: 'compressed' // 'expanded'
  },
  sprite: {
    entry: src + '/icons/*.svg',
    dest: base,
    name: 'sprite.svg', // file name
    sprite: './web/assets/img/', // dest rel to theme
    scss:'./src/scss/00_bits/_sprite.scss', // dest rel to theme
    img: base + '/web/assets/img' //img location for svg2png
  }
};
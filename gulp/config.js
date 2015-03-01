var src = './src',
    dest = './web/assets',
    theme = '.';

module.exports = {
  main: {
    src: src,
    dest: dest,
    theme: theme
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
    dest: theme,
    name: 'sprite.svg', // file name
    sprite: './assets/img/', // dest rel to theme
    scss:'./src/scss/core/_sprite.scss', // dest rel to theme
    img: theme + '/assets/img' //img location for svg2png
  }
};
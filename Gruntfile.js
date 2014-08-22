module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed' //compressed or compact or expanded
        },
        files: {
          'assets/css/styles.css' : 'assets/scss/styles.scss'
        }
      }
    },

    // concat: {
    //   options: {
    //     separator: '\n',
    //   },
    //   dist: {
    //     src: [
    //       'client/assets/js/**/*.js'
    //     ],
    //     dest: 'public/assets/js/concat.js'
    //   }
    // },
    //
    // uglify: {
    //   script: {
    //     files: {
    //       'public/assets/js/script.min.js' : 'public/assets/js/concat.js'
    //     }
    //   }
    // },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
      // ,js: {
      //   files: ['client/assets/js/**/*.js'],
      //   tasks: ['concat', 'uglify'],
      //   options: {
      //     spawn: false
      //   }
      // }
    },

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Default task(s).
  grunt.registerTask('default', ['watch']);

};

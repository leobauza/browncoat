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
          'web/assets/css/styles.css' : 'src/scss/styles.scss'
        }
      }
    },

    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: [
          'src/js/flyweightclass.js',
          'src/js/script.js'
        ],
        dest: 'web/assets/js/concat.js'
      }
    },

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
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      }
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

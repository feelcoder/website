module.exports = function(grunt) {
   

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },   
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    
            test: {
                src: 'test/karma.conf.js',
                exclude: [/angular-i18n/, /angular-scenario/],
                ignorePath: /\.\.\/\.\.\//, // remove ../../ from paths of injected javascripts
                devDependencies: true,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
        },
   
      nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['src/main/app/*.html']
      }
    },
  },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-angular-gettext');  

  grunt.registerTask('default', ['nggettext_extract']);


grunt.registerTask('test', [
        'test',
        //'karma'
    ]); 
    
    };  

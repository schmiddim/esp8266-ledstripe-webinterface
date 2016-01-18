module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
        watch: {
            css: {
                files: [
                    'assets/*.css'
                    ,'scripts/*.js'

                ],
                tasks: ['cssmin', 'uglify']
            },
            js: {
                files: [
                    'bower_components/**/*'
                ],
                tasks: ['uglify']
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/fontawesome/fonts',
                        src: ['**'],
                        dest: 'html/assets/fonts'
                    }
                ]
            }
        },
        cssmin: {
            theme: {
                files: {
                    'html/assets/css/main.css': [
                        'html/assets/main.css',
                        'bower_components/fontawesome/css/font-awesome.css',
                        'bower_components/bootstrap/dist/css/bootstrap.css'

                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                },
                compress: {
                    drop_console: false
                },
                sourceMap: true
            },
            jslibraries: {
                files: {
                    'html/assets/scripts/theme.min.js': [
                        'bower_components/jquery/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'scripts/main.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('build', ['cssmin', 'uglify','copy:dist']);

}

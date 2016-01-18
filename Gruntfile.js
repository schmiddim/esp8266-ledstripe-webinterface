module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
        watch: {
            css: {
                files: [
                    'assets/*.css'
                    ,'app/js/**.js'

                ],
                tasks: ['cssmin']
            },
            ng:{
                files: [
                    'assets/*.css'
                    ,'app/js/**.js'

                ],
                tasks: ['ngmin']

            },
            js: {
                files: [
                    'bower_components/**/*'
                ],
                tasks: ['uglify']
            }
        },
        //@todo minify angular
        ngmin: {
            controllers: {
                src: ['app/js/controllers.js'],
                dest: 'js/controllers.js'

            },
            directives: {
                expand: true,
                cwd: 'test/src',
                src: ['directives/**/*.js'],
                dest: 'test/generated'
            },
            services: {
                src: ['app/js/services/*.js'],
                dest: 'js/services.js'
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
                        dest: 'fonts'
                    }
                ]
            }
        },
        cssmin: {
            theme: {
                files: {
                    'css/main.css': [
                        'assets/main.css',
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
                    drop_console: true
                },
                sourceMap: true
            },
            jslibraries: {
                files: {
                    'js/theme.min.js': [
                        'bower_components/jquery/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js'
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
    grunt.registerTask('build', ['cssmin','ngmin', 'uglify','copy:dist']);

}

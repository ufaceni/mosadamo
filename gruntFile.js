// Grunt module
module.exports = function (grunt) {

    grunt.initConfig({
        // Read package file
        application: grunt.file.readJSON('package.json'),

        // Create settings
        settings: {
            dirs: {
                src: 'src',
                jsCssDist: 'static',
                indexDist: 'templates',
                npm: 'node_modules'
            }
        },

        // Clean task
        clean: {
            dist: [
                '<%= settings.dirs.jsCssDist %>/css/**/*',
                '<%= settings.dirs.jsCssDist %>/images/common/**/*',
                '<%= settings.dirs.indexDist %>/**/*'
            ]
        },

        // Copy task
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= settings.dirs.src %>/',
                        src: [
                            'js/**/*',
                            'css/**/*'
                        ],

                        dest: '<%= settings.dirs.jsCssDist %>/'
                    },

                    {
                        expand: true,
                        cwd: '<%= settings.dirs.src %>/templates/',
                        src: [
                            '**/*'
                        ],

                        dest: '<%= settings.dirs.indexDist %>'
                    },

                    {
                        expand: true,
                        cwd: '<%= settings.dirs.src %>/sass/assets/images/',
                        src: [
                            '**/*'
                        ],

                        dest: '<%= settings.dirs.jsCssDist %>/images/common'
                    }  
                ]
            }
        },

        // Concat task
        concat: {
            // Application
            app: {
                src: [
                    // main
                    '<%= settings.dirs.src %>/app/utilities.js',
                    '<%= settings.dirs.src %>/app/main.js',
                    '<%= settings.dirs.src %>/app/app.js',
                ],

                dest: '<%= settings.dirs.src %>/js/app.js'
            }
        },

        // GIT info task
        gitinfo: {
            options: {
                cwd: '.'
            }
        },

        // Uglify task
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.dirs.jsCssDist %>/js',
                    src: '**/*.js',
                    dest: '<%= settings.dirs.jsCssDist %>/js'
                }]
            }
        },

        // Sass task
        sass: {

            // Distibution
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    unixNewlines: true,
                    noCache: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= settings.dirs.src %>/sass/themes/',
                    src: ['**/*.scss', '!**/_*.scss'],
                    dest: 'static/css/',
                    ext: '.css'
                }]
            }
        },

        // Autoprefixer Task
        autoprefixer: {
            options: {
                browsers: ['> 1%']
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: 'static/css/',
                    src: ['**/*.css'],
                    dest: 'static/css/',
                    ext: '.css'
                }]
            }
        },

        // Watch task
        watch: {
            options: {
                atBegin: true
            },

            sass: {
                files: '<%= settings.dirs.src %>/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },

            concat: {
                files: '<%= concat.app.src %>',
                tasks: ['concat:app']
            },

            templates: {
                files: '<%= settings.dirs.src %>/templates/**/*.html',
                tasks: ['copy']
            }
        }
    });

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-combine-media-queries');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-gitinfo');

    // Develop task
    grunt.registerTask('default', [
        'concat',
        'sass',
        'copy',
        'watch'
    ]);
};


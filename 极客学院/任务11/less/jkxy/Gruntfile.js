module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            // 开发环境
            development: {
                files: {
                    "css/index.css": "less/index.less" // 将path/to/source.less编译为path/to/result.css
                }
            },
            // 线上环境
            production: {
                files: {
                    "css/index.css": "less/index.less"
                }
            }
        },
        cssmin: {
             target: {
                compress:true,
                files: {
                    'buildcss/all.min.css': ['css/*.css','css/*.min.css']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: [{
                    src: 'js/index.js',
                    dest: 'js/index.min.js'
                }, {
                    src: 'js/myCarousel.js',
                    dest: 'js/myCarousel.min.js'
                }]
            }
        },
        concat: {
            options: {
                // 定义一个用于插入合并输出文件之间的字符
                separator: ';'
            },
            dist: {
                // 将要被合并的文件
                src: ['js/*.min.js'],
                // 合并后的JS文件的存放位置
                dest: 'buildjs/all.min.js'
            }
        },
        watch: {
            client: { //用于监听less文件,当改变时自动编译成css文件
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
            // clientcss: {    //用于监听css文件,当改变时自动压缩css文件
            //     files: ['css/*.css'],
            //     tasks: ['cssmin'],
            //     options: {
            //         livereload: true
            //     }
            // },
            // build: {
            //     files: ['js/*.js', 'css/*.css'],
            //     tasks: ['jshint', 'uglify'],
            //     options: {
            //         spawn: false
            //     }
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    // 开发环境
    grunt.registerTask('lessDev', ['less:development']);
    // 线上环境
    grunt.registerTask('lessPro', ['less:production']);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 默认被执行的任务列表。
    grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'concat','watch']);

};

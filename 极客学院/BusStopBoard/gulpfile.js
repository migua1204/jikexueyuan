var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');
var rename = require('gulp-rename');
//https://www.npmjs.com/package/gulp-sequence
//有个问题 比如如下两个task 删掉layout文件夹 执行以下代码，发现只有sass执行了
// gulp.task('sass', function() {
//     gulp.src('sass/*.scss')
//         .pipe(sass()
//             .on('error', sass.logError))
//         .pipe(gulp.dest('css/layout/'));
// })
// gulp.task('rename', function() {
//     gulp.src('css/layout/layout.css')
//         .pipe(rename(function(path) {
//             path.basename = 'layout';
//             path.extname = ".min.css";
//         }))
//         .pipe(gulp.dest('css/layout/'));
// })
// gulp.task('default',['sass','rename']);
gulp.task('default', function() {
    gulp.src('sass/*.scss')
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(minifycss())
         .pipe(rename(function(path) {
            path.basename = 'layout';
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('css/layout/'));
})



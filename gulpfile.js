const gulp = require('gulp');
const clean = require('gulp-clean');
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const stylus = require('gulp-stylus');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const pump = require('pump');

gulp.task('build', ['pre-build'], () => {
    gulp.start(['js', 'css']);
});

gulp.task('pre-build', ['clean', 'lint:fix']);

gulp.task('clean', (cb) => {
    const tasks = [
        gulp.src(['dist/'], { read: false }),
        clean()
    ];

    pump(tasks, cb);
});

gulp.task('lint:fix', (cb) => {
    const tasks = [
        gulp.src('src/**/*.js'),
        eslint({ fix: true }),
        eslint.format(),
        eslint.failAfterError(),
        gulp.dest('src')
    ];

    pump(tasks, cb);
});

gulp.task('js', (cb) => {
    const tasks = [
      gulp.src(['src/**/*.js']),
      babel(),
      uglify(),
      gulp.dest('dist')
    ];
  
    pump(tasks, cb);
});

gulp.task('css', (cb) => {
    const tasks = [
        gulp.src(['src/**/*.styl']),
        gulp.dest('dist')
    ];

    pump(tasks, cb);
});
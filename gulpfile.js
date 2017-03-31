'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      dir = {
        src : 'src',
        as : 'assets',
        dest: 'public'
      };

gulp.task('styles', ()=>{
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest(`${dir.dest}`));
});

'use strict';
const gulp = require('gulp'),
      dir = {
        src: 'src',
        dist: 'public'
      };

gulp.task('assets', ()=>{
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

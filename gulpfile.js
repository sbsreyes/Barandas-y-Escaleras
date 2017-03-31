'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      babel = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      dir = {
        src : 'src',
        as : 'assets',
        dest: 'public'
      },
      opts = {
        imagemin :{
          progessive : true,
          use : [pngquant()]
        }
      };

gulp.task('styles', ()=>{
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest(`${dir.dest}`));
});

gulp.task('assets', ()=>{
  gulp
    .src(`${dir.as}/*`)
    .pipe(gulp.dest(`${dir.dest}`))
})

gulp.task('scripts', ()=>{
  browserify(`${dir.src}/index.js`)
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(`${dir.dest}`))
    });

gulp.task('img', ()=>{
  gulp
    .src(`${dir.as}/images/*.+(png|jpg)`)
    .pipe(imagemin(opts.imagemin))
    .pipe(gulp.dest(`${dir.dest}/images`));
});


gulp.task('default', ['styles', 'assets', 'scripts']);

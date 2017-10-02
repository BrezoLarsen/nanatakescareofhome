'use strict';

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      open = require('gulp-open'),
      sass = require('gulp-sass'),
      options = {
          port: 9008,
          root: ['src'],
          devBase: 'http://localhost:',
          browser: 'chrome',
          sassFolder: 'src/sass/**/*.scss',
          cssCompile: 'src/compile_css',
      };

gulp.task('connect', 
    () => connect.server({
        root: options.root,
        port: options.port 
    }));

gulp.task('open', () => {
    const openOptions = {
        uri: options.devBase + options.port,
        app: options.browser,
    };
    console.log(__filename);
    console.log(__dirname);
    gulp.src(__filename);
});

gulp.task('sass', () => (
    gulp.src(options.sassFolder)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(options.cssCompile))
  )
);

gulp.task('copy', () => {
  gulp.src('file path from current file aka gulpfile.js')
    .pipe(gulp.dest('folder to place the copied file'));
});

//vigila lo que ponemos en main.scss y se auto-compila
gulp.task('watch', () => {
    gulp.watch(options.sassFolder, ['sass']);
});

gulp.task('default', ['connect', 'open', 'watch']);
'use strict';

const gulp       = require('gulp'),
      browserify = require('browserify'),
      babelify   = require('babelify'),
      source     = require('vinyl-source-stream'),
      sourceMaps = require('gulp-sourcemaps'),
      rename     = require('gulp-rename'),
      buffer     = require('vinyl-buffer'),
      sass       = require('gulp-sass'),
      mustache   = require('gulp-mustache'),
      fs         = require('fs');

gulp.task('build:js', function () {
    return browserify('./src/datamanager.app.js')
        .transform(babelify, { presets : [ 'es2015' ] })
        .bundle()
        .pipe(source('./src/datamanager.app.js'))
        .pipe(buffer())
        .pipe(rename('datamanager.js'))
        .pipe(sourceMaps.init({ loadMaps : true }))
        .pipe(sourceMaps.write('./maps/'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('build:css', function () {
    gulp.src('./node_modules/materialize-css/dist/fonts/**/*').pipe(gulp.dest('./dist/fonts/'));

    return gulp.src([
            './node_modules/materialize-css/sass/materialize.scss',
            './src/**/*.scss'
        ], { dot: true })
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('build:html', function () {
    let templates = ['./src/locations/locations.template.html'].map(t => fs.readFileSync(t, 'utf8'));
    return gulp.src('./src/datamanager.template.html')
        .pipe(mustache({ templates: templates }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['build:js', 'build:css', 'build:html']);
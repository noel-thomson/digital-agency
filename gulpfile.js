const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const { series, parallel, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

function js() {
  return src('./src/js/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js'));
}

function style() {
  return src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream());
}

function build() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  watch('./src/scss/**/*.scss', style);
  watch('./src/js/**/*.js', js);
  watch('./**/*html').on('change', browserSync.reload);
  watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.watch = build;
exports.js = js;
exports.style = style;

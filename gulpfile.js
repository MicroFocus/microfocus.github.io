const gulp = require('gulp');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');

const { name, version } = require('./package.json');

gulp.task('package', () =>
  gulp
    .src(`dist/${name}/**/*`)
    .pipe(tar(`${name}-${version}.tar`))
    .pipe(gzip())
    .pipe(gulp.dest('target/docs'))
);

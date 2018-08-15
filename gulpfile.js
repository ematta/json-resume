var gulp = require('gulp');
var resume = require('gulp-resume');
var rename = require('gulp-rename');

gulp.task('enrique', function() {
  return gulp.src('enrique_resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('enrique_resume.html'))
    .pipe(gulp.dest('.'));
});

gulp.task('nicole', function() {
  return gulp.src('nicole_resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('nicole_resume.html'))
    .pipe(gulp.dest('.'));
});
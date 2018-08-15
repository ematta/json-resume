var gulp = require('gulp');
var resume = require('gulp-resume');
var rename = require('gulp-rename');

gulp.task('resume', function() {
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('resume.html'))
    .pipe(gulp.dest('.'));
});
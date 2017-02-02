const gulp = require('gulp');
const shell = require('gulp-shell');
const watch = require('gulp-watch');

gulp.task('exec-tests', shell.task([
  'tape ./problems/**/*.test.js | faucet || true',
]));

gulp.task('autotest', ['exec-tests'], () => {
  watch('./problems/**/*.js', () => gulp.start('exec-tests'));
});

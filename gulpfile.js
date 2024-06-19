const gulp = require('gulp');  
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

async function comprimeImagens() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./source/images/*', {encoding: false}) 
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}


exports.default = gulp.series(compilaSass, comprimeJavaScript, comprimeImagens);

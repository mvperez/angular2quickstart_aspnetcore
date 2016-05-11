var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/libs/';

// Delete the libs directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

//Moves Angular 2
gulp.task("angular", () => {
    gulp.src([
            'es6-shim/**',
            'systemjs/dist/**',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'angular2-in-memory-web-api/**',
            'bootstrap/**',
            'jquery/**',
            'es6-promise/**'
    ],
    {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));
});

gulp.task('default', ['angular']);
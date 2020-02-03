const gulp = require("gulp");
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task("build_js", () => {
    return browserify('./src/main.js').bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest("./"))
    });

gulp.task("watch", () => {
      gulp.watch("./src/main.js", gulp.parallel("build_js"));  
});

// gulp.task("build", gulp.parallel("task1","task2","task3","task4")); // Можно паралельно вызвать нескалько тасков

gulp.task("default", gulp.parallel("watch")); // команда по умолчанию при вызове просто команды gulp (без названия)
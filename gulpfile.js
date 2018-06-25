const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
/*------------------------拷贝index-------------------------------------------*/
gulp.task("copy-index",function(){
	gulp.src('index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})
/*------------------------拷贝html-------------------------------------------*/
gulp.task("copy-html",function(){
	gulp.src('html/**')
	.pipe(gulp.dest('dist/html'))
	.pipe(connect.reload());
})
/*------------------------拷贝压缩img-------------------------------------------*/
gulp.task("images",function(){
	gulp.src('img/**')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
	.pipe(connect.reload());
})
/*------------------------拷贝scss-------------------------------------------*/
gulp.task("sass",function(){
	gulp.src('scss/**')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})
/*------------------------拷贝icofont-------------------------------------------*/
gulp.task("copy-icofont",function(){
	gulp.src('icofont/**')
	.pipe(gulp.dest('dist/icofont'))
	.pipe(connect.reload());
})
/*------------------------拷贝合并压缩js&es6.js=>>es5.js---------------------------*/
gulp.task("babel",function(){
	gulp.src('js/es6.js')
	.pipe(babel({"presets":["es2015"]}))
	.pipe(rename("commin.js"))
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})

gulp.task("scripts",function(){
	gulp.src('js/jquery-1.11.0.js')
	//.pipe(concat('verdor.js'))
	//.pipe(gulp.dest('dist/js'))
	.pipe(uglify())
	.pipe(rename('jQuery.min.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})
/*------------------------监听-------------------------------------------*/
gulp.task('watch',function(){
	gulp.watch('index.html',['copy-index']);
	gulp.watch('html/**',['copy-html']);
	gulp.watch('img/**',['images']);
	gulp.watch('scss/**',['sass']);
	gulp.watch('icofont/**',['copy-icofont']);
	gulp.watch('js/es6.js',['babel']);
	gulp.watch('js/**',['scripts'])
	gulp.watch('data/**',['copy-data']);
})
/*------------------------Es6a转Es5-------------------------------------------*/

/*------------------------搭建服务器实时刷新----------------------------------------*/
gulp.task('server',function(){
	connect.server({
		root:'dist',
		livereload:true
	});
})
/*------------------------gulp-soursemap----------------------------------------*/
gulp.task('soursemap',function(){
	
})

gulp.task('default',['server','watch']);

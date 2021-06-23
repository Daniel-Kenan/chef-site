const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const {src , dest,watch} = require('gulp');


function modify_css(){
  const plugins = [autoprefixer(),cssnano()] ;
  
  return src('./stylesheets/*.css').pipe(postcss(plugins)).pipe(dest('./public/stylesheets'))
  }

  function watchFile (){
     watch('./stylesheets/*.css',modify_css)
  }

 exports.default = watchFile
  

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const {src , dest} = require('gulp');


function modify_css(){
  const plugins = [autoprefixer(),cssnano()] ;
  
  return src('./stylesheets/*.css').pipe(postcss(plugins)).pipe(dest('./public/stylesheets'))
  }


 exports.default = modify_css

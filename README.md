### Description

I did upload this template because I've gotten tired of all that tedious routine and its nice to have a template ready to start. So basically this is for html coders and it hasnt fancy JS plugins and all that stuff yet. 

There are .keepgit files in some folders -- I wanted to keep the structure I'm comfortable with and gulp.tasks use these folders as srcs or dests so it makes more sense when looking at.

In conclusion you might just ignore commentary lines

### Tools

* Bootstrap-sass
* Sass   
* Handlebars

### Features

All the basics:
 
# IMGs:

* Optimization

# HTML:
	
* Minification

# CSS:
	
* SCSS compilation
* Autoprefixing
* Src map
* Mergin multiply files into one

# JS:
	
* Compressing
* Merging

# Other:

* Livereload

Also there is sort of the catcher in the field of errors -- gulp.plumber;

+++ json task's coming up 

NOTE: image optimizer work just once as you start gulp
I didnt get him to look for new files in directory
yet 

## Additional: Bootstrap & Gulp note

There is also a watch to `./node_modules/bootstrap-sass/assets/stylesheets` folder so every change applied there will be reflected in `./public/javasctipt/bootstrap.min.css`


### How to get this working

1. check if node.js is installed
2. conduct an installation if necessary
3. clone this repo && get there 
4. run in your console ```npm install``` 
   it'll download the hell of the node modules
5. run your local or web-server ( personally I use the simplest solution -- http-server plugin you may install it by typing ```npm i -g http-server```
6. run ```gulp```

Thats all though you may want to change gulp tasks as you like them
Im not entirely sure if this's gonna help somebody since I thought we do all prefer to personalize and stuff.
But if you somehow reading this and find the basic kit helping I'd be glad. 






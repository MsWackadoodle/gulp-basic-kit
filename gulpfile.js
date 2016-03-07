// allow getting tasks from other directories
var requireDir = require('require-dir');

//do so
//recurse: Whether to recursively require() subdirectories too. 
//(node_modules within subdirectories will be ignored.)
// Default is false.
requireDir('./gulp/tasks', { recurse: true });

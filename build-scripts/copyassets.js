const copyfiles = require('copyfiles');

copyfiles(['./src/styles/**/*.scss', './'], { up: 1 }, error => {
  if (error) {
    throw error;
  }
});

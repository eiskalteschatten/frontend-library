const copyfiles = require('copyfiles');

copyfiles(['./src/styles/**/*.*', '.'], { up: 1 }, error => {
  if (error) {
    throw error;
  }
});

copyfiles(['./src/static/**/*.*', '.'], { up: 1 }, error => {
  if (error) {
    throw error;
  }
});

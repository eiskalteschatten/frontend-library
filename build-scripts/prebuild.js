const fs = require('fs');

fs.rmSync('./dist', { recursive: true, force: true });
fs.rmSync('./static', { recursive: true, force: true });
fs.rmSync('./styles', { recursive: true, force: true });

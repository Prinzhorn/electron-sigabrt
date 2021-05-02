const path = require('path');
const { Worker } = require('worker_threads');
const { app } = require('electron');

let worker = new Worker(path.join(__dirname, 'server.js'));

setTimeout(() => {
  app.quit();
}, 2000);

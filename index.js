const path = require('path');
const { Worker } = require('worker_threads');

const worker = new Worker(path.join(__dirname, 'server.js'));

setTimeout(() => {
  worker.terminate();
}, 2000);

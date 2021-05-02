const path = require('path');
const { Worker } = require('worker_threads');
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {},
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

let worker = new Worker(path.join(__dirname, 'server.js'));

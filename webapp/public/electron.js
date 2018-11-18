const electron = require('electron');
  // Module to control application life.
const app = electron.app;
  // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

app.on('ready', function(){
    var mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL("http://localhost:3000/");  // option1: (loading a local app running on a local server)

    //mainWindow.loadURL("https://iaya-664f3.firebaseapp.com");  // option2: (loading external hosted app)

    // loading developer tool for debugging
    mainWindow.webContents.openDevTools();
});
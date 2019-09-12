const { app, BrowserWindow, ipcMain } = require('electron');
const index = '/app/index.html'
const about = '/app/about.html'

let mainWindow = null;
app.on('ready', () =>{
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(`file://${index}`)
})

app.on('window-all-closed', () =>{
    app.quit();
})

ipcMain.on('abrir-janela-about', () => {
    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 200
    })

    aboutWindow.loadURL(`file://${about}`)
})
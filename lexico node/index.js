const { app, BrowserWindow, ipcMain } = require('electron');
const fileModel = require('./models/File');
const index = '/app/index.html'
const about = '/app/about.html'

let file = new fileModel.File()
let tokens = new Array();
let program = ""

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

let aboutWindow = null;
ipcMain.on('abrir-janela-about', () => {
    if(aboutWindow == null){
        aboutWindow = new BrowserWindow({
            width: 300,
            height: 200,
            alwaysOnTop: true,
            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        })
        aboutWindow.on('closed', () => {
            aboutWindow = null
        })
    }
    aboutWindow.loadURL(`file://${about}`)
})

ipcMain.on('fechar-janela-sobre', () => {
    aboutWindow.close()
});

ipcMain.on('salvar-arquivo', async (event,data) =>{
    file.content = data;
    file.read(data);
})

ipcMain.on('salvar-file', async (event,data) =>{
    try{
        file.save(data);
        console.log("Salvo com sucesso");
    } catch(error){
        console.error(error);
    }
})

ipcMain.on('exec', () => {
    if(content != null){
        
    }
})
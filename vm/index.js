const { app, BrowserWindow, ipcMain } = require('electron');
const fileModel = require('./models/File');
const AssemblyReader = require('./models/AssemblyReader');
const index = '/app/index.html'
const about = '/app/about.html'

let file = new fileModel.File()
let reader = new AssemblyReader.AssemblyReader();
let breakpoint; // vetor / sempre pegar a primeira posição.

let mainWindow = null;
app.on('ready', () =>{
    let mainWindow = new BrowserWindow({
        width: 805,
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

ipcMain.on('abrir-arquivo', async (event,data) =>{
    try{
        await file.open(data, 'utf-8');
        this.program = null;
        this.program = await file.read(data);
        this.program = this.program.split('\r\n');
    }
    catch(error){
        console.error("Erro na index.js na função 'abrir-arquivo':")
        console.error(error)
    }
})

ipcMain.on('salvar-file', async (event,data) =>{
    try{
        file.save(data);
        console.log("Salvo com sucesso");
    } catch(error){
        console.error("Erro na index.js na função 'salvar-file':")
        console.error(error);
    }
})

ipcMain.on('exec', async () => {
    try{
        if(await this.program){
            this.program.reverse();
            console.log(this.program)
            while(this.program.length > 0 && this.program.length != breakpoint){
                 reader.verify(this.program.pop())
                 reader.atualizar();
            }
        }
    }catch(error){
        console.error(error);
    }
})
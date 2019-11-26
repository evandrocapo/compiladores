const { app, BrowserWindow, ipcMain } = require('electron');
const fileModel = require('./models/File');
const AssemblyReader = require('./models/AssemblyReader');
const index = '/app/index.html'
const about = '/app/about.html'

let file = new fileModel.File()
let reader = new AssemblyReader.AssemblyReader();
let breakpoint = []; // vetor / sempre pegar a primeira posição.
let posI = 0;
let hlt = 0;

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

ipcMain.on('rd', (event, arg) => {
    console.log("RD VALUE: " + arg)
    if(hlt == 2){
        reader.m[reader.s] = arg
        hlt = 0;
        reader.i = reader.i + 1;
        posI = reader.i;
    }
})

ipcMain.on('break-add', (event, arg) => {
    breakpoint.push(args);
    console.log("add bk: " + breakpoint);
})

ipcMain.on('break-reset', (event, arg) => {
    breakpoint = [];
    console.log("reset bk: " + breakpoint);
})

ipcMain.on('abrir-arquivo', async (event,data) =>{
    // resetar as variaveis
    reader = new AssemblyReader.AssemblyReader();
    breakpoint = []; // vetor / sempre pegar a primeira posição.
    posI = 0;
    hlt = 0;

    try{
        await file.open(data, 'utf-8');
        this.program = null;
        this.program = await file.read(data);
        this.program = this.program.split('\r\n');
        reader.createListLabel(this.program); // criar lista de Labels
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
            console.log(this.program)
            while(this.program.length > posI && this.program.length != breakpoint[0] && hlt != 2){
                hlt = reader.verify(this.program[posI]) // verificar ações

                if(hlt == 0){
                    reader.atualizar(); // console.log
                }

                posI = reader.i; // pega o valor do I lido
            }

            // hlt === 2 então preciso enviar um numero no frontend
            // frontend envia o valor pra memoria M
            // definir hlt === 0

            // if(this.program[posI]){ // arrumando pro breakpoint
            //     this.program.reverse(); // reverte o program
            //     this.program.splice(0,posI+1); // elimina as linhas lidas
            // }
        }
    }catch(error){
        console.error(error);
    }
})
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
let breakpointStopped = 0;

let mainWindow = null;
app.on('ready', () =>{
    mainWindow = new BrowserWindow({
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

ipcMain.on('rd', (event, arg) => {
    console.log("RD VALUE: " + arg);
    if(hlt == 2){
        reader.m[reader.s] = arg
        reader.entrada.push(arg)
        hlt = 0;
        reader.i = reader.i + 1;
        posI = reader.i;
        console.log("Valor inserido com sucesso. Para continuar, clique em executar novamente.");
    }
    else{
        console.log("Não está na hora de inserir um valor");
    }
})

function compararNumeros(a,b){
    return a - b;
}

ipcMain.on('break-add', (event, arg) => {
    breakpoint.push(arg);
    breakpoint = breakpoint.sort(compararNumeros)
    console.log("add bk: " + arg);
    console.log("lista break: " + breakpoint);
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
    breakpointStopped = 0;

    try{
        await file.open(data, 'utf-8');
        this.program = null;
        this.program = await file.read(data);
        this.program = this.program.split('\r\n');
        reader.createListLabel(this.program); // criar lista de Labels
        console.log(this.program)
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
        if(hlt == 1) console.log("O programa terminou !");
        if(hlt == 2) console.log("Esperando um valor para RD");

        if(await this.program){
            while(this.program.length > posI && breakpointStop() && hlt != 2){ //reader.i != breakpoint[0]
                hlt = reader.verify(this.program[posI]) // verificar ações

                if(hlt == 0){
                    reader.atualizar(); // console.log
                }

                posI = reader.i; // pega o valor do I lido
            }
        }

        let content = {
            program: this.program,
            pilha: reader.m,
            entrada: reader.entrada,
            saida: reader.saida,
            breakpoint: breakpoint
        }

        await mainWindow.webContents.send('att-tables', await content); //enviar o reader para main

    }catch(error){
        console.error(error);
    }
})

function breakpointStop(){
    let i;
    
    for(i=0;i < breakpoint.length; i++) {
        if(reader.i == breakpoint[i] && breakpointStopped == 0){
            breakpointStopped = 1;
            return false;  
        } 
    }

    breakpointStopped = 0;
    return true;
}
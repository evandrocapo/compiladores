const { ipcRenderer } = require('electron');

let linkFechar = document.getElementById("link-close");

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre');
})
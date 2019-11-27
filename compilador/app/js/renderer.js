const { ipcRenderer } = require('electron');

let linkAbout = document.getElementById('link-about');

linkAbout.addEventListener('click', function() {
    ipcRenderer.send('abrir-janela-about')
});
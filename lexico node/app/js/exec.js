let linkExec = document.getElementById('link-exec');

linkExec.addEventListener('click', function() {
    ipcRenderer.send('exec');
});
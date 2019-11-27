let linkExec = document.getElementById('link-exec');

linkExec.addEventListener('click', function() {
    console.log("exec")
    ipcRenderer.send('exec');
});
let linkRd = document.getElementById('link-rd');

linkRd.addEventListener('click', async function() {
    let rdvalue = document.getElementById('input-rd').value;
    ipcRenderer.send('rd', rdvalue);
});
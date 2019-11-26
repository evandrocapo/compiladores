let linkRd = document.getElementById('link-rd');

linkRd.addEventListener('click', async function() {
    let rdvalue = document.getElementById('input-rd').value;
    console.log(rdvalue)
    ipcRenderer.send('rd', rdvalue);
});
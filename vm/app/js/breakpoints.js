let linkAdd = document.getElementById('add-break');
let linkReset = document.getElementById('reset-break');

linkAdd.addEventListener('click', async function() {
    let bkvalue = document.getElementById('input-break').value;
    ipcRenderer.send('break-add', bkvalue);
});

linkReset.addEventListener('click', async function() {
    ipcRenderer.send('break-reset');
});
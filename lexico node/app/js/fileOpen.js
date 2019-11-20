const electron = require('electron');
const { dialog } = require('electron').remote;
const fileModel = require('../models/File');

// Open Dialog function
var btn = document.getElementById('link-open');
btn.onclick = function () {
    console.log("aaaa")
    dialog.showOpenDialog({
        title: 'Select File',
        properties: ['openFile'],
        filters: [{name: 'Files', extensions: ['txt', 'css', 'html', 'js', 'vue', 'json', 'py', 'c']}]
        },

        async function (fileNames) {

            // check if invalid filename
            if (fileNames === undefined) {
                return;
            };

            // Read file contents otherwise
            var fileName = fileNames[0];

            // Render file name at top
            var label = document.getElementById('label');

            // trim fileName
            fn = fileName.split('/')[fileName.split('/').length - 1]

            // fn for trimmed version. E.g /root/Desktop/file.txt => file.txt
            // Or use fileName version. E.g /root/Desktop/file.txt
            label.innerText = fileName;

            // Define style
            label.style.float = "right";
            label.style.fontSize = 14;
            label.style.color = "white";
            label.style.paddingTop = "26px";
            label.style.paddingRight = "26px";
            label.style.padding = "8px";
            label.style.borderRadius = "4px";
            label.style.display = "inline-block";
            label.style.marginLeft = "0.5rem";
            label.style.verticalAlign = "middle";
            label.style.backgroundColor = "green";
            label.style.borderColor = "green";
            label.style.cursor = "default";

            electron.ipcRenderer.send('abrir-arquivo', fileName);
        })
};

// Render file part
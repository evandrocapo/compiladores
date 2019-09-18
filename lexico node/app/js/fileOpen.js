const electron = require('electron');
const { dialog } = require('electron').remote;
const fs         = require('fs');

// Open Dialog function
var btn = document.getElementById('link-open');
btn.onclick = function () {
    dialog.showOpenDialog({
        title: 'Select File',
        properties: ['openFile'],
        filters: [{name: 'Files', extensions: ['txt', 'css', 'html', 'js', 'vue', 'json', 'py', 'c']}]
        },

        function (fileNames) {

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


            fs.readFile(fileName, 'utf-8', function (err, data) {
                
                electron.ipcRenderer.send('salvar-arquivo', data);
                // document.getElementById('file-content').innerText = data;

                // // style for file content
                // document.getElementById('file-content').style.color = "#f5f5f5";
            });
        })
};

// Render file part
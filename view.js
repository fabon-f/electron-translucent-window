(function() {
    var remote = require("electron").remote;
    var mainWindow = remote.getCurrentWindow();
    document.getElementById("close").addEventListener("click", function(e) {
        e.preventDefault();
        mainWindow.close();
    });
    document.getElementById("minimize").addEventListener("click", function(e) {
        e.preventDefault();
        mainWindow.minimize();
    });
    document.getElementById("fullscreen").addEventListener("click", function(e) {
        e.preventDefault();
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });
}) ()

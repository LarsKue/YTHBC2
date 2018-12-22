// this page is called every time youtube is loaded

let buttonURL : string = chrome.extension.getURL("assets/button.png");

function execute() : boolean {

    // select all items from the document that have the title "YouTube Home" and give them the
    // proper link and a regular YouTube Home image
    document.querySelectorAll("a[title='YouTube Home'").forEach(function(linkItem : any) {
        linkItem.href = "/";
        linkItem.innerHTML = `<img src = ${buttonURL}>`;
    });
    return true;
}

// only execute when the window has fully loaded and the extension is enabled
window.onload = function() : void {
    chrome.runtime.sendMessage({msg: "getEnabled"}, function (response) {
        if (response.enabled) {
            execute();
        }
        return true;
    });
};



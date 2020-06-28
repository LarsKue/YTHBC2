// this page is called every time youtube is loaded

let buttonURL : string = chrome.extension.getURL("assets/button.png");

function execute(replaceIcon : boolean) : boolean {

    // select all items from the document that have the title "YouTube Home" and give them the
    // proper link and a regular YouTube Home image
    // document.querySelectorAll("a[title='YouTube Home'").forEach(function(linkItem : any) {
    document.querySelectorAll("a[class='yt-simple-endpoint style-scope ytd-topbar-logo-renderer']").forEach(function(linkItem : any) {

        // if, during an event, the button still links to the event, change this href to
        // https://www.youtube.com/
        // this will link you to the homepage, albeit without that sweet youtube "cache integration" so to speak
        linkItem.href = "/";
        if (replaceIcon) {
            linkItem.innerHTML = `<img src = ${buttonURL} alt = "Button URL">`;
        }
    });
    return true;
}

// only execute when the window has fully loaded and the extension is enabled
window.onload = function() : void {
    chrome.runtime.sendMessage({msg: "get"}, function (response) : boolean {
        if (response.enabled) {
            execute(response.replaceIcon);
            return true;
        }
        return false;
    });
};




function onInstall() : void {
    chrome.browserAction.setIcon({path: "assets/icon.png"});
    console.log("Thank you for installing YTHBC 2.0!");
}

let enabled : boolean = true;
let replaceIcon : boolean = true;

// TODO: static typing
function msg(request : any, sender : any, sendResponse : any) : boolean {
    if (request.msg === "get") {
        sendResponse({enabled: enabled, replaceIcon: replaceIcon});
        return true;
    }
    if (request.msg === "setEnabled") {
        enabled = request.value;
        console.log("Enabled:", enabled);
        return true;
    }
    if (request.msg === "setReplaceIcon") {
        replaceIcon = request.value;
        console.log("Replace Icon:", replaceIcon);
        return true;
    }
    return false;
}

chrome.runtime.onInstalled.addListener(onInstall);

chrome.runtime.onMessage.addListener(msg);

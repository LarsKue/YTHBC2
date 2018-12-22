
function onInstall() : void {
    chrome.browserAction.setIcon({path: "assets/icon.png"});
    console.log("Thank you for installing YTHBC 2.0!");
}

let enabled : boolean = true;

function enableDisable() : void {
    enabled = !enabled;
    if (enabled) {
        chrome.browserAction.setIcon({path: "assets/icon.png"});
        console.log("Enabling...");
    } else {
        chrome.browserAction.setIcon({path: "assets/iconDisabled.png"});
        console.log("Disabling...");
    }
}

// TODO: static typing
function msgEnabled(request : any, sender : any, sendResponse : any) : boolean {
    if (request.msg === "getEnabled") {
        sendResponse({enabled: enabled});
        return true;
    }
}

chrome.runtime.onInstalled.addListener(onInstall);

chrome.browserAction.onClicked.addListener(enableDisable);

chrome.runtime.onMessage.addListener(msgEnabled);

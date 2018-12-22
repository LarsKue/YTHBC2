
function installMessage() : void {
    console.log("The color has been set!");
}

function setColor() : void {
    let clr : string = "#00b419";
    chrome.storage.sync.set({color: clr}, installMessage);
}

chrome.runtime.onInstalled.addListener(setColor);

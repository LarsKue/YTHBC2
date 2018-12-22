function onInstall() {
    chrome.browserAction.setIcon({ path: "assets/icon.png" });
    console.log("Thank you for installing YTHBC 2.0!");
}
var enabled = true;
function enableDisable() {
    enabled = !enabled;
    if (enabled) {
        chrome.browserAction.setIcon({ path: "assets/icon.png" });
        console.log("Enabling...");
    }
    else {
        chrome.browserAction.setIcon({ path: "assets/iconDisabled.png" });
        console.log("Disabling...");
    }
}
function msgEnabled(request, sender, sendResponse) {
    if (request.msg === "getEnabled") {
        sendResponse({ enabled: enabled });
        return true;
    }
}
chrome.runtime.onInstalled.addListener(onInstall);
chrome.browserAction.onClicked.addListener(enableDisable);
chrome.runtime.onMessage.addListener(msgEnabled);

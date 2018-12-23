function onInstall() {
    chrome.browserAction.setIcon({ path: "assets/icon.png" });
    console.log("Thank you for installing YTHBC 2.0!");
}
var enabled = true;
var replaceIcon = true;
function msg(request, sender, sendResponse) {
    if (request.msg === "get") {
        sendResponse({ enabled: enabled, replaceIcon: replaceIcon });
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

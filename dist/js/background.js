function installMessage() {
    console.log("The color has been set!");
}
function setColor() {
    var clr = "#00b419";
    chrome.storage.sync.set({ color: clr }, installMessage);
}
chrome.runtime.onInstalled.addListener(setColor);

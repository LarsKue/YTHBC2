var isFullScreen = !!document.fullscreen;
var buttonID = "NewHomeButton";
var buttonURL = chrome.extension.getURL("assets/button.png");
var vert_scroll = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
function execute() {
    document.querySelectorAll("a[title='YouTube Home'").forEach(function (linkItem) {
        linkItem.href = "https://www.youtube.com/";
        linkItem.innerHTML = "<img src = " + buttonURL + ">";
    });
}
chrome.runtime.sendMessage({ msg: "getEnabled" }, function (response) {
    if (response.enabled) {
        execute();
    }
    return true;
});

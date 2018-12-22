var isFullScreen = !!document.fullscreen;
var buttonID = "NewHomeButton";
var buttonURL = chrome.extension.getURL("assets/button.png");
var vert_scroll = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
function showImage(b) {
    document.getElementById(buttonID).style.visibility = b ? "visible" : "hidden";
}
function onFullScreenChange() {
    isFullScreen = !isFullScreen;
    console.log("You are now " + (isFullScreen ? "" : "not ") + "in FullScreen mode.");
    showImage(!isFullScreen);
}
function onScroll() {
    vert_scroll = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    if (isFullScreen) {
        showImage(vert_scroll);
    }
}
function createButton() {
    var linkItem = document.createElement("a");
    linkItem.id = buttonID;
    linkItem.href = "https://www.youtube.com/";
    linkItem.innerHTML = "<img src=" + buttonURL + " title='YouTube Home'>";
    linkItem.setAttribute("style", "position:fixed;" +
        "top:15px;" +
        "left:70px;" +
        "z-index:3000;");
    document.getElementsByTagName("body")[0].appendChild(linkItem);
}
document.addEventListener("fullscreenchange", onFullScreenChange);
window.addEventListener("scroll", onScroll);
createButton();

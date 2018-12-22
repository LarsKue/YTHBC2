// this page is called every time youtube is loaded

let isFullScreen : boolean = !!document.fullscreen;

let buttonID : string = "NewHomeButton";

let buttonURL : string = chrome.extension.getURL("assets/button.png");

// covers whether the user has scrolled down on all browsers
let vert_scroll : boolean = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

function showImage(b : boolean) : void {
    document.getElementById(buttonID).style.visibility = b ? "visible" : "hidden";
}

// called every time the user changes fullscreen mode on youtube
function onFullScreenChange() : void {
    isFullScreen = !isFullScreen;
    console.log(`You are now ${isFullScreen ? "" : "not "}in FullScreen mode.`);

    // hide the image when the user goes fullscreen
    showImage(!isFullScreen);
}

function onScroll() : void {
    // update the current scroll position
    vert_scroll = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    // as of 22/12/18, YouTube will show the home button when in fullscreen, when the user scrolls down to the comments
    if (isFullScreen) {
        showImage(vert_scroll);
    }
}

function createButton() : void {
    const linkItem= document.createElement("a");
    linkItem.id = buttonID;
    linkItem.href = "https://www.youtube.com/";
    linkItem.innerHTML = `<img src=${buttonURL} title='YouTube Home'>`;
    linkItem.setAttribute("style",
        "position:fixed;" +
        "top:15px;" +
        "left:70px;" +
        "z-index:3000;");

    document.getElementsByTagName("body")[0].appendChild(linkItem);
}

// check if the extension is enabled before loading the image
chrome.runtime.sendMessage({msg: "getEnabled"}, function(response) {
    // sending messages is asynchronous, so you can't really do this much differently without using storage api
    if (response.enabled) {
        createButton();
        document.addEventListener("fullscreenchange", onFullScreenChange);
        window.addEventListener("scroll", onScroll);
    }
    // maybe need this here to prevent some asynchronosity?
    return true;
});



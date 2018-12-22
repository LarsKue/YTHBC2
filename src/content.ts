// this page is called every time youtube is loaded

let isFullScreen : boolean = !!document.fullscreen;

let buttonID : string = "NewHomeButton";

let buttonURL : string = chrome.extension.getURL("assets/button.png");

// covers whether the user has scrolled down on all browsers
let vert_scroll : boolean = !!(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

function execute() : void {

    // select all items from the document that have the title "YouTube Home" and give them the
    // proper link and a regular YouTube Home image
    document.querySelectorAll("a[title='YouTube Home'").forEach(function(linkItem : any) {
        linkItem.href = "https://www.youtube.com/";
        linkItem.innerHTML = `<img src = ${buttonURL}>`;
    });
}

chrome.runtime.sendMessage({msg: "getEnabled"}, function(response) {
    if(response.enabled) {
        execute();
    }
    return true;
});



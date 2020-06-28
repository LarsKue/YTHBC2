let buttonURL = chrome.extension.getURL("assets/button.png");
function execute(replaceIcon) {
    document.querySelectorAll("a[class='yt-simple-endpoint style-scope ytd-topbar-logo-renderer']").forEach(function (linkItem) {
        linkItem.href = "/";
        if (replaceIcon) {
            linkItem.innerHTML = `<img src = ${buttonURL} alt = "Button URL">`;
        }
    });
    return true;
}
window.onload = function () {
    chrome.runtime.sendMessage({ msg: "get" }, function (response) {
        if (response.enabled) {
            execute(response.replaceIcon);
            return true;
        }
        return false;
    });
};

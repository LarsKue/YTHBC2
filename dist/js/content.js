var buttonURL = chrome.extension.getURL("assets/button.png");
function execute() {
    document.querySelectorAll("a[class='yt-simple-endpoint style-scope ytd-topbar-logo-renderer'").forEach(function (linkItem) {
        linkItem.href = "/";
        linkItem.innerHTML = "<img src = " + buttonURL + ">";
    });
    return true;
}
window.onload = function () {
    chrome.runtime.sendMessage({ msg: "getEnabled" }, function (response) {
        if (response.enabled) {
            execute();
        }
        return true;
    });
};

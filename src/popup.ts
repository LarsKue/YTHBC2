let enableButton = document.getElementById("enableDisable");
let checkBox = document.getElementById("replaceIcon");

enableButton.addEventListener("click", enableDisable);
checkBox.addEventListener("click", enableDisableIcon);

let isEnabled : boolean;
let isChecked : boolean;
window.onload = function() {
    chrome.runtime.sendMessage({msg: "get"}, function (response): boolean {
        isChecked = response.replaceIcon;
        isEnabled = response.enabled;
        // change the button text
        enableButton.innerHTML = isEnabled ? "Disable" : "Enable";
        enableButton.style.backgroundColor = isEnabled ? "#DD0000" : "green";
        return true;
    });
};

function enableDisable() : void {
    if (isEnabled) {
        enableButton.textContent = "Enable";
        enableButton.style.backgroundColor = "green";
        chrome.browserAction.setIcon({path: "../../assets/iconDisabled.png"});
    } else {
        enableButton.textContent = "Disable";
        enableButton.style.backgroundColor = "#DD0000";
        chrome.browserAction.setIcon({path: "../../assets/icon.png"});
    }

    isEnabled = !isEnabled;

    chrome.runtime.sendMessage({msg: "setEnabled", value: isEnabled});
}

function enableDisableIcon() : void {
    isChecked = !isChecked;

    chrome.runtime.sendMessage({msg: "setReplaceIcon", value: isChecked});
}
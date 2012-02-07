function execGrabASIN() {
    chrome.tabs.executeScript(null, {file: "grabASIN.js"}, null);
}

var id = chrome.contextMenus.create({
    "title": "Grab ASIN",
    "contexts":["page"],
    "onclick": execGrabASIN
});

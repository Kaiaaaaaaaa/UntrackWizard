// console.log("uncheck script running");

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, { file: 'uncheck.js' });
});

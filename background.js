chrome.tab.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url) {
    console.log(tab.url);
  }
});

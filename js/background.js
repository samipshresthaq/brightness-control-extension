chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.url) {
    const url = new URL(tab.url);
    const domain = url.hostname;

    await chrome.tabs.sendMessage(tab.id, {
      action: "updateBrightnessFromStorage",
      domain,
    });
  }
});

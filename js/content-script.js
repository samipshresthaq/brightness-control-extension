(() => {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );

    const { action, ...options } = request;
    const body = document.getElementsByTagName("body")[0];

    if (action === "updateBrightness") {
      const url = new URL(options.tabUrl);
      const domain = url.hostname;

      body.style.filter = "brightness(" + options.brightnessValue + "%)";
      localStorage.setItem(domain, options.brightnessValue);
    }

    if (action === "updateBrightnessFromStorage") {
      const brightnessValue = localStorage.getItem(options.domain) || 100;
      if (brightnessValue) {
        body.style.filter = "brightness(" + brightnessValue + "%)";
      }
    }

    return true;
  });
})();

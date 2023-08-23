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

    const { greeting, value } = request;
    if (greeting === "hello") {
      var body = document.getElementsByTagName("body")[0];

      body.style.filter = "brightness(" + value + "%)";
    }

    return true;
  });
})();

var slider = document.getElementById("brightnessRange");
var output = document.getElementById("siderValue");
output.innerHTML = slider.value / 100;

slider.oninput = async function () {
  output.innerHTML = this.value / 100;
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  try {
    await chrome.tabs.sendMessage(tab.id, {
      action: "updateBrightness",
      brightnessValue: this.value,
      tabUrl: tab.url,
    });
  } catch (e) {
    console.log(`Cannot set brightness level. Following error occured: ${e}`);
  }
};

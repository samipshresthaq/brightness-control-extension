var slider = document.getElementById("brightnessRange");
var output = document.getElementById("siderValue");
output.innerHTML = slider.value / 100;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = async function () {
  output.innerHTML = this.value / 100;
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, {
    greeting: "hello",
    value: this.value,
  });
};

document.getElementById('pickColor').addEventListener('click', () => {
  chrome.storage.local.set({ pickingColor: true }, () => {
    chrome.scripting.executeScript({
      target: {tabId: chrome.tabs.TAB_ID},
      func: () => {
        document.body.style.cursor = 'crosshair';
      }
    });
  });
});

chrome.storage.local.get('pickedColor', (data) => {
  if (data.pickedColor) {
    document.getElementById('colorValue').textContent = data.pickedColor;
    document.getElementById('colorDisplay').style.backgroundColor = data.pickedColor;
  }
});

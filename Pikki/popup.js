document.getElementById('pickColor').addEventListener('click', () => {
    chrome.scripting.executeScript({
      target: {tabId: chrome.tabs.TAB_ID},
      func: () => {
        document.addEventListener('click', (e) => {
          let color = getComputedStyle(e.target).backgroundColor;
          if (!color || color === 'rgba(0, 0, 0, 0)') {
            color = getComputedStyle(e.target).color;
          }
          if (color) {
            chrome.storage.local.set({pickedColor: color});
            alert(`Color picked: ${color}`);
          }
        }, {once: true});
      }
    });
  });
  
  chrome.storage.local.get('pickedColor', (data) => {
    if (data.pickedColor) {
      document.getElementById('colorValue').textContent = data.pickedColor;
      document.getElementById('colorDisplay').style.backgroundColor = data.pickedColor;
    }
  });
  
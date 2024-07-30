// When the user clicks on the page
document.addEventListener('click', function (event) {
    if (event.target) {
      // Get the computed style of the clicked element
      const style = getComputedStyle(event.target);
      let color = style.backgroundColor;
  
      // If background color is transparent or not set, try the color property
      if (!color || color === 'rgba(0, 0, 0, 0)') {
        color = style.color;
      }
  
      if (color) {
        chrome.storage.local.set({ pickedColor: color });
        alert(`Color picked: ${color}`);
        document.body.style.cursor = ''; // Reset cursor
      }
    }
  });
  
  // Reset cursor when the script is injected
  chrome.storage.local.get('pickingColor', (data) => {
    if (data.pickingColor) {
      document.body.style.cursor = 'crosshair';
      chrome.storage.local.set({ pickingColor: false });
    }
  });
  
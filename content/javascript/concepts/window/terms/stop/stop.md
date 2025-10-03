---
Title: 'stop()'
Description: 'Stops the loading of the current window, equivalent to clicking the stop button of browser.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.stop()`** method immediately terminates the loading of content in the current window, including images, animations, and scripts. This provides programmatic control over page loading, similar to manually stopping a page using the browser's stop button or the Escape key.

## Syntax

```pseudo
window.stop()
```

## Example

This JavaScript code demonstrates the usage of `.stop()` by creating a simple resource loading interface. The code creates three main elements:

- A "Load Resources" button that starts loading images.
- A "Stop Loading" button that prevents further loading.
- A status display (`div`) to show the loading progress.

```js
const loadButton = document.createElement('button');
loadButton.textContent = 'Load Resources';
document.body.appendChild(loadButton);

// Create a stop button
const stopButton = document.createElement('button');
stopButton.textContent = 'Stop Loading';
document.body.appendChild(stopButton);

// Create a status display
const status = document.createElement('div');
status.id = 'status';
document.body.appendChild(status);

// Function to simulate loading multiple resources
function loadResources() {
  status.textContent = 'Loading resources...';

  // Simulate loading multiple heavy resources
  for (let i = 1; i <= 5; i++) {
    const img = new Image();
    img.src = `/api/placeholder/1000/1000?text=Resource${i}&delay=2000`;

    img.onload = () => {
      status.textContent = `Loaded resource ${i} of 5`;
    };

    img.onerror = () => {
      status.textContent = `Resource ${i} loading failed (possibly stopped)`;
    };
  }
}

// Add click handlers
loadButton.onclick = loadResources;
stopButton.onclick = () => {
  window.stop();
  status.textContent = 'Loading stopped by user';
};
```

> **Note:** The code must be used within an HTML document since it manipulates the DOM (Document Object Model) and relies on the browser's window object.

When the "Stop Loading" button is clicked, it'll stop the process and will display this:

![Window.stop() Code Output](https://raw.githubusercontent.com/Codecademy/docs/main/media/window-stop-1.png)

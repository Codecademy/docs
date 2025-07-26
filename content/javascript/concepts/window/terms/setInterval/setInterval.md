---
Title: 'setInterval()'
Description: 'Repeatedly calls a function or executes code at specified time intervals.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'DOM'
  - 'Functions'
  - 'Methods'
  - 'Time'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

JavaScript's **`setInterval()`** is a built-in function that belongs to the `Window` object. It repeatedly calls a [function](https://www.codecademy.com/resources/docs/javascript/functions) or executes a code snippet at specified time intervals, creating a continuous loop of execution until it is explicitly stopped.

## Syntax

```pseudo
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* … ,*/ argN)
```

**Parameters:**

- `func`: A function to be executed every `delay` milliseconds. The first execution happens after `delay` milliseconds.
- `delay`: The time, in milliseconds, between each execution of the specified function. Defaults to 0 if not specified.
- `arg1, ..., argN` (optional): Additional arguments that are passed to the function specified by `func` once the timer expires.

**Return value:**

The `setInterval()` method returns a positive integer (interval ID) that uniquely identifies the timer created by the call. This identifier can be passed to `clearInterval()` to cancel the interval.

## Example 1: Basic Counter Using `setInterval()`

This example demonstrates a simple counter that increments every second and displays the count in the console:

```js
let count = 0;

// Function to increment and display count
function incrementCounter() {
  count++;
  console.log(`Count: ${count}`);
}

// Set interval to call incrementCounter every 1000ms (1 second)
const intervalId = setInterval(incrementCounter, 1000);

// Stop the counter after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Counter stopped');
}, 5000);
```

This example results in the following output:

```shell
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Counter stopped
```

## Example 2: Real-time Clock Display Using `setInterval()`

This example creates a real-time digital clock that updates every second and displays the current time in a webpage element:

```js
// Function to update the clock display
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  // Update the clock element with current time
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

// Update clock immediately
updateClock();

// Set interval to update clock every second
const clockInterval = setInterval(updateClock, 1000);

// Function to stop the clock
function stopClock() {
  clearInterval(clockInterval);
  console.log('Clock stopped');
}
```

This example results in the following output:

```shell
Clock displays: 2:30:45 PM
Clock displays: 2:30:46 PM
Clock displays: 2:30:47 PM
(continues updating every second)
```

## Example 3: Using `setInterval()` to Auto-refresh Data Feed

This example demonstrates fetching and displaying data from an API at regular intervals, simulating a real-time data feed:

```js
let updateCount = 0;
const maxUpdates = 10;

// Function to fetch and display data
async function fetchDataFeed() {
  try {
    updateCount++;
    console.log(`Fetching data update #${updateCount}`);

    // Simulate API call with random data
    const mockData = {
      timestamp: new Date().toISOString(),
      temperature: Math.round(Math.random() * 30 + 10),
      humidity: Math.round(Math.random() * 50 + 30),
    };

    // Display the data
    console.log(`Temperature: ${mockData.temperature}°C`);
    console.log(`Humidity: ${mockData.humidity}%`);
    console.log(`Last updated: ${mockData.timestamp}`);
    console.log('---');

    // Stop after maximum updates
    if (updateCount >= maxUpdates) {
      clearInterval(dataFeedInterval);
      console.log('Data feed stopped');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Set interval to fetch data every 3 seconds
const dataFeedInterval = setInterval(fetchDataFeed, 3000);

// Initial data fetch
fetchDataFeed();
```

This example results in the following output:

```shell
Fetching data update #1
Temperature: 23°C
Humidity: 45%
Last updated: 2024-01-15T10:30:00.000Z
---
Fetching data update #2
Temperature: 27°C
Humidity: 38%
Last updated: 2024-01-15T10:30:03.000Z
---
(continues for 10 updates, then stops)
```

## Frequently Asked Questions

### 1. What happens if I don't call `clearInterval()`?

The interval will continue running indefinitely until the page is refreshed or closed, which can cause memory leaks and performance issues.

### 2. Can I use `setInterval()` with arrow functions?

Yes, `setInterval()` works with arrow functions, regular functions, and anonymous functions.

### 3. What's the difference between `setInterval()` and `setTimeout()`?

`setInterval()` executes repeatedly at specified intervals, while `setTimeout()` executes only once after a specified delay.

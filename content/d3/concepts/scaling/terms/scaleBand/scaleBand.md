---
Title: '.scaleBand()'
Description: 'Creates a band scale for mapping ordinal data to positions along an axis in D3.js.'
Subjects:
  - 'Code Foundations'
  - 'Data Visualization'
Tags:
  - 'D3'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-visualization'
---

The **`.scaleBand()`** function in D3.js is designed to create a band scale for mapping ordinal data to positions along an axis. This scale is commonly used for visualizing categorical data or discrete categories in data visualizations.

## Syntax

```pseudo
d3.scaleBand()
  .domain(inputDomain)
  .range(outputRange)
  .padding(innerPadding)
  .paddingOuter(outerPadding);
```

- `inputDomain`: An array representing the input domain (categories or discrete values).
- `outputRange`: An array representing the output range (typically the width of the visualization).
- `innerPadding`: Specifies the padding between bands, as a fraction of the bandwidth (default is 0.).
- `outerPadding`: Specifies the padding before the first band and after the last band, as a fraction of the bandwidth (default is 0.).

## Example

The example code below defines an array of emojis, creates a band scale, and logs the x-axis positions of each emoji:

```js
// Fun emoji categories
var emojis = ['🍎', '🍌', '🍇', '🍊', '🍓'];

// Create a band scale
var xScale = d3
  .scaleBand()
  .domain(emojis)
  .range([0, 200]) // Width of the visualization

// Log the positions of emojis
emojis.forEach(function (emoji) {
  console.log(`Position of ${emoji}: ${xScale(emoji)}`);
});
```

>> **Note:** Remember to include this script in the html file for the example to function properly.

Finally, when the HTML file is opened in a browser and the console is accessed within the inspect tool, an output similar to the following should be observed:

```shell
    Position of 🍎: 0
    Position of 🍌: 40
    Position of 🍇: 80
    Position of 🍊: 120
    Position of 🍓: 160
```

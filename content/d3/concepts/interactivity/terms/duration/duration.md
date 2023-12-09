---
Title: '.duration()'
Description: 'Specifies the duration for transitions in D3 visualizations.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Methods'
  - 'Animation'
  - 'D3'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.duration()`** method sets the duration for transitions. This is crucial for creating animated visualizations, allowing developers to control how long an animation takes to move from a starting to an ending state. It accepts a single argument representing the time in milliseconds for the transition.

## Syntax

```pseudo
transition().duration(milliseconds)
```

This method requires a transition selection object and `miliseconds` as an argument. If `milliseconds` is not provided, D3 defaults to using a 250ms duration for the transition.

## Example

Consider an HTML file with a SVG circle:

```html
<!DOCTYPE html>
<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<div>
  <h1>D3 duration example</h1>
  <svg width="600px" height="300px">
    <circle
      id="my_circle"
      cx="100"
      cy="150"
      r="50"
      stroke="black"
      fill="tomato"
      stroke-width="2"
    />
  </svg>
</div>
```

Below is an example of how to use the `.duration()` method to set the duration of the color change for the SVG circle with the help of a button:

```html
<button onclick="changeColor()">Change color</button>

<script>
  function changeColor() {
    // Select the circle by its ID
    d3.select('#my_circle')
      .transition() // Start a transition
      .duration(1000) // Set the duration to 1 second
      .attr('fill', 'steelblue'); // Change the fill color to steelblue
    console.log('Color changed successfully');
  }
</script>
```

In this example, the selection identified by `myCircle` will smoothly transition its color from `tomato` to `steelblue`. Once the transition is complete, a console message will confirm its completion.

The following gif shows the transition effect on the SVG circle when the button is clicked:

![D3 transition effect on SVG circle](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-duration-example.gif)

The output in the console is as follows:

```shell
"Color changed successfully"
```

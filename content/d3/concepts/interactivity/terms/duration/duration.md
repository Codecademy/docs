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

The **`.duration()`** method sets the time for which a transition lasts. This method is crucial for creating animated visualizations as it allows developers to control the length of an animation. It accepts a single argument representing the duration in milliseconds for the transition.

## Syntax

```pseudo
transition().duration(t)
```

- `t`: It is the duration of the animation and the only argument taken by the `.duration()` method. If not specified, the default duration value is set to 250ms for the transition.

## Example

Below is an example of how to use the `.duration()` method to create a transition effect (color change) on an SVG circle:

```js
function changeColor() {
  // Select the circle element by its ID
  d3.select('#myCircle')
    .transition() // Start a transition
    .duration(1000) // Set the duration to 1 second
    .attr('fill', 'steelblue'); // Change the fill color to steelblue
  console.log('Color changed successfully');
}
```

In this example, the selection identified by `myCircle` will smoothly transition its color to `steelblue`. Once the transition is complete, a console message will confirm its completion.

The following gif shows the transition effect on an SVG circle when the function is called:

![D3 transition effect on SVG circle](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-duration-example.gif)

The output in the console is as follows:

```shell
"Color changed successfully"
```

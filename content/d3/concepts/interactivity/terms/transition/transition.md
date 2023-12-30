---
Title: '.transition()'
Description: 'Returns a new transition on the given selection with the specified name.'
Subjects:
  - 'Data Visualization'
  - 'Animations'
Tags:
  - 'Methods'
  - 'Animations'
  - 'Selection'
  - 'Transitions'
CatalogContent:
  - 'learn-d3'
  - 'paths/web-development'
---

In D3.js, the **`.transition()`** method is used to create a smooth transition between different states of a selection. Transitions provide a way to animate changes in the DOM elements over time.
It allows to smoothly update the appearance of elements making visualizations more interactive and engaging.

## Syntax

```pseudo
selection.transition([name])
    .delay(value)
    .duration(value)
    .ease(easingFunction)
    .on(type, listener);
```

- `selection`: The element on which transition is applied.
- `name`: An optional string indicating the name of the transition.
- `delay(value)`: Specifies a delay before the transition starts (in milliseconds). (optional)
- `duration(value)`: Specifies the duration of the transition (in milliseconds).
- `ease(easingFunction)`: Specifies the easing function for the transition. Easing functions control the pacing of the transition. (optional)
- `on(type, listener)`: Adds an event listener for the transition.

## Example

Consider an HTML document with an SVG element containing a circle with the specified ID `circle`. Here's a simple HTML structure with D3.js code to create the transition animation:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://d3js.org/d3.v5.min.js"></script>
  </head>
  <body>
    <svg width="400" height="300">
      <circle id="circle" cx="80" cy="80" r="40" fill="red"></circle>
    </svg>

    <script>
      // D3.js code
      let circle = d3.select("#circle");
      // Apply a transition with a duration of 2000 milliseconds
      circle
        .transition() // initiate the transition
        .delay(200) // delay before the transition starts (optional)
        .duration(2000) // duration of the transition in milliseconds
        .ease(d3.easeBounce) // easing function (optional)
        .attr("cx", 300) // change the 'cx' attribute to 300
        .attr("fill", "red") // change the fill color to red
        .on("end", function () {
          console.log("Transition ended!"); // callback when the transition ends (optional)
        });
    </script>
  </body>
</html>
```

In this example: 
- The transition is initiated with `.transition()`.
- There's a delay of 200 milliseconds before the transition starts.
- The transition lasts for 2000 milliseconds.
- The easing function `d3.easeBounce` is used for a bouncing effect.
- The `cx` attribute is changed to 300, and the fill color is changed to red.
- An event listener is added to log a message when the transition ends.

The output of the mentioned code is as follows:


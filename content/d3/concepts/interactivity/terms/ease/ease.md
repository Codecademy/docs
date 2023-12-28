---
Title: '.ease()'
Description: 'Specifies the easing function for transitions.'
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

The **`.ease()`** method is specific to the D3.js library, this is primarily used to add an easing effect to a transition. It allows to control the timing and pacing of transitions in animations.

## Syntax

```pseudo
selection.transition()
    .duration(duration)
    .ease(easingFunction);
```

- `selection`: The selection of DOM elements to which transition will be applied.
- `duration`: The time duration of the transition in milliseconds.
- `easingFunction`: It is the easing function.

Some of the commonly used built-in easing functions include:

- `d3.easeLinear`: Linear easing (constant speed).
- `d3.easeCubic`: Cubic easing, which accelerates and decelerates smoothly.
- `d3.easeSin`: Sinusoidal easing.
- `d3.easeQuad`: Quadratic easing.
- `d3.easeBounce`: Bouncing easing.
- `d3.easeElastic`: Elastic easing with customizable amplitude and period.
- `d3.easeCircle`: Circular easing, creating a circular motion.
- `d3.easeBack`: Back easing with customizable overshoot.

## Example

Consider an HTML document with an SVG element containing a circle with the specified ID `myCircle`. Here's a simple HTML structure with D3.js code to create the transition animation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://d3js.org/d3.v5.min.js"></script>
</head>
<body>
    <svg width="400" height="300">
        <circle id="myCircle" cx="30" cy="40" r="40" fill="blue"></circle>
    </svg>

    <script>
        // D3.js code
        var circle = d3.select("#myCircle");

        // Apply a transition with a duration of 2000 milliseconds and linear easing
        circle.transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("cx", 200)
            .attr("cy", 40);
    </script>

</body>
</html>
```

In this example, the `.ease(d3.easeLinear)` specifies that the transition should use a linear easing function. It provides a constant speed to the motion of the circle throughout the transition, resulting in a straight-line movement from the initial position to the final position.

The output of the mentioned code is as follows:

![d3.easeLinear animation](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-ease-example.gif)

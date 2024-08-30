---
Title: '.delay()'
Description: 'Sets a waiting period before executing subsequent actions.'
Subjects:
  - 'Data Visualization'
  - 'Web Development'
Tags:
  - 'Animation'
  - 'Transitions'
  - 'D3'
CatalogContent:
  - 'learn-d3'
  - 'paths/computer-science'
---

The **`.delay()`** method is used in the context of transitions and sets the delay before the transition starts.

## Syntax

```pseudo
selection.transition()
  .delay(delayValue)
```

- `delayValue` - It is the time delay in milliseconds.

## Example

In the following example, the circles start with different radii and then transition to a radius of 30 after a short delay.

```js
let circles = d3
  .select('svg')
  .selectAll('circle')
  .data([5, 15, 25]) // Example data for circle radius
  .enter()
  .append('circle')
  .attr('cx', (d, i) => i * 50 + 30)
  .attr('cy', 100)
  .attr('r', (d) => d)
  .attr('fill', 'black');

// Transition to change the radius with a delay
circles
  .transition()
  .delay(3000) // Introduce a delay of 3000 milliseconds (3 seconds)
  .attr('r', 30); // Change the radius attribute during the transition
```

The example will result in the following output:

![delay-3-sec](https://raw.githubusercontent.com/Codecademy/docs/main/media/delay-3-sec.gif)

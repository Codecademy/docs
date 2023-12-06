---
Title: '.delay()'
Description: 'Creates a temporal pause, introducing a waiting period before executing subsequent actions.' 
Subjects: 
  - 'Data Visualization'
  - 'Web Development'
Tags: 
  - 'Animation'
  - 'Transitions'
  - 'React Native'
  - 'D3'
CatalogContent: 
  - 'introduction-to-javascript'
  - 'paths/data-science'
---

The **`.delay()`** method is used within transitions to introduce a time delay before the execution of the specified actions.

## Syntax

```pseudo
selection.transition()
    .delay(delayValue)
```
The `.delay()` method is used in the context of transitions and sets the delay before the transition starts.
- `delayValue` is the time delay in milliseconds.

## Example

In the following example the circles start with different radius and then transition to radius of 20 after 1-second delay.

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/d3@5"></script>
  <title>D3.js .delay() Example</title>
</head>
<body>

<svg width="200" height="200"></svg>

<script>
let circles = d3.select('svg').selectAll('circle')
    .data([10, 20, 30]) // Example data for circle radius
    .enter().append('circle')
    .attr('cx', (d, i) => i * 50 + 30)
    .attr('cy', 100)
    .attr('r', d => d)
    .attr('fill', 'blue');

// Transition to change the radius with a delay
circles.transition()
    .delay(1000) // Introduce a delay of 1000 milliseconds (1 second)
    .attr('r', 20); // Change the radius attribute during the transition
</script>

</body>
</html>
```


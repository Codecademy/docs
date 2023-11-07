---
Title: '.domain()'
Description: 'denotes minimum and maximum values of the input data'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'D3'
  - 'functions'
CatalogContent:
  - 'learn-d3'
  - 'paths/computer-science'
---

The **`.domain()`** method is associated with scale functions in `D3.js`. This method is used to specify the input domain of a scale, which defines the range of values that the scale should map from. In other words, it sets the minimum and maximum values that the scale will accept as input.

## Syntax

```pseudo
d3.scaleLinear().domain([minValue, maxValue]).range([minOutput, maxOutput]);

```

- `scaleLinear`: Construct a continuous linear scale where input data (domain) maps to specified output range.
- `range`: Output range that are mapped from input values.

## Example

In the example given below the `scale` can map values within the specified domain to corresponding values within the range.

```js
const scale = d3.scaleLinear().domain([0, 100]).range([0, 500]);

console.log(scale(0));
console.log(scale(50));
console.log(scale(100));
```

Output:

```shell
0
250
500
```

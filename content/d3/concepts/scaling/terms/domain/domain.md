---
Title: '.domain()'
Description: 'Used to specify the minimum and maximum values of the input data.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

The **`.domain()`** method in D3 is used to specify the input domain of a scale, which defines the range of values that the scale will accept. A scale operates as a function that takes in one set of values and translates those values to a given range.

## Syntax

```pseudo
d3.scaleType()
    .domain([minValue, maxValue])
    .range([minOutput, maxOutput]);
```

- `.scaleType()`: The selected scale method (e.g., `.scaleLinear()`- a continuous linear scale).
- `.domain()`: Requires the `minValue` and `maxValue` arguments to set the accepted range.
- `.range()`: The second step in defining a scale, the arguments `minOutput` and `maxOutput` are used to specify the set of values returned by the scale.

## Example

In the example given below the `scale` will map values within the specified domain to the corresponding range given. The `scale` is set to have a domain from `0` to `100` and range from `0` to `500`. When a value is passed within a given domain to the scale, it will map them accordingly.

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

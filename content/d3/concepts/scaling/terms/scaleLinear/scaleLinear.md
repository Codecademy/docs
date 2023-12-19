---
Title: '.scaleLinear()'
Description: 'Used to create a linear scale between a domain and a range.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Graphs'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.scaleLinear()`** method is used to construct a new linear scale by specifying its domain and range. This scale is particularly useful for linearly mapping input values with a specified [domain](https://www.codecademy.com/resources/docs/d3/scaling/domain) to corresponding output values in a defined [range](https://www.codecademy.com/resources/docs/d3/scaling/range). The syntax for the `.scaleLinear()` involves specifying the input domain and the corresponding output range.

## Syntax

```pseudo
d3.scaleLinear()
  .domain([minValue, maxValue])
  .range([minOutput, maxOutput]);
```

- `.scaleLinear()`: The method that creates a linear scale for continious mapping.
- `.domain()`: Requires the `minValue` and `maxValue` arguments to set the accepted range.
- `.range()`: The second step in defining a scale, the arguments `minOutput` and `maxOutput` are used to specify the output range of the scale.

## Example

In the example given below the `scale` will map values within the specified domain to the corresponding range given. The `scale` is set to have a domain from `0` to `100` and range from `0` to `500`. When the values are mapped from the domain passed to the scale, the range produces the output accordingly:

```js
const scale = d3.scaleLinear().domain([0, 100]).range([0, 500]);

console.log(scale(0));
console.log(scale(50));
console.log(scale(100));
```

The output of the above example will be:

```shell
0
250
500
```

---
Title: '.range()'
Description: 'Used to define output range of a scale.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'Data'
  - 'Graphs'
CatalogContent:
  - 'learn-d3'
  - 'paths/computer-science'
---

The **`.range()`** method is used to define the output range of a scale. The range represents the output values produced by the scale when mapped from the [domain](https://www.codecademy.com/resources/docs/d3/scaling/domain). The syntax for the `.range()` method depends on the type of scale used.

## Syntax

```pseudo
d3.scaleType()
  .domain([minValue, maxValue])
  .range([minOutput, maxOutput]);
```

- `.scaleType()`: The selected scale method (e.g., `.scaleLinear()`- a continuous linear scale).
- `.domain()`: Requires the `minValue` and `maxValue` arguments to set the accepted range.
- `.range()`: The second step in defining a scale, the arguments `minOutput` and `maxOutput` are used to specify the output range of the scale.

## Example

In the example given below the `scale` will map values within the specified domain to the corresponding range given. The `scale` is set to have a domain from `0` to `100` and range from `0` to `500`. When the values are mapped from the domain passed to the scale, the range produces the output accordingly.

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

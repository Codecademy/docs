## Description

New term entry: d3 .scaleOrdinal()

## What d3 .scaleOrdinal() function does

This function is used to generate and return an ordinal scale with the supplied domain and range. The array is set to be an empty array, if neither the range nor the domain are specified.

## Syntax

It has two input parameters: domain and range.

## scaleOrdinal(domain, range)

- The domain specifies the scale's maximum and minimum values.
- Range. Values in the range corresponds to values in the domain.

## d3.scaleOrdinal([[domain, ]range]);

## Example

Below example shows inventions corresponding to associated year of invention.

```js
const year = d3.scaleOrdinal([1450, 1879, 1903, 1939], ["Printing press", "Electric light", "Airplane", "Computer"]);
```

## Output

If a value is given in the domain(input), results in a related value from range(output) value

```js
year(1450) // "Printing press"
```




---
Title: 'scaleOrdinal()'
Description: 'scaleOrdinal() function and examples'
Subjects:
  - 'Data visualization'
  - 'Web design'
Tags: 
  - 'D3'
CatalogContent:
--- 

**scaleOrdinal()** function is used to generate and return an ordinal scale with the supplied domain and range. The array is set to be an empty array, if neither the range nor the domain are specified.

## Syntax

It has two input parameters: domain and range:

scaleOrdinal(domain, range)

- The domain specifies the scale's maximum and minimum values.
- Range. Values in the range corresponds to values in the domain.

d3.scaleOrdinal([[domain, ]range]);

## Example

Below example shows inventions corresponding to associated year of invention. 

```js
const year = d3.scaleOrdinal([1450, 1879, 1903, 1939], ["Printing press", "Electric light", "Airplane", "Computer"]);
```

## Output

If a value is given in the domain(input), results in a related value from range(output) value

```js
year(1450) // "Printing press"
year(1879) // "Electric light"
year(1903) // "Airplane"
year(1939) // "Computer"
```

## D3 repository and docummentation
[Repository](https://github.com/d3/d3-scale)
[Docummentation](https://d3js.org/d3-scale/ordinal)




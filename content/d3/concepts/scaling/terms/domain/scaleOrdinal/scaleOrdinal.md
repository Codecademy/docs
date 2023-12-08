---
Title: 'scaleOrdinal()'
Description: 'Used to produce and obtain an ordinal scale'
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

An array of date strings [1450, 1879, 1903, 1939] is connected to an array of word strings ["Printing press", "Electric light", "Airplane", "Computer"] by creating year scale using scaleOrdinal which maps the years to the inventions. 

```js
const inventors = ['Charles Babbage', 'Steve Jobs', 'Thomas Edison', 'Alexxander Graham']

const ordinalScale = d3.scaleOrdinal()
  .domain(inventions)
  .range(['The computer', 'iPhone', 'Lightbulb', 'Telephone'])
```

```shell 
ordinalScale('Charles Babbage'); // returns 'The computer';
ordinalScale('Steve Jobs'); // returns 'iPhone';
ordinalScale('Thomas Edison'); // returns 'Lightbulb';
ordinalScale('Alexander Graham'); // returns 'Telephone';
```




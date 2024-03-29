---
Title: 'Scaling'
Description: 'A class of utilities for creating chart scales.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
Tags:
  - 'Graphs'
  - 'Classes'
  - 'Functions'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/computer-science'
---

**Scaling** involves the transformation of data in order to change the domain of values to suit the parameters of a given chart. Axes are the representation of the final range of values generated by scales. In D3 there are a number of convenient methods used to create scales.

## Syntax

A D3 scale generally takes the following form:

```pseudo
svg.scaleType()            // A scale function is called
  .domain(input1, input2)  // Parameters for the domain and
  .range(output1, output2) // the range are passed
```

D3 has scaling functions that include `.scaleLinear()`, `.scaleLog()`, `.scaleOrdinal()`, and many others to address common scaling conversions. A scale definition will begin with one of these functions paired with the `.domain()` and `.range()` methods to set the parameters that will govern the data used and the final range those values will take.

## D3 Scale Methods

The following methods are part of the D3 scale class:

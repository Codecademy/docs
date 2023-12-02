---
Title: '.csv()'
Description: 'Used to load a .csv file or data and returns the data as an array of objects.'
Subjects:
  - 'Data Visualization'
  - 'Data Science'
Tags:
  - 'Methods'
  - 'D3'
  - 'Data'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.csv()`** method in D3 is used to load a .csv file or data and returns the data as an array of objects. A .csv file contains data in the form of `comma-separated-values`, which can be parsed by .csv() to be accessible for D3.

## Syntax

```pseudo
d3.csv(url[[, accessor], callback])
```

- `url`: contains the csv data.
- `accessor`: an optional conversion function to change the representation.
- `callback`: an optional callback function that executes once the data is loaded.


## Example

Consider the data in workers.csv:

```
Name,   Sex,    Age,    Height (in),    Weight (lbs)
Alex,   M,      41,     74,             170
Elly,   F,      30,     66,             124
Fran,   F,      33,     66,             115
Hank,   M,      30,     71,             158
```

To access and print the data in workers.csv, the following code is executed:

```js
d3.csv("workers.csv", function(d) {
    console.log(d);
});
```

This example results in the following output:

```shell
[
    {"Name": "Alex", "Sex": "M", "Age": "41", "Height (in)": "74", "Weight (lbs)": "170"},
    {"Name": "Elly", "Sex": "F", "Age": "30" , "Height (in)": "66", "Weight (lbs)": "124"},
    {"Name": "Fran", "Sex": "F", "Age": "33", "Height (in)": "66", "Weight (lbs)": "115"},
    {"Name": "Hank", "Sex": "M", "Age": "30", "Height (in)": "71", "Weight (lbs)": "158"}
]
```

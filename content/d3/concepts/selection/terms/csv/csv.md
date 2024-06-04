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

The **`.csv()`** function in D3 is used to load and parse CSV (`Comma-Separated-Values`) files or data asynchronously. It returns the data as an array of objects. The function is commonly used in data visualization.

## Syntax

```pseudo
d3.csv(url[[, accessor], callback])
```

- `url`: The URL of the CSV file or a string containing the CSV data.
- `accessor`: An optional conversion function to change the representation. It allows for custom data transformation and returns processed data for each row.
- `callback`: An optional callback function that executes once the data is loaded and parsed.

## Example

In the following example `.csv()` is used to load and parse CSV data. In this case, the accessor is the anonymous `function(d)`. It uses two callback functions: `.then(function(data) {})` and `.catch(function(error) {})`:

Consider the comma-separated data in example.csv:

```shell
Name,Age,City
Alice,25,New York
Bob,30,San Francisco
Charlie,28,Los Angeles
Darwin,34,Miami
```

To load, parse, and print the data in `example.csv`, the following code is executed:

```js
d3.csv('example.csv', function (d) {
  // 'd' is an object representing a row in the CSV
  return {
    name: d.Name,
    age: +d.Age, // Convert age to a number
    city: d.City,
  };
})
  .then(function (data) {
    // 'data' is an array of processed objects
    console.log(data);
  })
  .catch(function (error) {
    // Handle any errors that occurred during loading or parsing
    console.error(error);
  });
```

- The accessor function applies to each row of CSV data, transforming it into an object with the properties `name`, `age`, and `city`.
- The callback function `.then(function(data) {})` handles the processed data whereas `.catch(function(error) {})` handles potential errors during the loading process.

The example results in the following output:

```shell
[
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 28, city: 'Los Angeles' },
  { name: 'Darwin', age: 34, city: 'Miami' }
]
```

This is the processed data after applying the accessor function and the first callback function.

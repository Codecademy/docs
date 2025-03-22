---
Title: 'CSV'
Description: 'Comma-Separated Values (CSV) is a text file format where individual values are separated by commas.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Files'
  - 'Data'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Comma-Separated Values (CSV)** is a text file format where individual values are separated by commas. It is normally used to store tabular data and is favored for its simple structure allowing for straightforward parsing and data exchange.

To store tabular data, CSV files usually represent each line as a new row within the table and the values delimited by commas as the cells within each row. However, this practice is not formalized so the interpretation of the cell's contents is normally application-specific.

For example, some applications use quotation marks (`"`) or a backslash (`\`) to denote literal characters that allow the cells themselves to also contain the comma character.

## Example CSV with Corresponding Tabular Representation

An example CSV file containing data about large animals and a common rendering of its tabular form can be found below:

```pseudo
Animal,Average Length (Feet),Average Weight (Tons)
African Bush Elephant,19.7,5.4
Indian Rhinoceros,13.8,2.1
Hippopotamus,16.5,2.0
Giraffe,16.9,1.1
Gaur,12.5,1.0
```

| Animal                | Average Length (Feet) | Average Weight (Tons) |
| --------------------- | --------------------- | --------------------- |
| African Bush Elephant | 19.7                  | 5.4                   |
| Indian Rhinoceros     | 13.8                  | 2.1                   |
| Hippopotamus          | 16.5                  | 2.0                   |
| Giraffe               | 16.9                  | 1.1                   |
| Gaur                  | 12.5                  | 1.0                   |

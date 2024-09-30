---
Title: 'MySQL: COVAR_POP() function' 
Description: 'Covariance built-in function calculates the covariance of two variables in a population from a table.' 
Subjects: 
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Comparison'
  - 'Database'
  - 'MySQL'
CatalogContent: 
  - 'learn-sql'
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

The **`COVAR_POP`** function in MYSQL calculates the full covariance between two variables, which returns the result in decimal format. This function is different from `COVAR_SAMP`, which calculates the sample covariance.


## Subsection 1

The text for the command is SELECT COVAR_POP(y,x). 
The y is the independent variable and the x is the dependent.


## Codebyte Example (if applicable)

SELECT COVAR_POP(weight, warehouse_inventory)
  FROM warehouse_13_tab

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```

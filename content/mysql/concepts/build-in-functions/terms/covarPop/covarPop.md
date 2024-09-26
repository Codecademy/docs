---
Title: 'MySQL: COVAR_POP() function' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Covariance built-in function comparing the population of two cells in a table.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Built-In Function'
  - 'MySQL'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Comparison'
  - 'Database'
  - 'MySQL'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-MySQL-course'
---

The **COVAR_POP** function is the way we get a full covariance in MySQL as opposed to the COVAR_SAMP function. This takes two variables
and returns the covariance in a decimal format. 

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

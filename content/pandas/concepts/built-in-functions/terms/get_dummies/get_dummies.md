---
Title: '.get_dummies()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Converts categorical variables to dummy (indicator) variables' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Machine Learning'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Data'
  - 'Encoding'
  - 'Pandas'
  - 'Scikit-learn'
  - 'Statistics'
  - 'Variable Types'
  - 'Variables'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'path/master-statistics-with-python'
  - 'path/data-scientist'
---

The **.get_dummies()** function creates dummy (indicator) variables from categorical variables. Each level of the categorical variable gets its own column - a dummy variable. The dummy variables take on the value "1" if the original categorical variable was that level or "0" if not. 

## Codebyte Example
```codebyte/python
import pandas as pd
import string

abcs = [i for i in string.ascii_lowercase]

abcs = pd.Series(abcs)

print(abcs + \n)

abcs = pd.get_dummies(abcs)

print(abcs)
```
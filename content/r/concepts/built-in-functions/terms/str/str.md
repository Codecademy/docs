---
Title: 'str()'
Description: 'Displays the internal structure of a data frame.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Data Structures'
CatalogContent:
  - 'learn-r'
  - 'paths/computer-science'
---

The **`str()`** function displays the internal structure of an object such as an array, list, matrix, factor, or [data frame](https://www.codecademy.com/resources/docs/r/data-frames).

## Syntax

```pseudo
str(object)
```

The `object` parameter is passed to the `str()` function to return a string representation that can be combined with other strings.

## Example

The following example uses a [CSV file](https://www.codecademy.com/resources/docs/r/csv-files) named `canines.csv` with the following information in it:

| First Name | Last Name | Age | Breed                     |
| ---------- | --------- | --- | ------------------------- |
| Max        | Lancaster | 18  | Australian Sheperd        |
| Bella      | Stone     | 4   | Yorkshire Terrier         |
| Luna       | Bae       | 2   | Golden Retriever          |
| Abe        | Thompson  | 10  | American Pit Bull Terrier |
| Teddy      | Keagan    | 6   | English Bull Dog          |

The following example converts the data into a data frame and then uses the `str()` function on it:

```r
# Read file
df <- read.csv("canines.csv")

# Display internal structure
str(df)
```

This returns the following:

```shell
'data.frame':  5 obs. of 4 variables:
 $ First.Name: chr  "Max" "Bella" "Luna" "Abe" ...
 $ Last.Name : chr  "Lancaster" "Stone" "Bae" "Thompson" ...
 $ Age       : int  18 4 2 10 6
 $ Breed     : chr  "Australian Sheperd" "Yorkshire Terrier"
               "Golden Retriever" "American Pit Bull Terrier" ...
```

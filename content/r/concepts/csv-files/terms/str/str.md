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

The `str()` function displays the internal structure of a data frame.

## Syntax

```pseudo
str(df)
```

- `df`: The data frame to call the function on.

## Example

Suppose there is a `canines.csv` file with the following information in it:
|First Name|Last Name|Age|Breed|
|----------|---------|---|-----|
|Max |Lancaster|18|Australian Sheperd|
|Bella |Stone |4|Yorkshire Terrier|
|Luna |Bae |2|Golden Retriever|
|Abe |Thompson |10|American Pit Bull Terrier|
|Teddy |Keagan |6|English Bull Dog|

The following uses the `str()` function on a dataframe:

```r
# Read in file
df <- read.csv("canines.csv")

# Display internal structure
str(df)
```

The above returns the following:

```shell
'data.frame':  5 obs. of 4 variables:
 $ First.Name: chr  "Max" "Bella" "Luna" "Abe" ...
 $ Last.Name : chr  "Lancaster" "Stone" "Bae" "Thompson" ...
 $ Age       : int  18 4 2 10 6
 $ Breed     : chr  "Australian Sheperd" "Yorkshire Terrier"
               "Golden Retriever" "American Pit Bull Terrier" ...
```

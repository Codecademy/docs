---
Title: 'One Hot Encoding'
Description: 'One hot encoding is a method of encoding categorical variables as binary vectors that can be more readily used by machine learning algorithms.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Science'
  - 'Deep Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/build-deep-learning-models-with-tensorflow'
---

In Data Science, **one hot encoding** is a method of encoding categorical variables as binary vectors that can be more readily used by [machine learning](https://www.codecademy.com/resources/docs/ai/machine-learning) [algorithms](https://www.codecademy.com/resources/docs/general/algorithm). Algorithms work with numbers such as `0` and `1`, not categorical values like `"Texas"` or `"bicycle"`. However, the data these algorithms are asked to analyze often have values that are encoded categorically. One hot encoding is a process by which those categorical values in the data can be translated into numbers that can be interpreted by those algorithms.

## Encoding Categorical Values

The process of one hot encoding is as follows:

1. Each possible value in the data being encoded is assigned a unique sequential integer value.
2. Each of those values is represented by a binary vector with a position for each integer value.
3. Each vector has a value of `1` in the position for its corresponding integer value, and a `0` elsewhere.
4. The categorical values in the data are replaced by the corresponding vector.

Depending on the implementation, the encoded values may be represented by actual vector data types, or they may be expanded as additional columns in the data.

## Example 1: Categories

Original data:

| Category | Value |
| :------: | :---: |
|    A     |  24   |
|    A     |  90   |
|    A     |  75   |
|    A     |  36   |
|    B     |  45   |
|    B     |  28   |
|    B     |  62   |
|    C     |  65   |
|    C     |  97   |

Assigning integer values to category values:

| Category | Integer Value |
| :------: | :-----------: |
|    A     |       0       |
|    B     |       1       |
|    C     |       2       |

Assigning vectors to values:

| Category | Integer Value | Vector    |
| :------: | :-----------: | --------- |
|    A     |       0       | \[1,0,0\] |
|    B     |       1       | \[0,1,0\] |
|    C     |       2       | \[0,0,1\] |

Applying the vector values as columns to the original data:

| Category | Value |  A  |  B  |  C  |
| :------: | :---: | :-: | :-: | :-: |
|    A     |  24   |  1  |  0  |  0  |
|    A     |  90   |  1  |  0  |  0  |
|    A     |  75   |  1  |  0  |  0  |
|    A     |  36   |  1  |  0  |  0  |
|    B     |  45   |  0  |  1  |  0  |
|    B     |  28   |  0  |  1  |  0  |
|    B     |  62   |  0  |  1  |  0  |
|    C     |  65   |  0  |  0  |  1  |
|    C     |  97   |  0  |  0  |  1  |

## Example 2: Colors

Original data:

| Color | Quantity |
| :---: | :------: |
|  Red  |    15    |
| Blue  |    22    |
| Green |    13    |
| Blue  |    30    |
|  Red  |    10    |

Assigning integer values:

| Color | Integer Value |
| :---: | :-----------: |
|  Red  |       0       |
| Blue  |       1       |
| Green |       2       |

Assigning vectors:

| Color | Integer Value | Vector  |
| :---: | :-----------: | ------- |
|  Red  |       0       | [1,0,0] |
| Blue  |       1       | [0,1,0] |
| Green |       2       | [0,0,1] |

Final encoded data:

| Color | Quantity | Red | Blue | Green |
| :---: | :------: | :-: | :--: | :---: |
|  Red  |    15    |  1  |  0   |   0   |
| Blue  |    22    |  0  |  1   |   0   |
| Green |    13    |  0  |  0   |   1   |
| Blue  |    30    |  0  |  1   |   0   |
|  Red  |    10    |  1  |  0   |   0   |

## Frequently Asked Questions

### 1. What do you mean by one hot encoding?

One hot encoding is a useful technique to convert categorical variables into numerical representations by assigning each unique category a binary vector, where one element is `1` and the rest of the elements are `0`.

### 2. What is one-hot and one-cold encoding?

- **One-hot**: Binary vector with `1` for the category, `0` elsewhere; no implied order.
- **One-cold**: Binary vector with `0` for the category, `1` elsewhere; indicates absence.
- **Example (A, B, C)**:
  - A → One-hot: `[1,0,0]`, One-cold: `[0,1,1]`
  - B → One-hot: `[0,1,0]`, One-cold: `[1,0,1]`
  - C → One-hot: `[0,0,1]`, One-cold: `[1,1,0]`

### 3. What is the difference between binary and one-hot encoding?

- **Binary encoding**: Represents categories as binary numbers; may imply order.
- **One-hot encoding**: Represents categories as independent binary vectors with a single `1`; no order implied.
- **Example (A, B, C)**:
  - Binary: A → `00`, B → `01`, C → `10`
  - One-hot: A → `[1,0,0]`, B → `[0,1,0]`, C → `[0,0,1]`

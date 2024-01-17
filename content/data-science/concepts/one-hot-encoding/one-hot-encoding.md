---
Title: 'One Hot Encoding'
Description: 'One hot encoding is a method of encoding categorical variables as binary vectors that can be more readily used by machine learning algorithms.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data Science'
  - 'Deep Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/build-deep-learning-models-with-tensorflow'
---

**One hot encoding** is a method of encoding categorical variables as binary vectors that can be more readily used by [machine learning](https://www.codecademy.com/resources/docs/ai/machine-learning) [algorithms](https://www.codecademy.com/resources/docs/general/algorithm). Algorithms work with numbers such as `0` and `1`, not categorical values like `"Texas"` or `"bicycle"`. However, the data these algorithms are asked to analyze often have values that are encoded categorically. One hot encoding is a process by which those categorical values in the data can be translated into numbers that can be interpreted by those algorithms.

## Encoding Categorical Values

The process of one hot encoding is as follows:

1. Each possible value in the data being encoded is assigned a unique sequential integer value.
2. Each of those values is represented by a binary vector with a position for each integer value.
3. Each vector has a value of `1` in the position for its corresponding integer value, and a `0` elsewhere.
4. The categorical values in the data are replaced by the corresponding vector.

Depending on the implementation, the encoded values may be represented by actual vector data types, or they may be expanded as additional columns in the data.

## Example

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

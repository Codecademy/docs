---
Title: 'One Hot Encoding'
Description: 'One hot encoding is a method of encoding categorical variables as binary vectors that can be more redily used by machine learning algorithms.'
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

**One hot encoding** is a method of encoding categorical variables as binary vectors that can be more redily used by machine learning algorithms. Algorithms work with numbers such as `0` and `1`, not categorical values like "Texas" or "bicycle." However, the data these algorithms are asked to analyze often have values that are encoded categorically. One hot encoding is a process by which those categorical values in the data can be translated into numbers that can be interpreted by those algorithms.

## Encoding Categorical Values

The process of one hot encoding is as follows:

- Each possible value in the data being encoded is assigned a unique sequential integer value.
- Each of those values is represented by a binary vector with a position for each integer value.
- Each vector has a value of `1` in the position for its corrisponding integer value, and a `0` elsewhere.
- The categorical values in the data are replaced by the corisponding vector.

Depending on the implementation, the encoded values my be represented by actual vector datatypes, or they may be expanded as additional columns in the data.

## Example

Original data:

Category | Value
---------|------
A | 24
A | 90
A | 75
A | 36
B | 45
B | 28
B | 62
C | 65
C | 97



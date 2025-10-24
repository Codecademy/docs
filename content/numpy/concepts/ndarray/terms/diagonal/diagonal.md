Title: '.diagonal()'
Description: 'Returns specified diagonals of an array, with options for offset and axis selection.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Arrays'
  - 'Linear Algebra'
  - 'Matrix Operations'
  - 'NumPy'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`.diagonal()`** method in NumPy extracts the **diagonal elements** of an array.  
It allows you to select diagonals with a specified offset and across specified axes in multi-dimensional arrays. The primary diagonal is the set of elements where the row and column indices are equal, but with `.diagonal()` you can also access diagonals above or below the main diagonal.

This method is widely used in **linear algebra**, **scientific computing**, and **data analysis**, for operations such as extracting the main diagonal of a matrix, computing trace, or analyzing multi-dimensional data structures.

---

## Syntax

```pseudo
ndarray.diagonal(offset=0, axis1=0, axis2=1)
```

## Example 1: Extracting the main diagonal of a 2D array
```py
import numpy as np

#Create a 2D array
array_2d = np.array([[1, 2, 3],
                     [4, 5, 6],
                     [7, 8, 9]])

#Extract the main diagonal
main_diag = array_2d.diagonal()
print("Original array:")
print(array_2d)
print("\nMain diagonal:", main_diag)

```
## Output:

Original array:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

Main diagonal: [1 5 9]


## Example 2: Extracting diagonals with an offset
```py
#Diagonal above the main
upper_diag = array_2d.diagonal(offset=1)
#Diagonal below the main
lower_diag = array_2d.diagonal(offset=-1)

print("Diagonal above main:", upper_diag)
print("Diagonal below main:", lower_diag)

```
## Output:

Diagonal above main: [2 6]
Diagonal below main: [4 8]


## Example 3: Using axis parameters in a 3D array
```py
#Create a 3D array
array_3d = np.arange(27).reshape(3,3,3)

#Extract diagonal along axis 1 and axis 2
diag_3d = array_3d.diagonal(axis1=1, axis2=2)
print("Original 3D array:")
print(array_3d)
print("\nDiagonals along axis1=1 and axis2=2:")
print(diag_3d)
```

## Output:

#Original 3D array:
[[[ 0  1  2]
  [ 3  4  5]
  [ 6  7  8]]

 [[ 9 10 11]
  [12 13 14]
  [15 16 17]]

 [[18 19 20]
  [21 22 23]
  [24 25 26]]]

Diagonals along axis1=1 and axis2=2:
[[ 0  4  8]
 [ 9 13 17]
 [18 22 26]]

## Codebyte Example: Computing Trace Using .diagonal()
```py
import numpy as np

#Create a 4x4 matrix
matrix = np.array([[1, 2, 3, 4],
                   [5, 6, 7, 8],
                   [9, 10, 11, 12],
                   [13, 14, 15, 16]])

#Extract main diagonal
diag_elements = matrix.diagonal()
print("Diagonal elements:", diag_elements)

#Compute trace (sum of diagonal)
trace = diag_elements.sum()
print("Trace of the matrix:", trace)

```
## Output:

Diagonal elements: [1 6 11 16]
Trace of the matrix: 34


<details>
<summary>1. What is the difference between `.diagonal()` and `np.diag()`?</summary>
<p>`.diagonal()` extracts diagonals from an existing array without copying the data for 2D arrays. `np.diag()` can either create a diagonal array from a 1D array or extract a diagonal from a 2D array, and it always returns a copy.</p> 
</details>

<details> 
<summary>2. Can `.diagonal()` handle multi-dimensional arrays?</summary>
<p>Yes, you can specify `axis1` and `axis2` to extract diagonals along different axes in N-dimensional arrays.</p> 
</details>

<details>
<summary>3. Does `.diagonal()` create a copy of the data?</summary> 
<p>For 2D arrays, `.diagonal()` returns a view, not a copy. For higher-dimensional arrays, the returned diagonal is a copy.</p>
</details> 

<details>
<summary>4. How do I extract diagonals above or below the main diagonal?</summary>
<p>Use the `offset` parameter. Positive values extract diagonals above the main diagonal, negative values extract diagonals below the main diagonal.
</p>
</details> 

<details> 
<summary>5. Can `.diagonal()` be used for trace computation?</summary> 
<p>Yes, extracting the main diagonal and summing the elements gives the trace of a matrix.</p> 
</details> ```
Title: "NumPy Random uniform()"
Subjects:
  - "Data Science"
  - "Computer Science"
Tags:
  - "NumPy"
  - "Random"
  - "Python"
  - "Probability"
Catalog Content:
  - "learn-python-3"
---

<h2>Definition</h2>

The <code>numpy.random.uniform()</code> function generates random floating-point numbers from a uniform distribution over a specified interval <code>[low, high)</code>.  
Every number within the range has an equal probability of being drawn.

---

<h2>Syntax</h2>

```python
numpy.random.uniform(low=0.0, high=1.0, size=None)
````

**Parameters:**

<ul>
<li><b>low</b> (<i>float</i>, optional): Lower boundary of the output interval (default is 0.0).</li>
<li><b>high</b> (<i>float</i>, optional): Upper boundary of the output interval (default is 1.0).</li>
<li><b>size</b> (<i>int</i> or <i>tuple of ints</i>, optional): Shape of the output array.</li>
</ul>

**Returns:**

<ul>
<li><b>ndarray</b> or <b>float</b> — Random samples drawn from the uniform distribution.</li>
</ul>

---

<h2>Example</h2>

```python
import numpy as np

# Generate a single random number between 0 and 1
random_num = np.random.uniform()
print(random_num)
```

**Output (example):**

```
0.72648159
```

---

<h2>Example 2</h2>

```python
import numpy as np

# Generate a 1D array of 5 random numbers between 2 and 10
arr = np.random.uniform(low=2, high=10, size=5)
print(arr)
```

**Output (example):**

```
[7.21698472 2.57190338 4.92433507 9.51208769 6.30384217]
```

---

<h2>Codebyte Example</h2>

```codebyte/python
import numpy as np

# Generate a 2x3 array of random floats between 2 and 5
arr = np.random.uniform(low=2, high=5, size=(2, 3))
print(arr)
```

---

<h2>Notes</h2>

<ul>
<li>The <code>uniform()</code> function draws samples from a continuous uniform distribution.</li>
<li>Use <code>numpy.random.seed()</code> for reproducibility of results.</li>
<li>If <code>size=None</code>, a single float is returned instead of an array.</li>
</ul>

---

<h2>Related Functions</h2>

<ul>
<li><code>numpy.random.randint()</code> — Generates random integers from a given range.</li>
<li><code>numpy.random.rand()</code> — Returns random values in a given shape.</li>
<li><code>numpy.random.normal()</code> — Draws random samples from a normal (Gaussian) distribution.</li>
</ul>

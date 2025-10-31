---
title: 'numpy.random.uniform()'
description: 'Generates random floating-point numbers from a uniform distribution over a specified interval.'
subjects:
  - Data Science
  - Computer Science
tags:
  - NumPy
  - Random
  - Python
  - Probability
catalog_content:
  - learn-python-3
  - numpy
---

<h2>Definition</h2>

<p>
The <code>numpy.random.uniform()</code> function generates random floating-point numbers drawn from a continuous uniform distribution over the half-open interval <code>[low, high)</code>. Every number within the range has an equal probability of being drawn.
</p>

---

<h2>Syntax</h2>

<pre><code class="language-python">
numpy.random.uniform(low=0.0, high=1.0, size=None)
</code></pre>

<h3>Parameters</h3>

<ul>
<li><b>low</b> (<i>float</i>, optional): Lower boundary of the output interval. Default is <code>0.0</code>.</li>
<li><b>high</b> (<i>float</i>, optional): Upper boundary of the output interval. Samples are drawn from <code>[low, high)</code>. Default is <code>1.0</code>.</li>
<li><b>size</b> (<i>int</i> or <i>tuple of ints</i>, optional): Output shape. If <code>None</code>, a single float is returned. If an integer, returns a 1-D array; if a tuple, returns an array with that shape.</li>
</ul>

<h3>Returns</h3>

<ul>
<li><b>float</b> or <b>ndarray</b> — A single float if <code>size=None</code>, otherwise an array of floats sampled from the uniform distribution.</li>
</ul>

---

<h2>Example 1 — Single sample</h2>

````python
import numpy as np

# Generate a single random number between 0 and 1
random_num = np.random.uniform()
print(random_num)
Output (example):

Copy code
0.72648159
<h2>Example 2 — 1D array</h2>
python
Copy code
import numpy as np

# Generate a 1D array of 5 random numbers between 2 and 10
arr = np.random.uniform(low=2, high=10, size=5)
print(arr)
Output (example):

csharp
Copy code
[7.21698472 2.57190338 4.92433507 9.51208769 6.30384217]
<h2>Codebyte Example</h2>
codebyte/python
Copy code
import numpy as np

# Create a reproducible Generator
rng = np.random.default_rng(seed=0)

# Generate a 2x3 array of uniform random floats in the range [2, 5)
arr = rng.uniform(low=2, high=5, size=(2, 3))
print("2x3 uniform random array:")
print(arr)
<h2>Notes</h2> <ul> <li>For reproducible results, prefer the <code>Generator</code> API (<code>np.random.default_rng(seed)</code>) over the legacy global RNG.</li> <li>If <code>size=None</code> (default), <code>uniform()</code> returns a scalar float; otherwise it returns an array.</li> <li>The distribution is continuous; any value in <code>[low, high)</code> is possible (with equal likelihood).</li> </ul>
<h2>Related Functions</h2> <ul> <li><code>numpy.random.randint()</code> — Generate random integers from a given range.</li> <li><code>numpy.random.rand()</code> — Generate random floats in <code>[0, 1)</code> with a given shape.</li> <li><code>numpy.random.normal()</code> — Draw samples from a normal (Gaussian) distribution.</li> </ul> ```
````

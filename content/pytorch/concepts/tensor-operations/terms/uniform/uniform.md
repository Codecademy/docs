---
Title: "numpy.random.uniform()"
Description: "Generates random floating-point numbers from a uniform distribution over a specified interval."
Subjects:
  - Data Science
  - Computer Science
Tags:
  - NumPy
  - Random
  - Python
  - Probability
CatalogContent:
  - learn-python-3
  - numpy
---

<h2>Definition</h2>

<p>
The <code>numpy.random.uniform()</code> function generates random floating-point numbers from a uniform distribution over a specified interval <code>[low, high)</code>. Every number within the range has an equal probability of being drawn.
</p>

<hr />

<h2>Syntax</h2>

<pre><code class="language-python">numpy.random.uniform(low=0.0, high=1.0, size=None)</code></pre>

<p><strong>Parameters:</strong></p>

<ul>
  <li><strong>low</strong> (<em>float</em>, optional): Lower boundary of the output interval (default is <code>0.0</code>).</li>
  <li><strong>high</strong> (<em>float</em>, optional): Upper boundary of the output interval (default is <code>1.0</code>).</li>
  <li><strong>size</strong> (<em>int</em> or <em>tuple of ints</em>, optional): Shape of the output array. If <code>None</code>, a single value is returned.</li>
</ul>

<p><strong>Returns:</strong></p>

<ul>
  <li><strong>ndarray</strong> or <strong>float</strong> — Random samples drawn from the uniform distribution.</li>
</ul>

<hr />

<h2>Example 1</h2>

<pre><code class="language-python">import numpy as np

# Generate a single random number between 0 and 1
random_num = np.random.uniform()
print(random_num)
</code></pre>

<p><strong>Output (example):</strong></p>

<pre><code>0.72648159</code></pre>

<hr />

<h2>Example 2</h2>

<pre><code class="language-python">import numpy as np

# Generate a 1D array of 5 random numbers between 2 and 10
arr = np.random.uniform(low=2, high=10, size=5)
print(arr)
</code></pre>

<p><strong>Output (example):</strong></p>

<pre><code>[7.21698472 2.57190338 4.92433507 9.51208769 6.30384217]</code></pre>

<hr />

<h2>Codebyte Example</h2>

<pre><code class="language-python">```codebyte/python
import numpy as np

# Generate a 2x3 array of random floats between 2 and 5
arr = np.random.uniform(low=2, high=5, size=(2, 3))
print(arr)
```</code></pre>

<hr />

<h2>Notes</h2>

<ul>
  <li>The <code>uniform()</code> function draws samples from a continuous uniform distribution.</li>
  <li>Use <code>numpy.random.seed()</code> (legacy) or <code>np.random.default_rng(seed)</code> for reproducibility.</li>
  <li>If <code>size=None</code>, a single float is returned instead of an array.</li>
</ul>

<hr />

<h2>Related Functions</h2>

<ul>
  <li><code>numpy.random.randint()</code> — Generates random integers from a given range.</li>
  <li><code>numpy.random.rand()</code> — Returns random values in a given shape.</li>
  <li><code>numpy.random.normal()</code> — Draws random samples from a normal (Gaussian) distribution.</li>
</ul>

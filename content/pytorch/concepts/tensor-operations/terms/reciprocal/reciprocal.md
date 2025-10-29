<h1>🔁 <code>.reciprocal()</code></h1>

<p>
The <code>.reciprocal()</code> method computes the reciprocal of every element in the input tensor, represented mathematically as 
<span style="font-family: monospace;">1/x</span>.
</p>

<hr />

<h2>📘 Introduction</h2>

<p>
The <code>.reciprocal()</code> method is an element-wise operation that calculates the reciprocal for each element in the tensor. 
Mathematically, for any value <em>x</em> in the tensor, the method returns <span style="font-family: monospace;">1/x</span>.
</p>

<p>
The method requires the tensor's data type to be a <strong>floating-point type</strong> (e.g., 
<code>torch.float32</code>, <code>torch.float64</code>).
If the tensor contains an element equal to zero, the reciprocal of that element will result in infinity (<code>inf</code>).
</p>

<p>
By default, <code>.reciprocal()</code> returns a new tensor. 
If you want to perform the operation <strong>in-place</strong> (modifying the original tensor), 
you should use the underscore version: <code>tensor_name.reciprocal_()</code>.
</p>

<hr />

<h2>⚙️ Syntax</h2>

<pre>
<code>tensor_name.reciprocal()</code>
</pre>

<p>
The method does not accept any arguments.
</p>

<hr />

<h2>💡 Example</h2>

<pre>
<code class="language-python">
import torch

# 1. Create a tensor of floating-point numbers
data_tensor = torch.tensor([2.0, 4.0, 0.5, 0.0])

print("Original Tensor:")
print(data_tensor)
# Output: tensor([2., 4., 0.5, 0.])

# 2. Compute the reciprocal
reciprocal_tensor = data_tensor.reciprocal()

print("\nReciprocal Tensor:")
print(reciprocal_tensor)
# Output: tensor([0.5000, 0.2500, 2.0000,    inf])
# Note: 1/0.0 results in 'inf' (infinity)
</code>
</pre>

<hr />

<h2>📎 Key Takeaways</h2>

<ul>
  <li>✅ The operation is performed <strong>element-wise</strong>.</li>
  <li>📦 The function returns a <strong>new tensor</strong> by default.</li>
  <li>⚙️ The input tensor must be of a <strong>floating-point data type</strong>.</li>
  <li>⚠️ The reciprocal of <code>0</code> is represented as <strong>positive infinity (inf)</strong>.</li>
</ul>

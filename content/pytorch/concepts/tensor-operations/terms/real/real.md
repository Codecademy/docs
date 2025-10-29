<h1><code>.real()</code></h1>

<p>
The <code>.real</code> attribute returns a view of the <strong>real part</strong> of a complex PyTorch tensor.
</p>

<h2>Introduction</h2>
<p>
In PyTorch, tensors can hold complex numbers, meaning they have both a <strong>real component</strong> and an <strong>imaginary component</strong>.
The <code>.real</code> attribute is used to access only the real component of every element within a complex-valued tensor.
</p>

<p>
The resulting tensor shares the same underlying memory storage as the original complex tensor.
This means that modifying the values in the real view will directly change the values in the original complex tensor.
</p>

<p>
The attribute is only available when the tensor's data type is a complex type (e.g., <code>torch.complex64</code> or <code>torch.complex128</code>).
</p>

<hr>

<h2>Syntax</h2>

<pre><code>tensor_name.real
</code></pre>

<p>
Where <code>tensor_name</code> must be a complex PyTorch tensor.
The returned tensor has the same shape as the original, but its dtype will be the corresponding real type
(e.g., <code>torch.float32</code> if the original was <code>torch.complex64</code>).
</p>

<hr>

<h2>Example</h2>

<pre><code class="language-python">import torch

# 1. Create a 2x2 complex tensor
# The values are (Real + Imaginary*i)
complex_tensor = torch.tensor([
    [1 + 2j, 3 + 4j],
    [5 + 6j, 7 + 8j]
])

print("Original Tensor:")
print(complex_tensor)

# 2. Access the real view
real_view = complex_tensor.real

print("\nReal Part View:")
print(real_view)

# 3. Modify a value in the real view
real_view[0, 0] = 99.0

print("\nOriginal Tensor after modification:")
print(complex_tensor)
</code></pre>

<hr>

<h2>Key Takeaways</h2>
<ul>
  <li><code>.real</code> returns a view — not a copy — of the real part of a complex tensor.</li>
  <li>Any modification to <code>.real</code> directly affects the original tensor.</li>
  <li>Only works for tensors with complex data types (<code>torch.complex64</code>, <code>torch.complex128</code>).</li>
</ul>

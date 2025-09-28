---
Title: 'The Title' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A brief description.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'A tag'
  - 'A second tag'
  - 'An nth tag'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

In PyTorch, the **.logaddexp2()** function calculates the logarithm of the sum of exponentiations of the [tensor](https://www.codecademy.com/resources/docs/pytorch/tensors) inputs in base-2. It obtains pointwise \( \log_{2}\!\left(2^{x}+2^{y}\right) \).

## Syntax

```pseudo
torch.logaddexp2(input,other,*,out=None)
```
- input ([Tensor](https://www.codecademy.com/resources/docs/pytorch/tensors)) - the input tensor
- other ([Tensor](https://www.codecademy.com/resources/docs/pytorch/tensors)) - the second input tensor
- out ([Tensor](https://www.codecademy.com/resources/docs/pytorch/tensors)) - the output tensor

## Example
```pseudo
import torch

# Example tensors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([0.5, 2.5, 1.5])
# Compute logaddexp2
result = torch.logaddexp2(x, y)
print(result)
```
The code will produce this output:
```pseudo
tensor([1.7716, 3.2716, 3.4368])
```
This code performs the operation result = \( \log_{2}\!\left(2^{x}+2^{y}\right) \) to the tensors x=[1.0, 2.0, 3.0] and y=[0.5, 2.5, 1.5]

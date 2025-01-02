---
Title: 'parallelizing-models' 
Description: 'Model parallelization is used to train models that require more memory than what is available on a single GPU.' 
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
  - 'Developer Tools'
Tags: 
  - 'Algorithms'
  - 'PyTorch'
  - 'Machine Learning'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

**Model parallelization** is used to train models that require more memory than what is available on a single graphic processing unit (GPU). This is also known as **FullyShardedDataParallel (FSDP)** in pyTorch.

The model is separated into parts (i.e. layers or modules) and assigned to different GPUs. The GPUs performs the computations simultaneously, allowing for faster processing of large models. The GPUs communicate with each other and share the data to ensure the data output from one GPU is used in another GPU as needed. 

## Setting up the environment
```py
import torch
import torch.nn as nn
```

## Subsection 2

[Text about subsection 2]

## Subsection n

[Text about subsection n]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```

---
Title: 'Parallelizing Models'
Description: 'Parallelizing Models in PyTorch allows the training of deep learning models that require more memory than a single GPU can provide.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Algorithms'
  - 'Machine Learning'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

**Model parallelization** in PyTorch allows the training of deep learning models that require more memory than a single GPU can provide. The model is divided into different parts (e.g., layers or modules), with each part assigned to a separate GPU. These GPUs perform computations simultaneously, speeding up the processing of large models. They communicate with each other and share data to ensure that the output from one GPU can be used by another when necessary.

## Syntax

To utilize model parallelization the model should be wrapped using the following syntax:

```shell
class ModelParallel(nn.Module):
    # Model definition goes here
```

## Example

The code demonstrates how to assign different layers of a neural network model to different GPUs for parallelizing models in PyTorch:

```py
import torch.nn as nn

# Define a model split across two GPUs
class ModelParallel(nn.Module):
    def __init__(self):
        super(ModelParallel, self).__init__()
        self.layer1 = nn.Linear(1000, 500).to('cuda:0')  # First GPU
        self.layer2 = nn.Linear(500, 100).to('cuda:1')   # Second GPU

    def forward(self, x):
        x = x.to('cuda:0')  # Input to first GPU
        x = self.layer1(x)
        x = x.to('cuda:1')  # Output of first layer to second GPU
        x = self.layer2(x)
        return x

model = ModelParallel()
x = torch.randn(64, 1000)
output = model(x)
```

The output of the above code would result in a tensor. The exact values would depend on the initialization of the model weights and the input data, but could be expected to look similar to the following output:

```shell
tensor([[ 0.1324, -0.2847,  ...,  0.5921],  # First sample in the batch
        [-0.0412,  0.4891,  ..., -0.2345],  # Second sample in the batch
        ...
        [ 0.2347, -0.1011,  ...,  0.4567]]) # 64 rows, each with 100 values
```

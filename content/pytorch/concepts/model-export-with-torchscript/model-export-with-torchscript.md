---
Title: 'Model Export with TorchScript'
Description: 'Convert PyTorch models to TorchScript for optimized deployment in non-Python environments like mobile and embedded systems.'
Subject: 
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deployment'
  - 'TorchScript'
  - 'Model Export'
  - 'PyTorch'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/data-science'
---

**TorchScript** is a PyTorch intermediate representation that allows models to be serialized and optimized for execution in resource-constrained environments like mobile devices, embedded systems, or C++ applications. It decouples models from Python dependencies while preserving their logic.

## Syntax

- **Scripting** (for models with dynamic control flow):

   ```pseudo
   scripted_model = torch.jit.script(model)  # Converts model to TorchScript
   scripted_model.save("model.pt")
   ```

- **Tracing** (for static models):

   ```pseudo
   traced_model = torch.jit.trace(model, example_input)  # Records operations via example input
   traced_model.save("model.pt")
   ```

- **Hybrid Approach** (script/trace specific submodules):

   ```pseudo
   @torch.jit.script
   def custom_function(x: torch.Tensor) -> torch.Tensor:
       return x * 2
   ```

## Example

### Scripting a Model with Conditional Logic

Export a model that uses `if` statements (unsupported by tracing):

```python
import torch

class DynamicModel(torch.nn.Module):
    def forward(self, x: torch.Tensor) -> torch.Tensor:
        if x.sum() > 0:
            return x * 2
        else:
            return x - 1

model = DynamicModel()
scripted_model = torch.jit.script(model)  # Handles dynamic control flow
scripted_model.save("dynamic_model.pt")
```

### Tracing a ResNet for Mobile Deployment

Convert a pretrained **ResNet** using tracing:

```python
import torch
import torchvision

model = torchvision.models.resnet18(weights="IMAGENET1K_V1").eval()

# Trace with example input
dummy_input = torch.rand(1, 3, 224, 224)
traced_model = torch.jit.trace(model, dummy_input)
traced_model.save("resnet18_traced.pt")
```

## Key Considerations to Make

- **Scripting vs Tracing**:

  - Use `torch.jit.script` for models with:
    - Loops/conditionals
    - Variable-length inputs
    - Non-tensor data dependencies
  - Use `torch.jit.trace` for static models (faster execution).

- **Limitations**:

  - TorchScript supports a subset of Python/PyTorch operations.
  - Avoid `**kwargs` or dynamic tensor shapes in traced models.

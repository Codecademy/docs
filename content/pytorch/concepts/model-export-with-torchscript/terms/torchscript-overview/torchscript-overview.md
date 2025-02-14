---
Title: 'TorchScript Overview'
Description: 'Serializes and optimizes PyTorch models for production deployment, enabling execution in high-performance environments without Python dependencies.'
Subjects:
  - 'Machine Learning'
  - 'AI'
Tags:
  - 'PyTorch'
  - 'Batch Processing'
  - 'DataLoader'
  - 'Neural Networks'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

**TorchScript** bridges the gap between PyTorch’s eager execution mode and optimized production deployment. It converts Python-based models into a statically typed, serialized format that can be loaded and executed in C++ environments without requiring Python dependencies.

TorchScript supports two conversion methods:

- **Scripting** (`torch.jit.script`) – Automatically converts a model to TorchScript by analyzing its structure and control flow.
- **Tracing** (`torch.jit.trace`) – Records operations from an example input, creating a TorchScript representation without modifying control flow logic.

By enabling efficient model execution, TorchScript facilitates deployment in high-performance environments such as mobile devices, embedded systems, and cloud services.

## Syntax

### Script Conversion

```pseudo
# Scripting
scripted_model = torch.jit.script(model, method_name=None)
```

- `model`: The PyTorch model/function to be scripted.
- `method_name` (Optional): String specifying which method to script (default: `forward`).

### Trace Conversion

```pseudo
# Tracing
traced_model = torch.jit.trace(model, example_inputs, optimize=True, strict=True)
```

- `model`: The PyTorch model/function to be traced.
- `example_inputs`: Example inputs that the model will be traced with.
- `optimize`(Boolean): Enables/disables optimizations (default: `True`).
- `strict`(Boolean): Enables/disables strict checking, ensuring operations match the recorded trace. (default: `True`).

### Saving a Model

```pseudo
# Save
scripted_model.save(f, _extra_files=None)
```

- `f`: File object or string containing a file name.
- `_extra_files`(Optional): A dictionary of filenames for content to save in the archive (default is `None`).

### Loading a Model

```pseudo
# Load
loaded_model = torch.jit.load(f, map_location=None, _extra_files=None)
```

- `f`: File object containing a TorchScript model.
- `map_location` (Optional): Specifies where to load the model (`cpu`/`cuda`).
- `_extra_files` (Optional): Dictionary to store deserialized extra files.

## Example

This example demonstrates how to create a simple neural network and convert it to TorchScript using both scripting and tracing methods. It then compares their outputs and saves the models for deployment, illustrating the TorchScript workflow:

```py
import torch
import torch.nn as nn

# Define a simple model
class SimpleModel(nn.Module):
  def __init__(self):
    super().__init__()
    self.fc = nn.Linear(10, 1)

  def forward(self, x):
    return torch.relu(self.fc(x))

# Create model and example input
model = SimpleModel()
example_input = torch.randn(5, 10)

# Convert to TorchScript using both methods
scripted_model = torch.jit.script(model)
traced_model = torch.jit.trace(model, example_input)

# Test both models
with torch.no_grad():
  script_output = scripted_model(example_input)
  trace_output = traced_model(example_input)

# Print model code and results
print("Scripted Model Code:\n", scripted_model.code)
print("\nOutputs equal:", torch.allclose(script_output, trace_output))

# Save models
scripted_model.save("scripted_model.pt")
traced_model.save("traced_model.pt")
```

The output of the above code will be:

```shell
 def forward(self,
    x: Tensor) -> Tensor:
  fc = self.fc
  return torch.relu((fc).forward(x, ))


Outputs equal: True
```

This indicates that the outputs from both the scripted and traced versions of the model are numerically equal.

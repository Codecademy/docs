---
Title: 'Model Export for Deployment'
Description: 'The process of serializing and packaging trained PyTorch models for use in production environments, enabling inference outside of training workflows.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Deployment'
  - 'Model Export'
  - 'PyTorch'
  - 'ONNX'
CatalogContent:
  - 'learn-pytorch'
  - 'paths/data-science'
---

**Model export** in PyTorch involves converting trained models into formats that can be loaded and executed in production systems. Common deployment targets include mobile devices, web servers, or edge devices using tools like **TorchScript**, **ONNX**, or **PyTorch’s** native serialization.

## Syntax

### Core Export Methods

1. **Native PyTorch (`.pt`/`.pth`):**

   ```pseudo
   torch.save(model.state_dict(), "model.pth")  # Saves model weights
   torch.save(model, "full_model.pt")  # Saves entire model (weights + architecture)
   ```

2. **TorchScript (for optimized inference):**

   ```pseudo
   scripted_model = torch.jit.script(model)    # Converts model to TorchScript
   scripted_model.save("model.pt")
   ```

3. **ONNX Export (for cross-framework compatibility):**

   ```pseudo
   torch.onnx.export(
    model,
    dummy_input,
    "model.onnx",
    input_names=["input"],
    output_names=["output"],
    dynamic_axes={"input": {0: "batch_size"}}
   )
   ```

## Example

### Exporting with TorchScript

Convert a trained model to TorchScript for deployment in C++/mobile:

```python
import torch
import torchvision

# Load a pretrained model
model = torchvision.models.resnet18(weights="IMAGENET1K_V1")
model.eval()

# Convert to TorchScript via scripting
scripted_model = torch.jit.script(model)
scripted_model.save("resnet18_scripted.pt")

# Convert via tracing (alternative method)
dummy_input = torch.rand(1, 3, 224, 224)
traced_model = torch.jit.trace(model, dummy_input)
traced_model.save("resnet18_traced.pt")
```

### Exporting to ONNX

Convert a model to ONNX format for use with TensorRT, OpenVINO, etc.:

```python
# Export to ONNX
dummy_input = torch.randn(1, 3, 224, 224)
torch.onnx.export(
    model,
    dummy_input,
    "resnet18.onnx",
    export_params=True,
    opset_version=17,
    do_constant_folding=True,
    input_names=["input"],
    output_names=["output"],
    dynamic_axes={"input": {0: "batch_size"}}
)
```

### Here are some Key Considerations to make

1. **State Dict vs. Full Model**

   - `torch.save(model.state_dict())` is preferred for resuming training.
   - Full-model serialization (`torch.save(model)`) may break across PyTorch versions.

2. **Device Compatibility**

   - Export models on the same device type (CPU/GPU).

3. **Custom Layers**

   - Register custom layers with `torch.jit.script` or define them in ONNX-compatible ways.

4. **Optimization Tools**
   - Use `torch.utils.mobile_optimizer` for mobile deployment or ONNX Runtime for inference acceleration.

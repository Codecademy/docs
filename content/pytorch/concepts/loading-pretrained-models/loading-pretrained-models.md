---
Title: Loading Pretrained Models
Description: 'A brief description.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects:
  - Machine Learning
Tags:
  - Machine Learning
  - Models
  - Neural Networks
  - Deep Learning
  - TensorFlow
  - PyTorch
  - Datasets
  - Scikit-learn
  - AI
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

**Pretrained models** are a foundational concept in machine learning, allowing developers and researchers to leverage models that have already been trained on extensive datasets. This approach accelerates development and improves accuracy by transferring knowledge from existing solutions to new tasks. In PyTorch, loading pretrained models is straightforward and provides access to many state-of-the-art models via the torchvision library and other community-supported sources.

This guide introduces the concept of loading pretrained models in PyTorch, explains the syntax, and provides an example to demonstrate its usage.

## Syntax

To load a pretrained model in PyTorch, use the following syntax:

```python
from torchvision import models

# Load a pretrained model
model = models.<model_name>(pretrained=True)
```

- `<model_name>`: Replace this with the desired model name (e.g., `resnet18`, `vgg16`).
- `pretrained=True`: Specifies that the model should load pretrained weights.

## Example

### Using a Pretrained ResNet-18 for Inference

This example demonstrates loading a pretrained ResNet-18 model and using it for image classification.

```python
import torch
from torchvision import models, transforms
from PIL import Image

# Load the pretrained ResNet-18 model
model = models.resnet18(pretrained=True)
model.eval()  # Set the model to evaluation mode

# Define a transform for preprocessing the image
preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# Load an image
image_path = "path/to/your/image.jpg"
image = Image.open(image_path).convert("RGB")
input_tensor = preprocess(image).unsqueeze(0)  # Add batch dimension

# Perform inference
with torch.no_grad():
    output = model(input_tensor)

# Get the predicted class
predicted_class = torch.argmax(output[0]).item()
print(f"Predicted Class: {predicted_class}")
```

### Fine-Tuning a Pretrained Model

Here is an example of modifying a pretrained ResNet-18 model for a custom classification task:

```python
import torch.nn as nn

# Load pretrained model
model = models.resnet18(pretrained=True)

# Modify the final fully connected layer to match the number of output classes
num_classes = 10  # Adjust based on your dataset
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Define loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# The model is now ready for training on your dataset
```

## Additional Notes

- **Customization**: Pretrained models can be fine-tuned by freezing certain layers and updating only the desired ones.
- **Compatibility**: Ensure the input data format matches the model's expected input dimensions and preprocessing steps.

For a comprehensive list of available pretrained models, visit the [PyTorch model documentation](https://pytorch.org/vision/stable/models.html).

## Conclusion

Loading pretrained models in PyTorch is a powerful technique to accelerate development and improve performance for deep learning tasks. With PyTorch's extensive model library and ease of use, pretrained models are accessible for various applications, from image classification to object detection and beyond.

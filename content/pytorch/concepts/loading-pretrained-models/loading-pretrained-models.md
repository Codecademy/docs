---
Title: 'Loading Pre-trained Models'
Description: 'Initializes a model architecture with pre-trained weights learned from a large dataset, enabling transfer learning or direct inference.'
Subjects:
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Datasets'
  - 'Deep Learning'
  - 'Machine Learning'
  - 'Models'
  - 'Neural Networks'
  - 'PyTorch'
  - 'Scikit-learn'
  - 'TensorFlow'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Loading pre-trained models** is a foundational process in machine learning that enables developers and researchers to utilize models already trained on extensive datasets. This practice speeds development and enhances accuracy by reusing learned features from existing solutions for new tasks. In PyTorch, loading pre-trained models is simple and accessible, offering a range of state-of-the-art models through libraries like `torchvision` and other community-contributed sources.

## Syntax

To load a pretrained model in PyTorch, use the following syntax:

```pseudo
from torchvision import models

# Load a pretrained model
model = models.<model_name>(pretrained=True)
```

- `<model_name>`: The name of the model to load (e.g., `resnet18`, `vgg16`, `mobilenet_v2`, etc.). It must be a valid model name from the `torchvision.models` library.
- `pretrained`: If `True`, the function loads a model initialized with weights pre-trained on the ImageNet dataset. If `False`, it loads a model with random weights.

## Example

### Using a Pretrained ResNet-18 for Inference

This example demonstrates how to load a pre-trained ResNet-18 model and use it for image classification:

```py
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

The following example shows how to modify a pre-trained ResNet-18 model for a custom classification task:

```py
import torch.nn as nn
from torchvision import models

# Load the pretrained ResNet-18 model
model = models.resnet18(pretrained=True)

# Modify the final fully connected layer to match the number of output classes
num_classes = 10  # Replace with the number of classes in your custom dataset
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Define loss and optimizer
criterion = nn.CrossEntropyLoss()              # Loss function for classification
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)  # Optimizer for training

# The model is now ready for fine-tuning on your dataset
```

## Additional Notes

- **Customization**: Pretrained models can be fine-tuned by freezing specific layers (to retain learned features) and updating only the layers relevant to your task.
- **Compatibility**: Ensure that the input data format, including dimensions and preprocessing steps, aligns with the model's requirements (e.g., resizing, normalization).

Loading pretrained models in PyTorch is an effective technique to accelerate development and enhance performance in deep learning tasks. PyTorch's extensive model library and user-friendly implementation make pretrained models accessible for various applications, including image classification, object detection, and more.

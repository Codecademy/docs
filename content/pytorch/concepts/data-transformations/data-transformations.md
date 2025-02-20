---
Title: 'Data Transformations'
Description: 'Data transformation in PyTorch involves manipulating datasets into the appropriate format for model training, improving performance and accuracy.'
Subjects:
  - 'AI'
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Neural Networks'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'py-torch-for-classification'
---

**Data transformation** in PyTorch is an essential process for preparing datasets before feeding them into machine learning models. This process includes a range of techniques that manipulate the raw data into formats that are more suitable for training, testing, and validation. Data transformation ensures that the model receives data in a standardized way, which can improve training efficiency and model performance.

## Common Data Transformations in PyTorch

- **Normalization and Standardization:** These transformations adjust the data scale so that each feature contributes equally during training. Normalization rescales the data between a defined range (e.g., 0 to 1), while standardization centers the data around zero with unit variance.
- **Resizing Images:** When dealing with image data, it's important to ensure all images have the same size. Using transformations like `Resize` ensures consistency across images.
- **Augmentation:** Data augmentation techniques like rotation, flipping, and cropping introduce variability into the dataset, helping prevent overfitting and improving the model's generalization.
- **Tensor Conversion:** PyTorch models expect data to be in tensor format, so transforming raw data (e.g., images, text) into tensors using `torch.tensor()` is a crucial step.

## Syntax

Here’s the syntax for applying transformations using `torchvision.transforms.v2` in PyTorch:

```pseudo
import torch
from torchvision.transforms import v2

# Define transformation pipeline
transform = v2.Compose([
    v2.Resize((height, width)),             # Resize image
    v2.RandomHorizontalFlip(p=probability), # Apply horizontal flip with probability
    v2.ToDtype(torch.float32, scale=True),  # Convert to float32 and normalize to [0,1]
    v2.Normalize(mean=[R, G, B], std=[R, G, B])  # Normalize image
])

# Apply transformations
transformed_image = transform(image_tensor)
```

- `v2.Compose([transformations])`: Combines multiple transformations into one pipeline.
- `v2.Resize((height, width))`: Resizes the image.
- `v2.RandomHorizontalFlip(p=probability)` Flips the image horizontally with a given probability.
- `v2.ToDtype(torch.float32, scale=True)`: Converts data type and scales pixel values to [0,1].
- `v2.Normalize(mean=[R, G, B], std=[R, G, B])`: Normalizes pixel values.

## Example

Here's a basic example using PyTorch's `torchvision.transforms` to perform common transformations:

```py
import torch
from torchvision import transforms
from PIL import Image

# Define a series of transformations
transform = transforms.Compose([
    transforms.Resize((128, 128)),         # Resize image to 128x128
    transforms.ToTensor(),                 # Convert to tensor
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # Normalize
])

# Load an image
image = Image.open("image.jpg").convert("RGB")

# Apply transformations
image_transformed = transform(image)

# Now the image is ready to be fed into the model
```

In this example, the image is resized to _128x128_ pixels, converted to a tensor, and normalized to the standard mean and standard deviation values used in many pre-trained models.

## Why Use Data Transformation?

Proper data transformations are critical for model accuracy and efficiency. They:

- Enhance convergence speed by scaling data appropriately.
- Help models generalize better by introducing variety through augmentation.
- Ensure compatibility with PyTorch models by converting data into the required tensor format.

In PyTorch, the flexibility provided by `transforms.Compose()` allows developers to chain multiple transformations in a clear and concise manner, making it easier to manage data preprocessing.

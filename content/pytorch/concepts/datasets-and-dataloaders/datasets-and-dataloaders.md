---
Title: 'Datasets and DataLoaders'
Description: 'An overview of PyTorch Datasets and DataLoaders, including how to create custom datasets and use DataLoader for efficient data loading and batching.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Datasets'
  - 'DataLoader'
  - 'Data'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

PyTorch provides two essential data handling abstractions: `torch.utils.data.Dataset` and `torch.utils.data.DataLoader`. These tools are crucial for efficient data management and preprocessing during model training.

## Creating a Custom Dataset

To create a custom dataset in PyTorch, `torch.utils.data.Dataset` should be inherited and the following methods should be overridden:

- `__init__(self)`: Initializes the dataset, typically loading data into memory or setting up file paths.
- `__len__(self)`: Returns the total number of samples in the dataset.
- `__getitem__(self, idx)`: Retrieves a sample and its corresponding label at the specified index `idx`.

### Example

Here is an example of a custom dataset class creation:

```py
import torch
from torch.utils.data import Dataset

class CustomDataset(Dataset):
  def __init__(self, data, labels):
    self.data = data
    self.labels = labels

  def __len__(self):
    return len(self.data)

  def __getitem__(self, idx):
    sample = self.data[idx]
    label = self.labels[idx]
    return sample, label
```

## DataLoader

The `DataLoader` class in PyTorch is used to load data in batches, which is essential for training [neural networks](https://www.codecademy.com/resources/docs/ai/neural-networks) efficiently. It also provides options for shuffling the data and loading it in parallel using multiprocessing.

### Example

Here is an example of using the `DataLoader` class:

```py
from torch.utils.data import DataLoader

# Assuming custom_dataset is an instance of CustomDataset
data_loader = DataLoader(dataset=custom_dataset, batch_size=4, shuffle=True)

for batch in data_loader:
  samples, labels = batch
  # Training code here
```

## Built-in Datasets

PyTorch also provides several built-in datasets that can be used with `DataLoader` without needing to define a custom dataset class. These are available in libraries such as `torchvision`, `torchaudio`, and `torchtext`.

### Example

Here is an example of loading a built-in dataset:

```py
from torchvision import datasets, transforms

transform = transforms.Compose([
  transforms.ToTensor(),
  transforms.Normalize((0.5,), (0.5,))
])

train_dataset = datasets.FashionMNIST(root='data', train=True, download=True, transform=transform)
train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
```

---
Title: 'Handling Batches'
Description: 'Batch handling is the process of organizing data into fixed-size groups for efficient computation and processing in PyTorch.'
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

**Handling batches** is an essential practice in PyTorch for managing and processing large datasets efficiently. PyTorch simplifies batch handling through the `DataLoader` class. Batch processing groups data samples into fixed-sized subsets, enabling parallel computation, faster training, and better use of GPU resources. This technique is especially critical for deep learning workflows, where training on entire datasets at once is often computationally infeasible.

## Syntax

Below is the general syntax for setting up a `DataLoader`:

```pseudo
from torch.utils.data import DataLoader, Dataset

# Define a custom dataset
class CustomDataset(Dataset):
  def __init__(self, data, labels):
    self.data = data
    self.labels = labels

  def __len__(self):
    return len(self.data)

  def __getitem__(self, idx):
    return self.data[idx], self.labels[idx]

# Instantiate the dataset
dataset = CustomDataset(data=[[1, 2], [3, 4], [5, 6]], labels=[0, 1, 0])

# Create a DataLoader for batch processing
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)
```

- `batch_size`: The number of samples in each batch.
- `shuffle`: Randomizes the order of data each epoch, ensuring better model generalization.
- `num_workers` (Optional): Specifies the number of subprocesses for data loading to speed up training.

## Example

Here is an example that demonstrates how to iterate through batches using `DataLoader`. This code defines a dataset, initializes the DataLoader, and processes the data in batches:

```py
from torch.utils.data import Dataset, DataLoader

# Define a custom dataset with temperature readings and weather conditions
class WeatherDataset(Dataset):
  def __init__(self):
    # Simple weather data: (temperature, is_sunny)
    self.data = [
      (20, 1), (25, 1), (18, 0), (22, 1),
      (17, 0), (23, 1), (19, 0), (21, 1)
    ]

  def __len__(self):
    return len(self.data)

  def __getitem__(self, idx):
    return self.data[idx]

# Create dataset and DataLoader
dataset = WeatherDataset()
dataloader = DataLoader(dataset, batch_size=3, shuffle=True)

# Process batches
for batch_idx, batch in enumerate(dataloader):
  print(f"Batch {batch_idx + 1}")
  print("Temperatures:", [temp.item() for temp in batch[0]])
  print("Weather (1=sunny, 0=cloudy):", [w.item() for w in batch[1]])
  print()
```

The output of the above code will be:

```shell
Batch 1
Temperatures: [17, 23, 21]
Weather (1=sunny, 0=cloudy): [0, 1, 1]

Batch 2
Temperatures: [20, 25, 19]
Weather (1=sunny, 0=cloudy): [1, 1, 0]

Batch 3
Temperatures: [18, 22]
Weather (1=sunny, 0=cloudy): [0, 1]
```

> **Note:** The output order may vary, due to `shuffle=True` randomizing the order of the data.

In the above example, three processes are used:

1. **Dataset Definition**: A custom dataset is defined to hold the data and labels.
2. **DataLoader Initialization**: The dataset is passed to the `DataLoader`, along with parameters like `batch_size` and `shuffle`.
3. **Batch Iteration**: A `for` loop retrieves each batch, containing input data and corresponding labels.

This example effectively showcases how PyTorch organizes data into batches and simplifies processing, making it a foundational tool for machine learning workflows.

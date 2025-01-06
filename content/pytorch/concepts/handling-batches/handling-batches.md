---
Title: 'Handling Batches'
Description: 'Learn how to efficiently process data in PyTorch using batch handling techniques.'
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

**Handling batches** is an essential practice in **PyTorch** for managing and processing large datasets efficiently. Batch processing groups data samples into fixed-sized subsets, enabling parallel computation, faster training, and better use of GPU resources. This technique is especially critical for deep learning workflows, where training on entire datasets at once is often computationally infeasible.

## Syntax

PyTorch simplifies batch handling through the `DataLoader` class. Below is the general syntax for setting up a `DataLoader`:

```py
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

### Key Parameters
- **`batch_size`**: The number of samples in each batch.
- **`shuffle`**: Randomizes the order of data each epoch, ensuring better model generalization.
- **`num_workers`** (optional): Specifies the number of subprocesses for data loading to speed up training.

## Example

Here is an example that demonstrates how to iterate through batches using `DataLoader`:

```py
for batch_idx, (inputs, labels) in enumerate(dataloader):
    print(f"Batch {batch_idx + 1}")
    print("Inputs:", inputs)
    print("Labels:", labels)
```

### Expected Output

```shell
Batch 1
Inputs: tensor([[3, 4],
                [1, 2]])
Labels: tensor([1, 0])

Batch 2
Inputs: tensor([[5, 6]])
Labels: tensor([0])
```

> **Note:** The output order may vary due to `shuffle=True`.

### Explanation

1. **Dataset Definition**: A custom dataset is defined to hold the data and labels.
2. **DataLoader Initialization**: The dataset is passed to the `DataLoader`, along with parameters like `batch_size` and `shuffle`.
3. **Batch Iteration**: A `for` loop retrieves each batch, containing input data and corresponding labels.

## Codebyte Example

Below is a runnable Codebyte demonstrating the use of `DataLoader` for batch processing in PyTorch:

```codebyte/python
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

# Create dataset and DataLoader
dataset = CustomDataset(data=[[1, 2], [3, 4], [5, 6]], labels=[0, 1, 0])
dataloader = DataLoader(dataset, batch_size=2, shuffle=True)

# Iterate over batches
for batch_idx, (inputs, labels) in enumerate(dataloader):
    print(f"Batch {batch_idx + 1}")
    print("Inputs:", inputs)
    print("Labels:", labels)
```

This example effectively showcases how PyTorch organizes data into batches and simplifies processing, making it a foundational tool for machine learning workflows.
---
Title: 'Distributed Data Parallelism'
Description: 'An overview of distributed data parallelism in PyTorch.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'PyTorch'
  - 'Data'
  - 'Data Parallelism'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

## Introduction to Distributed Data Parallelism

Distributed Data Parallelism (DDP) in PyTorch is a module that enables users to efficiently train models across multiple GPUs and machines. By splitting the training process across multiple machines, DDP helps reduce training time and facilitates scaling to larger models and datasets. It achieves parallelism by splitting the input data into smaller chunks, processing them on different GPUs, and aggregating results for updates. Compared to `DataParallel`, DDP offers better performance and scalability by minimising device communication overhead.

### Key Features

- High performance: Efficient communication using NVIDIA Collective Communications Library (NCCL) or Gloo backend (for Windows platforms).
- Fault tolerance: Handles errors during distributed training.
- Scalability: Suitable for multi-node, multi-GPU setups.

## Syntax

To use DDP, a distributed process group needs to be initialised and wrapped to a model with `torch.nn.parallel.DistributedDataParallel`.

```py
import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

# Set up environment variables
os.environ['MASTER_ADDR'] = 'localhost'
os.environ['MASTER_PORT'] = '8000'

# Initialise the process group
dist.init_process_group(backend="nccl", init_method="env://", world_size=4, rank=0)

# Wrap the model with DDP
model = torch.nn.Linear(10, 10).cuda()
model = DDP(model)
```

- `backend`: This is optional and by default, a `gloo` and `nccl` backend will be created.
- `init_method`: This is optional as well and the default is `env://`.

### Required Environment Variables

- `WORLD_SIZE`: The total number of processes.
- `RANK`: Rank of the current process and must be between 0 and WORLD_SIZE - 1.
- `MASTER_ADDR`: The address of the master node.
- `MASTER_PORT`: The port of the master node.

## Example

The following example demonstrates the use of DDP for distributed training:

```py
import os
import torch
import torch.nn as nn
import torch.optim as optim
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

# Create a function to set up the initialisation process
def setup(rank, world_size):
    os.environ['MASTER_ADDR'] = 'localhost'
    os.environ['MASTER_PORT'] = '8000'
    dist.init_process("nccl", rank=rank, world_size=world_size)

# All resources allocated to the process group are released after process is complete
def cleanup():
    dist.destroy_process_group()

def main():
    setup(0, 4)

    # Model and data
    model = nn.Linear(10, 10).cuda()
    ddp_model = DDP(model)
    optimiser = optim.SGD(ddp_model.parameters(), lr=0.01)

    # Dummy data and labels
    data = torch.randn(20, 10).cuda()
    labels = torch.randn(20, 10).cuda()

    # Training
    for _ in range(10):
        optimiser.zero_grad()
        outputs = ddp_model(data)
        loss = nn.MSELoss()(outputs, labels)
        loss.backward()
        optimiser.step()

    cleanup()

if __name__ == "__main__":
    main()
```

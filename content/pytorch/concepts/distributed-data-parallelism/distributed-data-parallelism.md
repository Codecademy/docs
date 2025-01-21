---
Title: 'Distributed Data Parallelism'
Description: 'Enables users to efficiently train models across multiple GPUs and machines.'
Subjects:
  - 'Data Science'
  - 'Machine Learning'
Tags:
  - 'Data'
  - 'Data Parallelism'
  - 'PyTorch'
CatalogContent:
  - 'intro-to-py-torch-and-neural-networks'
  - 'paths/build-a-machine-learning-model'
---

**Distributed Data Parallelism (DDP)** in PyTorch is a module that enables users to train models across multiple GPUs and machines efficiently. By splitting the training process across multiple machines, DDP helps reduce training time and facilitates scaling to larger models and datasets.
DDP achieves parallelism by partitioning input data into smaller chunks, processing them on multiple GPUs, and aggregating the results for updates. Compared to `DataParallel`, DDP offers better performance and scalability by minimizing device communication overhead.

## Key Features

- **High performance**: Enables efficient communication using _NVIDIA Collective Communications Library (NCCL)_ or _Gloo backend_ (for Windows platforms).
- **Fault tolerance**: Provides mechanisms to handle errors during distributed training.
- **Scalability**: Designed for seamless scaling in multi-node and multi-GPU environments.

## Syntax

To use DDP, a distributed process group needs to be initialised and wrapped to a model with `torch.nn.parallel.DistributedDataParallel`.

```pseudo
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

- `backend` (Optional): Specifies the backend for distributed communication.
  - `nccl` (NVIDIA Collective Communications Library):
    - Optimized for NVIDIA GPUs.
    - Supports high-performance GPU communication using CUDA.
    - Preferred choice for GPU-based distributed training.
  - `gloo`:
    - A cross-platform backend.
    - Used for CPU-based training or on systems without GPUs.
- `init_method` (Optional): Specifies the method for initializing the process group.
  - `env://`:
    - Uses environment variables to initialize the process group.
    - Simple and commonly used.
  - `file://<path-to-file>`:
    - Uses a shared file to store initialization information.
    - Useful for setups where environment variables aren't feasible.
  - `tcp://<ip>:<port>`:
    - Uses a TCP address for initialization.
    - Typically used in manual multi-node setups.

### Required Environment Variables

- `WORLD_SIZE`: Defines the total number of processes participating in the distributed training.
- `RANK`: Specifies the rank (unique ID) of the current process within the group and must be between `0` and `WORLD_SIZE - 1`.
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
    dist.init_process_group("nccl", rank=rank, world_size=world_size)

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

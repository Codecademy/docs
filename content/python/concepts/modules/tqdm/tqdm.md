---
Title: 'tqdm'
Description: 'A module that allows the generation of progress bars in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Libraries'
  - 'Modules'
  - 'Scope'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`tqdm`** module is a library that allows the generation of progress bars in Python. The name is derived from the Arabic _"taqaddum"_, which translates as "progress." It is designed to have minimal overhead, using algorithms to predict remaining time and to skip unnecessary iteration displays. It has about a 60ns overhead per iteration whereas other progress bar implementations can run a 800ns overhead per iteration. `tqdm` does not require any dependencies. 

> **Note:** `tqdm` does require running in an environment that supports carrage return (`\r`) and line feed (`\n`) control characters.

## Installation

`tqdm` can be installed with the following:

```shell
pip install tqdm
```

## Example

The most basic use of `tqdm` is to wrap `tqdm()` around any iterable.

```py
from tqdm import tqdm
from time import sleep

total = 0
for num in tqdm([1, 2, 3, 4]):
    sleep(0.25)
    total = total + num

print("done")
```

This results in output like the following:

![tqdm Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/tqdm.gif)


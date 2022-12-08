---
Title: 'tqdm'
Description: 'A module that allows the generation of progress bars in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Command Line'
  - 'Libraries'
  - 'Modules'
  - 'Scope'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`tqdm`** module allows for the generation of progress bars in Python. The name is derived from the Arabic word, "taqaddum," which translates as "progress." It is designed to have minimal overhead, using algorithms to predict the remaining time and to skip unnecessary iteration displays. It has about a 60ns (nanoseconds) overhead per iteration whereas other progress bar implementations can run an 800ns overhead per iteration. `tqdm` does not require any dependencies.

> **Note:** `tqdm` requires an environment that supports carriage return (`\r`) and line feed (`\n`) control characters.

## Installation

`tqdm` can be installed with the following [pip](https://www.codecademy.com/resources/docs/python/pip) command:

```shell
pip install tqdm
```

## Example

The most straightforward way to use `tqdm` is to wrap the `tqdm()` function around any [iterable](https://www.codecademy.com/resources/docs/python/iterators):

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

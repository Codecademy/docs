---
Title: 'Threading'
Description: 'The threading module allows multiple threads of execution to take place in a Python program.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Async Await'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The `threading` module allows multiple threads of execution to take place in a Python program.

While threads may appear to run simultaneously, only one thread can be executed at a time. This is enforced by Python's [global interpreter lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock).

Threading is helpful when working with tasks that are I/O bound. This includes web-oriented tasks like scraping or downloading files.

## Syntax

```pseudo
import threading
```

The `threading` module must first be imported before thread constants can be created and their methods can be used.

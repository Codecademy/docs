---
Title: '.local()'
Description: 'Returns a local thread object with data that is specific to that thread.'
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

The `.local()` method returns a local thread object with data that is specific to that thread.

## Syntax

```pseudo
threading.local()
```

No parameters are used in the `.local()` method.

## Example

Additionally, the object returned by `.local()` can be assigned to a variable, which is then stored in memory:

```pseudo
import threading

local_thread = threading.local()

print(local_thread)
```

The output would look like this:

```shell
<_thread._local object at 0x7fde6ae24200>
```

## Codebyte Example

Data can be locally stored as a property in a specific thread, as shown in the example below:

```codebyte/python
import threading

local_1 = threading.local()
local_2 = threading.local()

local_1.x = 1
local_2.x = 2

print(local_1.x)
print(local_2.x)
```

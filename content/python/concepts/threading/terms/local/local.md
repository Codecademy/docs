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

The `.local()` method returns a local thread object with data that is specific to that thread. This data can be anything from arbitrary numbers to session-specific information like usernames.

## Syntax

```pseudo
threading.local()
```

No parameters are used in the `.local()` method.

## Example

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

The output would look like this:

```shell
1
2
```

## Codebyte Example

Additionally, the object returned by `.local()` can be assigned to a variable, which is then stored in memory. Any stored data can be found in the local thread's predefined `__dict__` attribute:

```codebyte/python
import threading

local_user_session = threading.local()

local_user_session.username = 'Code Ninja'
local_user_session.userID = 82011

print(local_user_session.__dict__)
```

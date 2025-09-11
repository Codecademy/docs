---
Title: 'UserDict'
Description: 'A wrapper class from collections that allows creating customized dictionary-like objects by subclassing it instead of dict.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Classes'
  - 'Dictionary'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In Python, **`UserDict`** is a class in the `collections` module that provides a wrapper around dictionary objects. It allows creating custom dictionary-like classes by extending `UserDict` and overriding its methods, making it useful for building specialized dictionaries with additional functionality or behavior.

## Syntax

```pseudo
collections.UserDict([initialdata])
```

**Parameters:**

- `initialdata`: The `UserDict` constructor can take an optional dictionary or mapping object to initialize the data.

**Return value:**

Returns a dictionary-like object that can be subclassed to customize behavior.

## Example 1: Subclassing `UserDict`

In this example, a custom class is created by subclassing `UserDict` and overriding common dictionary methods. This shows how to extend and customize dictionary behavior:

```py
from collections import UserDict

class MyUserDict(UserDict):
  def __setitem__(self, key, value):
    print(f"Setting {key} = {value}")
    super().__setitem__(key, value)

  def __getitem__(self, key):
    print(f"Getting {key}")
    return super().__getitem__(key)

d = MyUserDict()
d["x"] = 42
print(d["x"])
```

The output is:

```shell
Setting x = 42
Getting x
42
```

## Example 2: Basic Wrapper Usage

In this example, `UserDict` is used directly to wrap a dictionary. The `.data` attribute exposes the underlying dictionary object:

```py
from collections import UserDict

d = UserDict({"a": 1})
d["b"] = 2
print(d)
print(d.data)
```

The output is:

```shell
UserDict({'a': 1, 'b': 2})
{'a': 1, 'b': 2}
```

## Example 3: Logging on Set/Delete

In this example, dictionary modifications are logged by overriding `__setitem__` and `__delitem__`:

```py
from collections import UserDict

class LoggingDict(UserDict):
  def __setitem__(self, key, value):
    print(f"SET {key!r} = {value!r}")
    super().__setitem__(key, value)

  def __delitem__(self, key):
    print(f"DEL {key!r}")
    super().__delitem__(key)

d = LoggingDict()
d["name"] = "Aris"
del d["name"]
```

The output is:

```shell
SET 'name' = 'Aris'
DEL 'name'
```

## Example 4: Case-Insensitive Keys

In this example, keys are treated case-insensitively by normalizing them to lowercase before storing or retrieving:

```py
from collections import UserDict

class CaseInsensitiveDict(UserDict):
  def _key(self, key):
    return key.lower() if isinstance(key, str) else key

  def __setitem__(self, key, value):
    super().__setitem__(self._key(key), value)

  def __getitem__(self, key):
    return super().__getitem__(self._key(key))

d = CaseInsensitiveDict()
d["Name"] = "Mamta"
print(d["name"])
print(d["NAME"])
```

The output is:

```shell
Mamta
Mamta
```

## Codebyte Example: Default-Like Behavior

In this example, a default factory is added, similar to `collections.defaultdict`, so missing keys automatically get initialized:

```py
from collections import UserDict

class DefaultUserDict(UserDict):
  def __init__(self, default_factory=None, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.default_factory = default_factory

  def __missing__(self, key):
    if self.default_factory is None:
      raise KeyError(key)
    self[key] = self.default_factory()
    return self[key]

d = DefaultUserDict(list)
d["a"].append(10)
print(d)
```

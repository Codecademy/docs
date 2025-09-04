---
Title: 'userdict'
Description: 'A wrapper around dictionary objects for easier dict subclassing.'
Subjects:
- 
In Python, **userdict** is a class in the collections module that provides a wrapper around dictionary objects. It allows users to create custom dictionary-like classes by extending the userdict class and overriding its methods. This can be useful for creating specialized dictionaries with additional functionality or behavior.

## Syntax

```pseudo
from collections import UserDict

class MyUserDict(UserDict):
    def __init__(self, *args, **kwargs):
        # underlying dict is stored in self.data
        super().__init__(*args, **kwargs)

    def __setitem__(self, key, value):
        # customize behavior, then delegate
        super().__setitem__(key, value)

    def __getitem__(self, key):
        # optional override
        return super().__getitem__(key)

    def __delitem__(self, key):
        super().__delitem__(key)

    def __missing__(self, key):
        # optional: called when key is missing (if implemented)
        raise KeyError(key)
```

## Examples

- Basic wrapper usage

```py
from collections import UserDict

d = UserDict({"a": 1})
d["b"] = 2
print(d)         # UserDict({'a': 1, 'b': 2})
print(d.data)    # {'a': 1, 'b': 2}
```

- Logging on set/delete

```py
class LoggingDict(UserDict):
    def __setitem__(self, key, value):
        print(f"SET {key!r} = {value!r}")
        super().__setitem__(key, value)

    def __delitem__(self, key):
        print(f"DEL {key!r}")
        super().__delitem__(key)
```

- Case-insensitive keys

```py
class CaseInsensitiveDict(UserDict):
    def _key(self, key):
        return key.lower() if isinstance(key, str) else key

    def __setitem__(self, key, value):
        super().__setitem__(self._key(key), value)

    def __getitem__(self, key):
        return super().__getitem__(self._key(key))
```

- Default-like behavior (simple alternative to defaultdict)

```py
class DefaultUserDict(UserDict):
    def __init__(self, default_factory=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.default_factory = default_factory

    def __missing__(self, key):
        if self.default_factory is None:
            raise KeyError(key)
        self[key] = self.default_factory()
        return self[key]
```

## Codebyte Example

```codebyte/python
from collections import UserDict 
 
data = {'Pune':100, 
    'Satara': 28, 
    'Mumbai': 31} 
  
user_dict = UserDict(data) 
print(user_dict.data)
```

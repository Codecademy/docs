---
Title: 'ChainMap'
Description: 'Creates a single view of multiple dictionaries or mappings in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Data Types'
  - 'Dictionary'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`ChainMap`** class from Python's `collections` [module](https://www.codecademy.com/resources/docs/python/modules) module provides a single, combined view of multiple [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries) or mappings, searching them in order and returning the first match for each key.

## Syntax

```pseudo
ChainMap(*maps)
```

**Parameters:**

- `*maps`: Variable number of mapping objects (dictionaries, etc.) to be chained together.

**Return value:**

Returns a `ChainMap` object that provides dictionary-like access across all supplied mappings, resolving keys from the first mapping where they appear.

## Example

The following example demonstrates how to create and use a `ChainMap`:

```py
from collections import ChainMap

# Create multiple dictionaries
default_settings = {'theme': 'dark', 'language': 'en', 'notifications': True}
user_settings = {'theme': 'light', 'font_size': 14}
session_settings = {'language': 'es'}

# Create a ChainMap with the dictionaries
settings = ChainMap(session_settings, user_settings, default_settings)

# Access values (searches from left to right)
print(settings['theme'])
print(settings['language'])
print(settings['notifications'])
print(settings['font_size'])
```

The output of this code is:

```shell
light
es
True
14
```

This example shows how `ChainMap` searches through the dictionaries in order, returning the first occurrence of each key.

## Codebyte Example

The following codebyte demonstrates practical usage of `ChainMap` for configuration management:

```codebyte/python
from collections import ChainMap

# Configuration dictionaries with different priorities
system_config = {
  'host': 'localhost',
  'port': 8080,
  'timeout': 30,
  'debug': False
}

user_config = {
  'host': '192.168.1.100',
  'debug': True,
  'max_connections': 100
}

environment_config = {
  'port': 9000,
  'timeout': 60
}

# Create a ChainMap (environment overrides user, user overrides system)
config = ChainMap(environment_config, user_config, system_config)

print("Final configuration:")
for key, value in config.items():
  print(f"{key}: {value}")

# Demonstrate key lookup behavior
print(f"\nHost: {config['host']}")
print(f"Port: {config['port']}")
print(f"Debug: {config['debug']}")
print(f"Timeout: {config['timeout']}")
```

## Key Features of `ChainMAp`

- **Search Order**: Keys are searched from left to right across the provided mappings
- **First Match Wins**: The first occurrence of a key is returned
- **Dynamic Updates**: Changes to the underlying dictionaries are reflected in the ChainMap
- **Memory Efficient**: Doesn't create copies of the data, just references to the original mappings

## Common Use Cases of `ChainMap`

- **Configuration Management**: Combining system defaults, user preferences, and environment-specific settings
- **API Response Merging**: Combining multiple API responses into a single view
- **Template Systems**: Merging multiple context dictionaries for rendering templates
- **Fallback Mechanisms**: Providing fallback values when primary sources don't have certain keys

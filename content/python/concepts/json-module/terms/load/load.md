---
Title: '.load()'
Description: 'Parses JSON data from a file-like object and converts it into a Python object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Files'
  - 'JSON'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.load()`** method in Python's JSON module is used to parse [JSON](https://www.codecademy.com/resources/docs/general/json) data from a file-like object and convert it into a Python object. This method reads JSON content directly from files, such as `.json` files, and transforms the structured data into native Python data types like dictionaries, lists, strings, numbers, and booleans. The `.load()` method is essential for deserializing JSON data stored in files, making it accessible for manipulation and processing within Python applications.

The `.load()` method is commonly used in scenarios where JSON data is stored in external files, such as configuration files, data exports, API response caches, or structured datasets. It provides an efficient way to load and work with persistent JSON data without manually reading files and parsing JSON strings. This method is particularly valuable in applications that need to process large JSON files, load application settings, or handle data interchange between different systems.

## Syntax

```pseudo
json.load(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)
```

**Parameters:**

- `fp`: A file-like object opened in text mode (e.g., `'r'`) containing a JSON document. It must support the `.read()` method.
- `cls` (Optional): Custom JSON decoder class. If specified, it should be a subclass of `JSONDecoder`.
- `object_hook` (Optional): Function called with the result of any object literal decoded (dictionary).
- `parse_float` (Optional): Function called with the string of every JSON float to be decoded.
- `parse_int` (Optional): Function called with the string of every JSON integer to be decoded.
- `parse_constant` (Optional): Function called with one of the following strings: `-Infinity`, `Infinity`, `NaN`.
- `object_pairs_hook` (Optional): Function called with the result of any object literal decoded with an ordered list of pairs.

**Return value:**

Returns a Python object (dictionary, list, string, number, boolean, or `None`) representing the parsed JSON data.

## Example 1: Basic File Reading with `.load()`

This example demonstrates the fundamental usage of `json.load()` to read JSON data from a file:

```py
import json

# Create a sample JSON file first
sample_data = {
  "name": "Alice Johnson",
  "age": 28,
  "city": "New York",
  "skills": ["Python", "JavaScript", "SQL"]
}

# Write sample data to file
with open('person.json', 'w') as file:
  json.dump(sample_data, file, indent=2)

# Read JSON data from file using json.load()
with open('person.json', 'r') as file:
  data = json.load(file)

print("Loaded data:", data)
print("Name:", data['name'])
print("Skills:", data['skills'])
print("Data type:", type(data))
```

The output produced by this code will be:

```shell
Loaded data: {'name': 'Alice Johnson', 'age': 28, 'city': 'New York', 'skills': ['Python', 'JavaScript', 'SQL']}
Name: Alice Johnson
Skills: ['Python', 'JavaScript', 'SQL']
Data type: <class 'dict'>
```

This example first creates a JSON file with sample data, then demonstrates how `json.load()` reads the file and converts the JSON content into a Python dictionary. The method automatically handles the file parsing and returns a dictionary that can be accessed using standard Python syntax.

## Example 2: Configuration File Processing

This example shows how to use `json.load()` to process application configuration files, a common real-world use case:

```py
import json

# Create a configuration file
config_data = {
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp_db",
    "ssl_enabled": True
  },
  "api": {
    "base_url": "https://api.example.com",
    "timeout": 30,
    "rate_limit": 1000
  },
  "features": {
    "email_notifications": True,
    "dark_mode": False,
    "auto_backup": True
  }
}

# Save configuration to file
with open('app_config.json', 'w') as config_file:
  json.dump(config_data, config_file, indent=4)

# Load and use configuration
def load_app_config():
  """Load application configuration from JSON file."""
  try:
    with open('app_config.json', 'r') as config_file:
      config = json.load(config_file)
    return config
  except FileNotFoundError:
    print("Configuration file not found!")
    return None
  except json.JSONDecodeError as e:
    print(f"Invalid JSON in configuration file: {e}")
    return None

# Use the configuration
app_config = load_app_config()
if app_config:
  db_host = app_config['database']['host']
  api_timeout = app_config['api']['timeout']

  print(f"Database host: {db_host}")
  print(f"API timeout: {api_timeout} seconds")
  print(f"Email notifications: {app_config['features']['email_notifications']}")
```

The output by this code will be:

```shell
Database host: localhost
API timeout: 30 seconds
Email notifications: True
```

This example demonstrates loading application settings from a JSON configuration file. It includes error handling for common issues like missing files and malformed JSON, making it suitable for production applications where configuration management is critical.

## Codebyte Example: Data Analytics with Custom Parsing

This example illustrates using `json.load()` with custom parsing options to process scientific or financial data with specific formatting requirements:

```codebyte/python
import json
from decimal import Decimal
from datetime import datetime, timezone

financial_data = {
  "transaction_id": "TXN001",
  "amount": 1234.56,
  "currency": "USD",
  "timestamp": "2024-05-26T10:30:00Z",
  "exchange_rate": 1.0825,
  "fees": {
    "processing": 12.50,
    "conversion": 8.75
  },
  "metadata": {
    "source": "mobile_app",
    "risk_score": 0.125
  }
}

with open('transaction.json', 'w', encoding='utf-8') as file:
  json.dump(financial_data, file, indent=2)

def parse_decimal(value_str):
  """Custom parser for decimal values to maintain precision."""
  return Decimal(value_str)

def parse_timestamp(obj):
  """Custom object hook to parse timestamp strings."""
  if 'timestamp' in obj:
    obj['parsed_timestamp'] = datetime.strptime(obj['timestamp'], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)
  return obj

with open('transaction.json', 'r', encoding='utf-8') as file:
  transaction = json.load(
    file,
    parse_float=parse_decimal,
    object_hook=parse_timestamp
  )

amount = transaction['amount']
exchange_rate = transaction['exchange_rate']
processing_fee = transaction['fees']['processing']

total_amount = amount + processing_fee
converted_amount = total_amount * exchange_rate

print(f"Original amount: ${amount}")
print(f"Processing fee: ${processing_fee}")
print(f"Total amount: ${total_amount}")
print(f"Converted amount: ${converted_amount}")
print(f"Exchange rate type: {type(exchange_rate)}")
print(f"Parsed timestamp: {transaction['parsed_timestamp']}")
```

This example shows advanced usage of `json.load()` with custom parsing functions. The `parse_float` parameter converts all JSON numbers to `Decimal` objects for precise financial calculations, while the `object_hook` parameter adds timestamp parsing functionality.

## Frequently Asked Questions

### 1. What is the difference between `json.load()` and `json.loads()`?

`json.load()` reads JSON data from a file-like object, while `json.loads()` parses JSON data from a string. Use `json.load()` when working with files and `json.loads()` with JSON strings in memory.

### 2. How do I handle file encoding issues with `json.load()`?

Open the file with explicit encoding specification: `with open('file.json', 'r', encoding='utf-8') as f:`. The JSON specification requires UTF-8 encoding, so always specify it explicitly for cross-platform compatibility.

### 3. Can `json.load()` handle large JSON files efficiently?

`json.load()` loads the entire file into memory at once, which may not be suitable for very large files. For large files, consider using streaming JSON parsers like `ijson` or processing the data in smaller chunks.

### 4. What happens if the JSON file contains invalid syntax?

`json.load()` raises a `JSONDecodeError` exception if the file contains invalid JSON. Always wrap the method call in a try-except block to handle malformed JSON gracefully.

### 5. How can I preserve the order of keys when loading JSON?

Use the `object_pairs_hook` parameter with `collections.OrderedDict`: `json.load(file, object_pairs_hook=OrderedDict)`. Note that Python 3.7+ dictionaries maintain insertion order by default.

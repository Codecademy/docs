---
Title: 'namedtuple'
Description: 'Creates tuple subclasses with named fields for improved code readability in Python namedtuple structures.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

A **`namedtuple`** is a factory function in Python's `collections` module that creates [`tuple`](https://www.codecademy.com/resources/docs/python/tuples) subclasses with named fields. It provides an immutable data structure that allows access to elements through descriptive field names instead of numeric indices, making Python `namedtuple` structures more readable and self-documenting while maintaining the memory efficiency and performance characteristics of regular tuples.

## Syntax

```pseudo
namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)
```

**Parameters:**

- `typename`: A string specifying the name of the new tuple subclass
- `field_names`: A sequence of strings or a single string with field names separated by whitespace and/or commas
- `rename`: If `True`, invalid field names are automatically replaced with positional names
- `defaults`: An iterable of default values for the rightmost parameters
- `module`: Value for the `__module__` field

**Return value:**

A new tuple subclass with named fields that can be accessed via dot notation.

## Example 1: Python `namedtuple` Basic Example

This example demonstrates how to create a Python `namedtuple`, access its elements, and perform basic operations with named tuples Python:

```py
from collections import namedtuple

# Create a namedtuple
Person = namedtuple('Person', ['name', 'age', 'city'])

# Create instances
john = Person('John Doe', 30, 'New York')
jane = Person(name='Jane Smith', age=25, city='Boston')

print(john)  # Person(name='John Doe', age=30, city='New York')
print(jane)  # Person(name='Jane Smith', age=25, city='Boston')

# Access Operations
print("Access by field name:", john.name)  # John Doe
print("Access by index:", john[0])          # John Doe
print("Access using getattr:", getattr(john, 'age'))  # 30

# Conversion Operations
print("Convert to dict:", john._asdict())
# OrderedDict([('name', 'John Doe'), ('age', 30), ('city', 'New York')])

# Additional Operations
print("Field names:", Person._fields)      # ('name', 'age', 'city')
new_person = john._replace(age=31)
print("After replace:", new_person)        # Person(name='John Doe', age=31, city='New York')
```

This example results in the following output:

```shell
Person(name='John Doe', age=30, city='New York')
Person(name='Jane Smith', age=25, city='Boston')
Access by field name: John Doe
Access by index: John Doe
Access using getattr: 30
Convert to dict: OrderedDict([('name', 'John Doe'), ('age', 30), ('city', 'New York')])
Field names: ('name', 'age', 'city')
After replace: Person(name='John Doe', age=31, city='New York')
```

## Conversion Operations

Namedtuples provide several useful methods to convert between different data types and create new instances from existing data. These conversion operations make it easy to work with `namedtuples` alongside other Python data structures like lists, dictionaries, and iterables. There are three main conversion operations available:

- Using `_make()`: Creates `namedtuple` instances from iterables
- Using `_asdict()`: Converts namedtuples to ordered dictionaries
- Using `**` operator: Creates namedtuples from dictionaries using unpacking

Let's examine each conversion operation.

### Example 2: Using Named Tuples Python `_make()` Method

Creates a `namedtuple` instance from an existing iterable, making it easy to convert lists, tuples, or other sequences into namedtuples:

```py
from collections import namedtuple

# Create namedtuple class
Coordinate = namedtuple('Coordinate', ['x', 'y', 'z'])

# Create from different iterables
point_list = [10, 20, 30]
point_tuple = (5, 15, 25)

# Use _make() to create instances
coord1 = Coordinate._make(point_list)
coord2 = Coordinate._make(point_tuple)

print(coord1)  # Coordinate(x=10, y=20, z=30)
print(coord2)  # Coordinate(x=5, y=15, z=25)
```

This example results in the following output:

```shell
Coordinate(x=10, y=20, z=30)
Coordinate(x=5, y=15, z=25)
```

### Example 3: Python Namedtuple `_asdict()` Method

Converts a `namedtuple` instance to an OrderedDict, preserving the field names as keys and their corresponding values:

```py
from collections import namedtuple

# Create namedtuple
Student = namedtuple('Student', ['name', 'grade', 'subject'])
student = Student('Alice Johnson', 95, 'Mathematics')

# Convert to dictionary
student_dict = student._asdict()
print("As dictionary:", student_dict)
# OrderedDict([('name', 'Alice Johnson'), ('grade', 95), ('subject', 'Mathematics')])

# Access dictionary values
print("Name from dict:", student_dict['name'])  # Alice Johnson
print("Grade from dict:", student_dict['grade'])  # 95
```

This example results in the following output:

```shell
As dictionary: OrderedDict([('name', 'Alice Johnson'), ('grade', 95), ('subject', 'Mathematics')])
Name from dict: Alice Johnson
Grade from dict: 95
```

### Example 4: Namedtuple Using `**` (Double Star) Operator

Unpacks a dictionary or `namedtuple` to create new `namedtuple` instances using keyword arguments:

```py
from collections import namedtuple

# Create namedtuple class
Product = namedtuple('Product', ['name', 'price', 'category'])

# Create from dictionary using ** operator
product_data = {
  'name': 'Laptop',
  'price': 999.99,
  'category': 'Electronics'
}

laptop = Product(**product_data)
print("Created from dict:", laptop)
# Product(name='Laptop', price=999.99, category='Electronics')

# Create from existing namedtuple using ** operator
existing_product = Product('Phone', 599.99, 'Electronics')
modified_product = Product(**existing_product._asdict(), price=549.99)
print("Modified product:", modified_product)
# Product(name='Phone', price=549.99, category='Electronics')
```

This example results in the following output:

```shell
Created from dict: Product(name='Laptop', price=999.99, category='Electronics')
Modified product: Product(name='Phone', price=549.99, category='Electronics')
```

## Frequently Asked Questions

### 1. What is a `namedtupl`e in Python?

A `namedtuple` is a factory function in the `collections` module that creates tuple subclasses with named fields. It combines the immutability and memory efficiency of tuples with the readability of accessing elements by name rather than index.

### 2. How do you create a `namedtuple` in Python?

You create a `namedtuple` by calling `namedtuple(typename, field_names)` where `typename` is the class name and `field_names` is a list of field names. For example: `Person = namedtuple('Person', ['name', 'age'])`.

### 3. What are the 4 collection data types in Python?

The four main built-in collection data types in Python are: list (ordered and mutable), tuple (ordered and immutable), set (unordered and mutable with unique elements), and dict (ordered key-value pairs, mutable). The `collections` module provides additional specialized data types like `namedtuple`, `deque`, `Counter`, and `defaultdict`.

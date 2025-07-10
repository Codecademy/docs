---
Title: 'hash()'
Description: 'Returns the hash value of an object for efficient dictionary key comparisons and data retrieval operations.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Data Structures'
  - 'Functions'
  - 'Hashes'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`hash()`** function is a [built-in](https://www.codecademy.com/resources/docs/python/built-in-functions) Python function that returns an object's hash value if it has one. Hash values are integers used to quickly compare dictionary keys during lookups, making data retrieval operations more efficient. The `hash()` function facilitates efficient [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) key comparisons and is essential for implementing hashable collections like sets and dictionary keys.

The `hash()` function works with hashable objects such as numbers, [strings](https://www.codecademy.com/resources/docs/python/strings), [tuples](https://www.codecademy.com/resources/docs/python/tuples), and custom objects that implement the `__hash__()` method. It plays a crucial role in Python's internal data structures and is commonly used for data integrity checks, caching mechanisms, and creating unique identifiers for objects.

## Syntax

```pseudo
hash(object)
```

**Parameters:**

- `object`: The object for which to calculate the hash value. The object must be hashable (immutable types like numbers, strings, tuples, or custom objects implementing `__hash__()`).

**Return value:**

The `hash()` function returns an integer representing the hash value of the object. If the object is not hashable, it raises a `TypeError`.

## Example 1: Basic Hash Calculation

This example demonstrates how to calculate hash values for different data types including integers, strings, and floats:

```py
# Hash different data types
number = 42
text = "Python Programming"
decimal = 3.14159

# Calculate hash values
number_hash = hash(number)
text_hash = hash(text)
decimal_hash = hash(decimal)

# Display the results
print(f"Hash of {number}: {number_hash}")
print(f"Hash of '{text}': {text_hash}")
print(f"Hash of {decimal}: {decimal_hash}")
```

The output of the above code is:

```shell
Hash of 42: 42
Hash of 'Python Programming': -1234567890123456789
Hash of 3.14159: 1234567890987654321
```

> **Note:** These are placeholder values. Hash values for strings and floats can vary between runs due to hash randomization.

The above example shows that `hash()` works with various immutable data types. Notice that integers often return themselves as hash values for small numbers, while strings and floats produce larger hash values.

## Example 2: Hashable vs Non-Hashable Objects

This example illustrates the difference between hashable and non-hashable objects, demonstrating why some objects can be hashed while others cannot:

```py
# Hashable objects (immutable)
hashable_tuple = (1, 2, 3, "hello")
hashable_string = "Python"
hashable_number = 100

# Calculate hash for hashable objects
print(f"Tuple hash: {hash(hashable_tuple)}")
print(f"String hash: {hash(hashable_string)}")
print(f"Number hash: {hash(hashable_number)}")

# Non-hashable objects (mutable)
mutable_list = [1, 2, 3]
mutable_dict = {"key": "value"}

# Attempting to hash mutable objects will raise TypeError
try:
  print(f"List hash: {hash(mutable_list)}")
except TypeError as e:
  print(f"Error hashing list: {e}")

try:
  print(f"Dict hash: {hash(mutable_dict)}")
except TypeError as e:
  print(f"Error hashing dictionary: {e}")
```

The output of the above code is as follows:

```shell
Tuple hash: -1815842884691876695
String hash: -8264853706715907173
Number hash: 100
Error hashing list: unhashable type: 'list'
Error hashing dictionary: unhashable type: 'dict'
```

The above example demonstrates that only immutable objects can be hashed. Mutable objects like [lists](https://www.codecademy.com/resources/docs/python/lists) and dictionaries raise a `TypeError` when passed to the `hash()` function because their contents can change, which would invalidate their hash values.

## Codebyte Example: Custom Object Hashing

This example shows how to implement custom hashing behavior for user-defined classes by overriding the `__hash__()` and `__eq__()` methods:

```py
class Student:
  def __init__(self, name, student_id, grade):
    self.name = name
    self.student_id = student_id
    self.grade = grade

  def __hash__(self):
    # Create hash based on immutable attributes
    return hash((self.name, self.student_id))

  def __eq__(self, other):
    # Define equality for proper hash behavior
    if isinstance(other, Student):
      return (self.name == other.name and
              self.student_id == other.student_id)
    return False

  def __repr__(self):
    return f"Student('{self.name}', {self.student_id}, '{self.grade}')"

# Create student objects
student1 = Student("Alice Johnson", 12345, "A")
student2 = Student("Bob Smith", 54321, "B")
student3 = Student("Alice Johnson", 12345, "A+")  # Same name and ID

# Calculate and display hash values
print(f"Student 1 hash: {hash(student1)}")
print(f"Student 2 hash: {hash(student2)}")
print(f"Student 3 hash: {hash(student3)}")

# Check if students with same name and ID have same hash
print(f"Student 1 == Student 3: {student1 == student3}")
print(f"Same hash values: {hash(student1) == hash(student3)}")

# Use students as dictionary keys
student_grades = {
  student1: "Excellent",
  student2: "Good"
}

print(f"Grades dictionary: {student_grades}")
```

This example demonstrates proper implementation of custom hashing. The `__hash__()` method uses only immutable attributes (name and student_id), while the `__eq__()` method ensures that objects comparing as equal have the same hash value, which is required for correct behavior in hash-based collections.

## Frequently Asked Questions

### 1. Is there a built-in hash table in Python?

Yes, Python's `dict` (dictionary) is implemented as a hash table internally. Dictionaries use hash values of keys for fast lookups, insertions, and deletions. The `hash()` function is used internally to compute these hash values.

## 2. Does Python have a built-in hashmap?

Python's `dict` type serves as the built-in hashmap implementation. It provides O(1) average-case time complexity for key operations and automatically handles hash collisions and table resizing.

## 3. Can I hash mutable objects in Python?

No, mutable objects like lists, dictionaries, and sets cannot be hashed directly because their contents can change, which would invalidate their hash values. Only immutable objects can be safely hashed.

## 4. Why do hash values change between Python sessions?

Python uses hash randomization by default for security reasons. This means hash values for strings and other objects may differ between program runs, but they remain consistent within a single session.

## 5. How can I make my custom class hashable?

Implement both `__hash__()` and `__eq__()` methods in your class. The `__hash__()` method should return an integer based on immutable attributes, and objects that compare as equal must have the same hash value.

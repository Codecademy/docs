---
Title: '.get()' 
Description: 'Returns raw pointer to managed object without transferring ownership.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects:
  - 'Computer Science'

Tags: 
  - 'Pointers'
  - 'Memory'

CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **.get()** method returns a raw pointer that points to the managed object without transferring ownership. It is used with smart pointers in C++, including the unique_ptr and shared_ptr. 

This method ensures the raw pointer is not responsible of deleting the object it is pointing to, since the smart pointer owns it. 

## Syntax

```pseudo 
T* raw_ptr = smart_ptr.get() // returns raw pointer to smart_ptr's managed object, but only smart_ptr has ownership
```

## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
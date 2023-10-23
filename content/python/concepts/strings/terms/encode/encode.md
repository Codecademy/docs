---
Title: '.encode()'
Description: 'Encodes a given string.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.encode()`** method takes a given string and returns an encoded version of that string. If no encoding specifications are given, UTF-8 is used by default.

## Syntax

```pseudo
string.encode(encoding='encoding', errors='errors')
```

- `string` (required): The string to encode.
- `encoding` (optional): The type of encoding to use. For example, some types of encoding are UTF-32, ASCII, Base64, and UTF-16. If none are specified, UTF-8 will be used.
- `errors` (optional): How to handle errors if the string cannot be encoded. There are six error responses:
  - `strict`: A `UnicodeDecodeError` will be raised on failure. If no error handling is specified, this is the default.
  - `ignore`: Ignore characters that cannot be encoded.
  - `replace`: Replace the characters that cannot be encoded with a question mark.
  - `xmlcharrefreplace`: If there is a character that cannot be encoded, an XML character reference will be inserted in its place.
  - `backslashreplace`: If there is a character that cannot be encoded, the `\uNNNN` characters will be inserted in its place.
  - `namereplace`: If there is a character that cannot be encoded, the `\N{...}` characters will be inserted in its place.

## Example

In the following example, the `.encode()` method is called twice. The first call does not specify the optional parameters, so the string is encoded in UTF-8 and will throw a `UnicodeDecodeError` if there is failure. The second call specifies that the string will be encoded using `ascii` and that errors will be handled using `xmlcharrefreplace`.

```py
example_a = 'Lèarning Pythön!'
example_b = 'Consistèntly!'

default_example = example_a.encode()
ascii_example = example_b.encode(encoding='ascii', errors='xmlcharrefreplace')

print("Default example:", default_example)
print("ASCII example:", ascii_example)
```

This will result in the following output:

```shell
Default example: b'L\xc3\xa8arning Pyth\xc3\xb6n!'
ASCII example: b'Consist&#232;ntly!'
```

## Codebyte Example

The following example is runnable and uses the `.encode()` method twice. The first call does not specify encoding or error handling, so UTF-8 and `strict` error handling is used. The second call specifies UTF-16 and `ignore` error handling is used.

```codebyte/python
example_a = 'Tèlepöne?'
example_b = 'Pöè!'

default_example = example_a.encode()
utf_16_example = example_b.encode(encoding='utf-16', errors='ignore')

print("Default example:", default_example)
print("UTF-16 example:", utf_16_example)
```

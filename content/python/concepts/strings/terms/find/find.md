---
Title: .find()
Description: 'Takes in a substring (and optionally start/end index), return the index number of the first occurrence of the substring inside a string.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `.find()` string method takes in a substring (and optionally start/end index), returns the index number of the first occurrence of the substring inside a string. It is case sensitive.

If the substring is not found, returns `-1`.

## Syntax

```py
string.find(substring, start, end)
```

- `substring`: The substring to look for.
- `start` (optional): The starting index of the string to begin the search.
- `end` (optional): The starting index of the string to end the search.

If `start` and `end` index are not specified, it will default to searching the substring in the whole string. So by default, `start = 0` and `end = len(string)`.

## Example 1

Use `.find()` without specifying the `start` and `end` index:

```py
new_string = "I like to eat potato"

like_result = new_string.find("like")
drink_result = new_string.find("drink")
to_result = new_string.find("to")

print(like_result)   # Output: 2
print(drink_result)  # Output: -1
print(to_result)     # Output: 7
```

- `like` is found at index 2 of the `new_string` string.
- `drink` is not found in the `new_string` string, so it's -1.
- `to` is found at two places in the `new_string` string, but `.find()` returns the first occurrence, instead of the other occurrence at index 18.

## Example 2

Use `.find()` with only the `start` index specified:

```py
new_string = "I like to eat potato"

like_2_result = new_string.find("like", 2)
like_4_result = new_string.find("like", 4)
to_5_result = new_string.find("to", 5)
to_10_result = new_string.find("to", 10)

print(like_2_result)  # Output: 2
print(like_4_result)  # Output: -1
print(to_5_result)    # Output: 7
print(to_10_result)   # Output: 18
```

- If index starts on 2 ("l" in "like"), `like` is found at index 2.
- If index starts on 4 ("k" in "like"), `like` is not found, so it's -1.
- If index starts on 5 ("e" in "like"), `to` is found at two places in the `new_string` string, but `.find()` returns the first occurrence, instead of the other occurrence at index 18.
- If index starts on 10 ("e" in "eat"), `to` is found at index 18.

## Codebyte Example

Use `.find()` with the `start` and `end` index specified:

```codebyte/python
new_string = "I like to eat potato"

like_2_length_result = new_string.find("like", 2, len(new_string))
like_4_length_result = new_string.find("like", 4, len(new_string))
like_0_3_result = new_string.find("like", 0, 3)
like_0_15_result = new_string.find("like", 0, 15)
like_0_last3_result = new_string.find("like", 0, -3)

print(like_2_length_result)
print(like_4_length_result)
print(like_0_3_result)
print(like_0_15_result)
print(like_0_last3_result)

print("")

to_0_length_result = new_string.find("to", 0, len(new_string))
to_15_length_result = new_string.find("to", 15, len(new_string))

print(to_0_length_result)
print(to_15_length_result)
```

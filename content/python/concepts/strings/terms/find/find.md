---
Title: .find()
Description: 'Takes in a substring (and optionally start/end index), return the index number of the first occurrence of substring inside the string'
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

Takes in a substring (and optionally start/end index), returns the index number of the first occurrence of substring inside the string.

If `start` and `end` index are not specified, it will default to find the substring in the whole string (`start = 0`, `end = len(string)`)

If the substring is not found, returns `-1`.

## Syntax

```py
string.find(substring, start, end)
```

## Example 1

Use `.find()` without specifying `start` and `end` index:

```codebyte/python
new_string = "I like to eat potato"

eat_result = new_string.find("eat")
like_result = new_string.find("like")
drink_result = new_string.find("drink")
to_result = new_string.find("to")

print(eat_result)
print(like_result)
print(drink_result)
print(to_result)
# output:
# 10
# 2
# -1 (substring not found)
# 7 (returns the first occurrence, instead of another occurrence at 18)
```

## Example 2

Use `.find()` with `start` index only specified:

```codebyte/python
new_string = "I like to eat potato"

like_2_result = new_string.find("like", 2)
like_4_result = new_string.find("like", 4)
to_5_result = new_string.find("to", 5)
to_10_result = new_string.find("to", 10)

print(like_2_result)
print(like_4_result)
print(to_5_result)
print(to_10_result)
# output:
# 2
# -1
# 7
# 18
```

## Example 3

Use `.find()` with `start` and `end` index specified:

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
# output:
# 2
# -1
# -1
# 2
# 2

to_0_length_result = new_string.find("to", 0, len(new_string))
to_15_length_result = new_string.find("to", 13, len(new_string))
print(to_0_length_result)
print(to_15_length_result)
# output:
# 7
# 18
```

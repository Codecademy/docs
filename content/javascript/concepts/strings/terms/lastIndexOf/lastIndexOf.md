---
Title: '.lastIndexOf()'
Description: 'Returns the index of the last occurrence of a specified substring within a string, or -1 if the substring is not found.'
Subjects:
- 'Computer Science'
- 'Web Development'
Tags:
- 'Strings'
- 'Methods'
- 'JavaScript'
CatalogContent:
- 'learn-javascript'
- 'paths/web-development'
---

The **`.lastIndexOf()`** method in JavaScript returns the position of the last occurrence of a specified substring within a [string](https://www.codecademy.com/resources/docs/javascript/strings). If the substring is not found, it returns `-1`. It performs a case-sensitive search and can take an optional starting position from which to begin the search backwards.

## Syntax

```pseudo
string.lastIndexOf(searchValue, fromIndex)
```

**Parameters:**

- `searchValue`: The substring to search for.
- `fromIndex` (optional): The position to start searching backward from. Defaults to the string’s length.

**Return value:**

Returns an integer representing the index of the last occurrence of the specified substring within the string. If the substring isn’t found, it returns `-1`.

## Example 1: Finding the Last Mention of a Name

In this example, a chat message contains multiple mentions of a person’s name, and the method finds the last one:

```js
const message = 'Hey Sam, Sam, are you coming to the meeting, Sam?';
const lastSam = message.lastIndexOf('Sam');
console.log(lastSam);
```

The output of this code is:

```shell
45
```

## Example 2: Searching Backward from a Certain Point

In this example, the search begins from a specific index to locate the previous occurrence of a keyword:

```js
const report = 'Error at line 23. Warning at line 45. Error again at line 78.';
const prevError = report.lastIndexOf('Error', 40);
console.log(prevError);
```

The output of this code is:

```shell
38
```

## Codebyte Example: Locating the Last Hashtag in a Social Media Caption

In this example, a caption includes multiple hashtags, and the method identifies the position of the last one:

```codebyte/javascript
const caption = 'Just finished a 10k run! #fitness #running #motivation';
const lastHashtag = caption.lastIndexOf('#');
console.log(lastHashtag);
```

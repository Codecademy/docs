---
Title: '.Replace()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns a new string where every instance of a certain character or string in the original string is swapped with a different specified character or string.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Replace()`** method when applied to the string gives back a new string where every instance of a certain character or string in the original string is swapped with a different specified character or string.

## Syntax

```
// Replaces old character with new character.
String.Replace(char oldChar, char newChar);

// Replaces old string with new string.
String.Replace(string oldString, string newString);
```

The `.Replace()` method takes the original string returns a new string with the following changes in it:

* All occurances of indicated character are replaced with another one.
* All occurances of indicated string are replaced with another one.

> **Note:** If `oldChar` or `oldString` is not found in the original string, than the `.Replace()` method returns the string witout changes.

> **Note:** If `newChar` or `newString` is `null`, than all occurances of `oldChar` or `oldString` are removed.

> **Note:** The `.Replace()` method does not modify the original `string`. It always produces the new string.

## Example 1

The following example takes the `string` named `oldString`, replaces all the hyphen characters `-` with comma characters `,`, and returns the new `string` named `newString`.

```cs
string oldString = "A-B-C-D-E-F-G-H-I";
string newString = oldString.Replace('-', ',');
Console.WriteLine($"Old string: \"{oldString}\"");
Console.WriteLine($"New string: \"{newString}\"");
```

It produces the following output to the console:

```cs
Old string: "A-B-C-D-E-F-G-H-I"
New string: "A,B,C,D,E,F,G,H,I"
```

## Example 2

The following example takes the `string` named `wrongString`, replaces the word `fourth` with the word `third`, and returns the new `string` named `wrightString`.

```cs
string wrongString = "Earth is the fourth planet from the Sun.";
string wrightString = wrongString.Replace("fourth", "third");
Console.WriteLine($"Wrong statement is: {wrongString}");
Console.WriteLine($"Wright statement is: {wrightString}");
```

It produces the following output to the console:

```cs
Wrong statement is: Earth is the fourth planet from the Sun.
Wright statement is: Earth is the third planet from the Sun.
```

Interested in helping build Docs? Read the [Contribution Guide](https://github.com/Codecademy/docs/blob/main/.github/CONTRIBUTING.md) or share your thoughts in this [feedback form](https://codecademyready.typeform.com/to/hzVIWDgz).

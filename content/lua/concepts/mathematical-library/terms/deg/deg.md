---
Title:  'math.deg()'  # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed

Description:  'Convert an Angle in Radians to Degree'  # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)

Subjects:  # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!

-  'Computer Science'

-  'Game Development'

Tags:  # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!

-  'Arithmetic'

-  'Functions'

-  'Math'

-  'Numbers'

CatalogContent:  # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first

-  'learn-lua'

-  'paths/computer-science'

---

Lua **`math.deg()`** is a function that converts an angle in radians to degrees.It takes in one argument, i.e the angle in radians.

## Syntax

```lua

math.deg(x)

```

## Example

```lua

local radians =  math.pi  /  3  -- i.e (π/3)

--math.pi is used to get the value of PI.

local degrees =  math.deg(radians)

print("The angle in degrees :",degrees)

```

The code will return the following output:

```shell

The  angle  in  degrees  :  60.0

```

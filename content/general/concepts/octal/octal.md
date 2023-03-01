---
Title: 'Octal' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Octal is a number system that uses digits from 0 to 7. Compared to the decimal system each digit corresponds to the power of 8 instead of the power of 10.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Data Science'
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Arithmetic'
  - 'Encoding'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

The **octal** number system can be compared with the decimal, the hexadecimal, the [binary](https://www.codecademy.com/resources/docs/general/binary), and many other systems. As the name says the system consists of 8 different digits (0-7). In our daily life, we are used to the decimal system, which consists of steps to the power of 10. Instead the Octal system uses steps to the power of 8.

In the past, the octal system was used more often because systems were based on 12/24/36-bit but in today's technologies, especially with 16/32/64-bit the binary or hexadecimal system is used commonly. 
But in the case of the hexadecimal system, the octal system has the advantage of using only numbers, therefore, renouncing using the alphabet.

## Example

|octal	|decimal |
|-------|--------|
|0		|0       |
|1		|1       |
|2	    |2       |
|3		|3       |
|7		|7       |
|10		|8       |
|11		|9       |
|12		|10      |
|20		|16      |
|40		|32      |
|100	|64      |

Each digit is a power of 8, so the last digit (decimal 0-7) is 8^0, equalling 1, the one in front of it 8^1, and so on. If we write the octal system as a calculation to convert it to the decimal system we would get:

```
125 = 1 * 8^2   + 2 * 8^1   + 5 * 8^0
    = 64        + 16        + 5
    = 85
```


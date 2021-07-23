---
Title: "Loops in Emojicode"
Subjects:
  - "Computer Science"
Tags:
  - "Loops"
  - "For"
  - "While"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-emojicode"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## 🔂 For In Statement

The 🔂 statement allows you to quickly iterate over an instance, that is repeatedly retrieving values from it until there are no more values to provide. For example, you can iterate over an 🍨 instance and you’ll receive all elements contained in the list. The 🔂 statement can iterate over instances of any type which conforms to the 🔂🐚Element🍆 protocol.

```bash
🍡 iterable❗️ ➡️ iterator
🔁 🔽 iterator❓️ 🍇
  🔽 iterator❗️ ➡️ variable
  💭 The provided block is executed here
🍉
```

where iteratable is the instance to iterate over (the result from evaluating the expression) and variable the variable name provided. Evidently, the variable will be of the type that was provided to the generic argument Element when the type of iterable declared its conformance to 🔂🐚Element🍆.

Let’s take a look at an example:

```bash
🍨🔤tree🔤 🔤bee🔤 🔤lee🔤 🔤me🔤🍆 ➡️ list

🔂 name list 🍇
  😀 name❗️
🍉
```

In this example, the code block will be repeated for every value of the list and the values tree, bee, lee, and me will be printed. The type of name is naturally 🔡. That’s due to the fact that 🍨🐚Element declared its conformance to 🔂 as 🔂🐚Element🍆 and therefore also returns an iterator of type 🍡🐚Element🍆 from which the type of the variable is inferred.


## 🔁 Repeat While

🔁 repeats a given code block as long as a condition is 👍. This also means that if the condition is never 👍 the code block will never be executed. The syntax is:

For example, this program will infinitely print “It goes on and on and on”.

```bash
🔁 👍 🍇
  😀 🔤It goes on and on and on🔤❗️
🍉
```

Due to the ease of use of the 🔂 statement 🔁 is only used very seldom.
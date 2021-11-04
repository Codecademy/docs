---
Title: 'Data Types'
Description: 'All programming languages designate certain "types" of data. This helps the operating system and computer hardware allocate memory based on the type of data that is going to be stored. Emojicode, being a very type-safe language, takes great care to ensure that data types are understood, by both you and the compiler. Here are a few basic data types in Emojicode: 🔢, 💯, 🔡, and 👌.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Booleans'
  - 'Integers'
  - 'Strings'
CatalogContent:
  - 'learn-emojicode'
  - 'paths/computer-science'
---

All programming languages designate certain "types" of data. This helps the operating system and computer hardware allocate memory based on the type of data that is going to be stored.

Emojicode, being a very type-safe language, takes great care to ensure that data types are understood, by both you and the compiler.

Here are a few basic data types in Emojicode:

| Type | Description            |
| ---- | ---------------------- |
| `🔢` | Integer numbers        |
| `💯` | Decimal numbers        |
| `🔡` | Text strings           |
| `👌` | Truth values `👍`/`👎` |

## 🔲 Type Casting

Type casting is a way to determine whether a value is of a given type at run-time and to treat the value as an instance of this type.

```emojic
🔲 value type
```

The `value` is the value to be casted to `type`:

- If `value` can be casted to `type`, then `value` is returned as `type`.
- If it can't, then no value is returned.

Type casting is implemented with the `🔲` statement:

```emojic
🔲 hello 🔡     💭 Tries to cast txt to 🔡
🔲 world 🐟     💭 Tries to cast a to 🐟
```

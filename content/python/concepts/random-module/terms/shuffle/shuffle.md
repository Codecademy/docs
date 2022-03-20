---
Title: '.shuffle()'
Description: 'Takes a list and randomly re-orders the items.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The `.shuffle()` method takes a list as a parameter and randomly re-orders the contents in place.

## Syntax

```pseudo
random.shuffle(list)
```

The `list` is the collection of items to be shuffled in place.

## Example

After importing the `random` module, lists can be rearranged with `.shuffle()`:

```py
import random

my_list = [0,1,2,3,4,5,6,7,8,9]

random.shuffle(my_list)

print(my_list)

# Output: [2, 3, 5, 0, 6, 8, 4, 7, 1, 9]
```

## Codebyte Example

```codebyte/python
import random

deck_of_cards = [
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
  "Joker", "Joker"
]

random.shuffle(deck_of_cards)

print(deck_of_cards)
```

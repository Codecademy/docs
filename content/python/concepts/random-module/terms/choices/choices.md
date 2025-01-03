---
Title: '.choices()'
Description: 'Returns a list of randomly selected elements from a given sequence, allowing for weighted probabilities and repetition.'
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
---

The **`.choices()`** function in Python returns a list of randomly selected elements from a given sequence, allowing weighted probabilities and repetition.

## Syntax

```pseudo
random.choices(sequence, weights=None, *, cum_weights=None, k=1)
```

- `sequence` : The sequence (list, tuple, etc.) from which random elements are chosen.
- `weights` (Optional): A sequence of relative weights corresponding to each element in `sequence`, determining the likelihood of selection.
- `cum_weights` (Optional): A sequence of cumulative weights. It is an alternative to `weights` and cannot be used simultaneously.
- `k` (Optional): The number of elements to select. Defaults to `1`.

> **Note**: Either `weights` or `cum_weights` can be used, but not both.

## Example 1

The following example uses `.choices()` to randomly select 10 fruits from a predefined list, where the likelihood of each fruit being chosen is determined by its respective weights:

```py
import random

# Define the population of items
fruits = ['apple', 'banana', 'cherry', 'date']

# Define weights for each fruit (higher weight means higher likelihood of selection)
weights = [5, 20, 50, 25]  # 'cherry' is most likely to be picked, followed by 'date', 'banana', and 'apple'

# Number of random selections to make
num_picks = 10

# Randomly select items based on the weights
selected_fruits = random.choices(fruits, weights=weights, k=num_picks)

# Output the selected items
print("Randomly selected fruits:", selected_fruits)
```

The above code produces the following output:

```shell
Randomly selected fruits: ['cherry', 'date', 'apple', 'cherry', 'cherry', 'cherry', 'cherry', 'cherry', 'date', 'date']
```

The output changes with each execution as `random.choices()` generates random selections influenced by the weights.

## Codebyte Example

This example uses `.choices()` to randomly draw 5 cards from a deck, assigning higher weights to face cards to make them more likely to be selected:

```codebyte/python
import random

# Define a deck of cards
deck = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

# Define weights to simulate likelihood of drawing certain cards (e.g., face cards are more likely)
weights = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15, 15, 15]  # Higher weights for face cards

# Randomly draw 5 cards from the deck with replacement
drawn_cards = random.choices(deck, weights=weights, k=5)

# Output the selected cards
print("Drawn cards:", drawn_cards)
```

---
Title: '.randint()'
Description: 'Generates a random integer within a specified range including both endpoints.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Numbers'
  - 'Random'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`.randint()`** method of Python's random module generates a random integer within a specified range. This method returns a single random integer value between two given endpoints, including both the start and end values in the possible results. The `.randint()` method provides an easy and efficient way to simulate random events, create unpredictable outcomes, and add randomness to Python applications.

The `.randint()` method is widely used in gaming applications, simulations, statistical sampling, testing scenarios, and any situation where you need to generate random integer values. Common use cases include dice rolling simulators, lottery number generators, password creation, random selection processes, and mathematical simulations where random data points are required.

## Syntax

```pseudo
random.randint(start, end)
```

**Parameters:**

- `start`: The lowest integer value that can be returned (inclusive). Must be an integer type.
- `end`: The highest integer value that can be returned (inclusive). Must be an integer type.

**Return value:**

A random integer N where `start <= N <= end` (both endpoints included).

## Example 1: Basic Random Integer Generation

This example demonstrates the basic usage of `.randint()` to generate a single random integer within a specified range:

```py
import random

# Generate a random integer between 1 and 10 (inclusive)
random_number = random.randint(1, 10)
print(f"Random number between 1 and 10: {random_number}")

# Generate a random integer between 50 and 100
random_score = random.randint(50, 100)
print(f"Random score: {random_score}")

# Generate multiple random numbers
print("Five random numbers between 1 and 6:")
for i in range(5):
  dice_roll = random.randint(1, 6)
  print(f"Roll {i+1}: {dice_roll}")
```

The output of this code is:

```shell
Random number between 1 and 10: 7
Random score: 83
Five random numbers between 1 and 6:
Roll 1: 4
Roll 2: 2
Roll 3: 6
Roll 4: 1
Roll 5: 3
```

This example shows how to generate random integers for different ranges. Each call to `.randint()` produces a new random value within the specified bounds. The method can handle both small and large integer ranges effectively.

## Example 2: Dice Rolling Simulator

This example demonstrates a practical application of `.randint()` by creating a dice rolling simulator that mimics real-world gaming scenarios:

```py
import random

def roll_dice(num_dice=1, sides=6):
  """Simulate rolling dice and return the results."""
  rolls = []
  for i in range(num_dice):
    roll = random.randint(1, sides)
    rolls.append(roll)
  return rolls

def dice_game():
  """Interactive dice rolling game."""
  print("Welcome to the Dice Rolling Simulator!")

  while True:
    try:
      num_dice = int(input("How many dice would you like to roll? (1-5): "))
      if 1 <= num_dice <= 5:
        break
      else:
         print("Please enter a number between 1 and 5.")
    except ValueError:
      print("Please enter a valid number.")

  print(f"\nRolling {num_dice} dice...")
  results = roll_dice(num_dice)

  print("Results:")
  for i, roll in enumerate(results, 1):
    print(f"Die {i}: {roll}")

  total = sum(results)
  print(f"Total: {total}")

  # Check for special combinations
  if num_dice == 2:
    if results[0] == results[1]:
      print("Doubles! You rolled the same number on both dice!")
      if total == 7:
        print("Lucky seven!")

# Run the dice game
dice_game()
```

The output of this code is:

```shell
Welcome to the Dice Rolling Simulator!
How many dice would you like to roll? (1-5): 2

Rolling 2 dice...
Results:
Die 1: 4
Die 2: 3
Total: 7
Lucky seven!
```

This example creates an interactive dice rolling simulator that demonstrates practical usage of randint(). The program validates user input, generates random dice rolls, calculates totals, and identifies special combinations. This type of application is commonly used in board games, casino simulations, and probability demonstrations.

## Codebyte Example: Random Password Generator

This example shows how `.randint()` can be used to create a secure random password generator by selecting random characters from different character sets:

```codebyte/python
import random
import string

def generate_password(length=12):
  """Generate a random password using randint() for character selection."""
  # Define character sets
  lowercase = string.ascii_lowercase
  uppercase = string.ascii_uppercase
  digits = string.digits
  special_chars = "!@#$%^&*"

  # Combine all character sets
  all_chars = lowercase + uppercase + digits + special_chars

  password = []

  # Ensure at least one character from each category
  password.append(random.choice(lowercase))
  password.append(random.choice(uppercase))
  password.append(random.choice(digits))
  password.append(random.choice(special_chars))

  # Fill remaining positions with random characters
  for i in range(length - 4):
    # Use randint to select a random index from all_chars
    random_index = random.randint(0, len(all_chars) - 1)
    password.append(all_chars[random_index])

  # Shuffle the password to randomize character positions
  random.shuffle(password)

  return ''.join(password)

def password_generator():
  """Interactive password generator."""
  print("Random Password Generator")

  try:
    length = 12
    if 8 <= length <= 20:
      password = generate_password(length)
      print(f"Generated password: {password}")

      # Generate multiple passwords for options
      print("\nAlternative passwords:")
      for i in range(3):
        alt_password = generate_password(length)
        print(f"Option {i+1}: {alt_password}")
    else:
      print("Please enter a length between 8 and 20.")
  except ValueError:
    print("Please enter a valid number.")

# Run the password generator
password_generator()
```

This example demonstrates how `.randint()` can be used for security-related applications. The function generates random indices to select characters from different character sets, ensuring password complexity and unpredictability. This approach is useful for creating secure passwords, generating test data, and implementing security features.

## Frequently Asked Questions

### 1. What happens if the start parameter is greater than the end parameter?

If you pass a start value that is greater than the end value, `.randint()` raises a `ValueError` with the message "empty range for randrange()". Always ensure that start <= end.

### 2. Can `.randint()` generate floating-point numbers?

No, `.randint()` only generates integer values. If you need random floating-point numbers, use `random.uniform()` or `random.random()` instead.

### 3. Can I use `.randint()` with negative numbers?

Yes, `.randint()` works with negative integers. For example, `random.randint(-10, -1)` will generate random integers between -10 and -1 inclusive.

### 4. How does `.randint()` compare to `randrange()`?

`.randint(a, b)` is equivalent to `randrange(a, b+1)`. The key difference is that `.randint()` includes both endpoints, while `randrange()` excludes the stop value.

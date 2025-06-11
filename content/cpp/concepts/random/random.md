---
Title: 'Random'
Description: 'A library used to generate random numbers in C++.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Random'
  - 'Values'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Randomness plays a critical role in many programming tasks, including simulations, games, cryptography, and testing. In C++, generating random numbers has evolved significantly with the introduction of the `<random>` library in C++11, offering more powerful and flexible tools than the traditional C-style `rand()` [function](https://www.codecademy.com/resources/docs/cpp/functions).

## Traditional Approach: `rand()`

Before C++11, randomness was handled using the C standard library function `rand()`.

This example uses the `rand()` function to generate a random number:

```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
  std::srand(std::time(nullptr)); // Seed with the current time
  int random_number = std::rand(); // Generate a random number
  std::cout << "Random Number: " << random_number << '\n';
  return 0;
}
```

In this example:

- `rand()`: Returns a random number between 0 and `RAND_MAX`.
- `srand()`: Initializes the random number generator with a seed.

Here is a possible output:

```shell
Random Number: 1950498172
```

> **Note:** Since the number is randomly generated, the output may vary each time the code is run.

## Modern Approach: `<random>`

The `<random>` header, introduced in C++11, provides a robust framework for random number generation.

Here are the key components of this header:

- **Engines**: Generate raw random numbers.
- **Distributions**: Transform raw numbers into specific ranges or statistical distributions.

### Common Distributions

| Distribution Type      | Class Name                       | Description                                     |
| ---------------------- | -------------------------------- | ----------------------------------------------- |
| Uniform (integers)     | `std::uniform_int_distribution`  | Evenly distributed integers in a given range    |
| Uniform (real numbers) | `std::uniform_real_distribution` | Evenly distributed floating-point values        |
| Normal (Gaussian)      | `std::normal_distribution`       | Bell curve (Gaussian) distribution              |
| Bernoulli              | `std::bernoulli_distribution`    | `true` or `false` with a given probability      |
| Binomial               | `std::binomial_distribution`     | Number of successes in a fixed number of trials |

### Example

This example uses the `<random>` header to generate a random number between 1-6:

```cpp
#include <iostream>
#include <random>

int main() {
  std::random_device rd;  // Seed
  std::mt19937 gen(rd()); // Mersenne Twister engine
  std::uniform_int_distribution<> dist(1, 6); // Uniform distribution [1, 6]

  std::cout << "Rolling a dice: " << dist(gen) << '\n';
  return 0;
}
```

In this example:

- `std::random_device`: Non-deterministic seed generator (may fall back to pseudo-random).
- `std::mt19937`: High-quality pseudo-random number generator (Mersenne Twister).
- `std::uniform_int_distribution`: Ensures even distribution between two bounds.

Here is a possible output:

```shell
Rolling a dice: 2
```

## Codebyte Example: Ranged Random Number Generator Using `rand()`

This codebyte example uses the `rand()` function to generate a random number in the range 10-50:

```codebyte/cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
  std::srand(std::time(nullptr)); // Seed with the current time

  int lower = 10;
  int upper = 50;

  // Generate random number in the range [10, 50]
  int random_number = lower + std::rand() % (upper - lower + 1);

  std::cout << "Random number between " << lower << " and " << upper << ": " << random_number << std::endl;

  return 0;
}
```

In this example:

- `std::rand() % (upper - lower + 1)` gives a number between 0 and `(upper - lower)`.
- Adding `lower` shifts the range to `[lower, upper]`.
- `srand()` ensures different results across runs by seeding with the current time.

## Best Practices for Generating Random Numbers

- Prefer `<random>` over `rand()` for better control and randomness.
- Use `std::random_device` for seeding when unpredictability is desired.
- Match engines with appropriate distributions for accurate simulations.
- Avoid using the same engine across multiple threads without synchronization.

## Frequently Asked Questions

### 1. What's the difference between `rand()` and `<random>` in C++?

- `rand()` is a legacy function from C that returns a pseudo-random number.
- `<random>`, introduced in C++11, offers modern, flexible, and statistically sound ways to generate random numbers using engines and distributions.

### 2. Why should I avoid using `rand()` in serious applications?

- Poor randomness quality.
- Predictable if seeded with the same value.
- Not thread-safe.
- No control over distributions.

Use `<random>` for better randomness and control.

### 3. Is `<random>` thread-safe?

No. You should use separate engines per thread or protect shared engines with mutexes.

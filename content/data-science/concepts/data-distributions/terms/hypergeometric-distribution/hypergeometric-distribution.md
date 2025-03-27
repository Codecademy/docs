---
Title: 'Hypergeometric Distribution'
Description: 'Calculates the probability of obtaining a specific number of successes in sampling without replacement from a finite population.'
Subjects:
  - 'Code Foundations'
  - 'Data Science'
Tags:
  - 'Data'
  - 'Probability'
  - 'Statistics'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **hypergeometric distribution** is a discrete probability distribution that calculates the probability of obtaining a specific number of successes in a fixed number of draws, without replacement, from a finite population. Unlike other probability distributions such as the [binomial distribution](https://www.codecademy.com/resources/docs/data-science/data-distributions/binomial-distribution) which assumes sampling with replacement, the hypergeometric distribution accounts for how the probability changes with each selection as items are removed from the population.

The hypergeometric distribution is widely used in statistical sampling scenarios where the population size is finite and known. It's particularly valuable in quality control, survey sampling, genetic studies, and any situation where you need to calculate probabilities from a limited set of items without replacing them after selection.

## Applications of the Hypergeometric Distribution Model

The hypergeometric distribution finds applications in various real-world scenarios:

1. **Quality Control**: When inspecting a batch of products to determine if it meets quality standards by testing a sample.
2. **Survey Sampling**: When selecting individuals from a population for statistical analysis.
3. **Lottery and Card Games**: When calculating the probability of drawing specific cards from a deck or selecting winning numbers.
4. **Genetics and Biology**: When predicting inheritance patterns or specific trait distributions in populations.
5. **Auditing**: When financial auditors need to estimate the probability of finding errors in financial records.
6. **Election Polling**: When examining representation in randomly selected committees or jury pools.

## Formula and Parameters of Hypergeometric Distribution Model

The hypergeometric probability mass function is given by:

$$P(X = k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$$

Where:

- `N`: The total population size (the total number of items).
- `K`: The number of success states in the population (items with the desired characteristic).
- `n`: The number of draws (sample size).
- `k`: The number of successes in the sample (items with the desired characteristic).
- `C(a,b)`: The combination formula, representing the number of ways to choose b items from a set of a items.

The hypergeometric distribution returns the probability of obtaining exactly k successes in n draws from a population of N items containing K success states.

### Key Properties

- **Mean**: $$tex E(X) = n \times \frac{K}{N}$$
- **Variance**: $$tex Var(X) = n \times \frac{K}{N} \times \frac{N-K}{N} \times \frac{N-n}{N-1}$$
- **Mode**: Approximately $$tex \lfloor\frac{(n+1)(K+1)}{N+2}\rfloor$$

## Example 1: Drawing cards - Calculating the probability of getting aces

To understand the hypergeometric distribution, consider a classic example with a standard deck of cards. Suppose you want to find the probability of drawing exactly 2 aces when randomly selecting 5 cards from a deck.

In this scenario:

- N = 52 (total cards in the deck)
- K = 4 (total aces in the deck)
- n = 5 (cards drawn)
- k = 2 (number of aces we want to draw)

Applying the hypergeometric formula:

$$P(X = 2) = \frac{\binom{4}{2} \times \binom{48}{3}}{\binom{52}{5}}$$

Calculating each combination:

- C(4,2) = 6 (ways to select 2 aces from 4 aces)
- C(48,3) = 17,296 (ways to select 3 non-aces from 48 non-aces)
- C(52,5) = 2,598,960 (ways to select 5 cards from 52 cards)

$$P(X = 2) = \frac{6 \times 17,296}{2,598,960} = \frac{103,776}{2,598,960} \approx 0.0399$$

Therefore, the probability of drawing exactly 2 aces in a 5-card hand is approximately 0.0399 or about 4%.

This example demonstrates the hypergeometric distribution's usefulness in calculating probabilities in scenarios where each draw changes the composition of the remaining population.

## Example 2: Jury selection - Analyzing representation probabilities

Another practical application of the hypergeometric distribution is in analyzing jury representation. Suppose a jury pool consists of 30 people, with 15 men and 15 women. If we randomly select 8 people for a jury, what is the probability of having exactly 5 women?

For this scenario:

- N = 30 (total people in the jury pool)
- K = 15 (total women in the pool)
- n = 8 (size of the jury)
- k = 5 (desired number of women)

Using the hypergeometric distribution formula:

$$P(X = 5) = \frac{\binom{15}{5} \times \binom{15}{3}}{\binom{30}{8}}$$

Calculating:

- C(15,5) = 3,003 (ways to select 5 women from 15 women)
- C(15,3) = 455 (ways to select 3 men from 15 men)
- C(30,8) = 5,852,925 (ways to select 8 people from 30 people)

$$P(X = 5) = \frac{3,003 \times 455}{5,852,925} \approx 0.2335$$

The probability of having exactly 5 women is approximately 0.2335 or about 23.3%.

This example shows how the hypergeometric distribution can be used to analyze demographic representation in randomly selected groups.

## Example 3: Quality control - Detecting defective items

The hypergeometric distribution is particularly valuable in quality control and manufacturing settings. Consider a scenario where a manufacturer receives a shipment of 40 electronic components, and it's suspected that 8 of them might be defective. To test this, a quality control inspector randomly selects 8 components for testing.

What is the probability of finding exactly 3 defective components in the sample?

For this case:

- N = 40 (total components)
- K = 8 (potentially defective components)
- n = 8 (sample size for testing)
- k = 3 (number of defective components we want to find)

Using the hypergeometric distribution:

$$P(X = 3) = \frac{\binom{8}{3} \times \binom{32}{5}}{\binom{40}{8}}$$

Calculating:

- C(8,3) = 56 (ways to select 3 defective components from 8)
- C(32,5) = 201,376 (ways to select 5 good components from 32)
- C(40,8) = 76,904,685 (ways to select 8 components from 40)

$$P(X = 3) = \frac{56 \times 201,376}{76,904,685} \approx 0.1518$$

The probability of finding exactly 3 defective components in the sample is approximately 15.2%.

This application illustrates how the hypergeometric distribution helps businesses make informed decisions about quality control measures and sampling procedures.

## Hypergeometric Vs. Binomial Distributions

While both the hypergeometric and [binomial distributions](https://www.codecademy.com/resources/docs/data-science/data-distributions/binomial-distribution) describe the probability of successes in a series of trials, they differ in several key aspects:

| Characteristic         | Hypergeometric Distribution                                     | Binomial Distribution                               |
| ---------------------- | --------------------------------------------------------------- | --------------------------------------------------- |
| Sampling method        | Without replacement                                             | With replacement                                    |
| Probability of success | Changes after each draw                                         | Remains constant across all trials                  |
| Population size        | Finite                                                          | Very large or infinite relative to sample           |
| Trial independence     | Trials are dependent (each draw affects remaining population)   | Trials are independent                              |
| Formula                | P(X = k) = $\frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$ | P(X = k) = $\binom{n}{k} p^k (1-p)^{n-k}$           |
| Example scenarios      | Card draws, jury selection, quality control sampling            | Coin flips, dice rolls, repeated independent events |

Interestingly, as the population size (N) becomes very large relative to the sample size (n), the hypergeometric distribution approaches the binomial distribution. This is because the effect of removing items becomes negligible in large populations.

​For a deeper understanding of probability distributions, including the hypergeometric distribution, consider exploring Codecademy's [Fundamental Math for Data Science](https://www.codecademy.com/enrolled/paths/fundamental-math-for-data-science) course.

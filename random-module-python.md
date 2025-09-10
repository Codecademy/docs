# Random Module in Python

## How does the Random Module work in Python?
The `random` module is a python built in module that produces random numbers and produces random choices. It does this some of this through the **pseudo-random number generator**  and is great for functions and sequences. This is **not for cryptographic purposes**. 

**Key features of the `random` module**
- Generates random numbers
- Makes random choices 
- Useful for simulations and games

### Example #1:
This first example explores how the `random` module can be used to generate random numbers:

```python
# Import the random module
import random

# Print the random number
print(random.randint(1,10))
```

In this set of code we see the `random` module being imported into the code and then printing a random number using the built in  `randint` function. In this specific example, we are printing a random number between 1 and 10. This can then be linked to variables to make your code more complex and detailed.

### Example #2:
This second example explores how the `random` module can be used to pick a string at random:

```python
# Import the random module
import random

# Make a list of your random strings

random_strings = ["Hello World", "I am random", "I am also random"]

# Print your random word

print(random.choice(random_strings))
```
Here we see this a list being created with 3 random strings and a print statement printing out one of the random strings. The function that we use here is the `choice` function. These are the most common ways the `random` module is used in beginner friendly environments. 

## All functions in `random` module - cheatsheet
There are many different functions in the random module. That is why I am creating this cheat sheet. This will have most if not all pseudo-random functions that are commonly used in python. Each one is paired with it's proper syntax and definition.

### 1. Basic random numbers
**Function** - **Description**   
  
`random.random()` = Float in `[0.0, 1.0]`    

`random.uniform(a, b)` = Float in `[a, b]`   

`random.randint(a, b)` = Interger in `[a, b]`  
  
`random.randrange(start, stop[, step])` = Interger from `range(start, stop, step)`  

 `random.getrandbits(k)` = Interger with `k` random bits  

### 2. Seeding / state
**Function** - **Description**

`random.seed(a=None, version=2)` = Initialize the generator (same seed > same sequence) 
  
`random.getstate()` = Get the internal state of the generator  
  
`random.setstate(state)` = Restore a saved state

### 3. Working with Sequences
**Function** - **Description**
`random.choice(seq)` = Random element from a sequence   
  
`random.choices(population, weights=None, k=1)` = `k` random elemnts, with optional weights 
  
`random.shuffle(x)` = Shuffle a list in place  
  
`random.sample(population, k)` = `k` unique random elements

### 4. Continuous distributions 
**Function** - **Description**
`random.betavariate(alpha, beta)` = 	Beta distribution  
  

`random.expovariate(lambd)` = 	Exponential distribution  
  

`random.gammavariate(alpha, beta)` = 	Gamma distribution  
  
`random.gauss(mu, sigma)` = 	Gaussian/Normal distribution  
  

`random.lognormvariate(mu, sigma)` = 	Log-normal distribution
  
  `random.normalvariate(mu, sigma)` = 	Normal distribution
  
  `random.vonmisesvariate(mu, kappa)`	 = Von Mises distribution
  
  `random.paretovariate(alpha)` = 	Pareto distribution
  
  `random.weibullvariate(alpha, beta)` =  Weibull distribution
  
  `random.triangular(low, high, mode)` = 	Triangular distribution

### Notes

- For cryptographically secure randomnes, use the `secrets` module intsead.
- Use `random` for games, simulations, or sampling different data

- This document was created on September 9th 2025 so if any other functions were created past this date they are not included. I will try my best to update the doc and add in new features. 

Thank you for reading and happy **random** coding!!
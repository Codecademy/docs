---
Title: 'Hill Climbing'
Description: 'Hill climbing is a simple local search algorithm used in optimization problems. It is inspired by the metaphor of climbing a hill to reach the peak.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'Search'
  - 'Algorithms'
  - 'AI'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning-ai-engineering-foundations'
---

The **hill climbing** search algorithm is a local search algorithm used for optimization problems. It is designed to find the highest point or the best solution within a given search space by iteratively exploring neighboring solutions.

## Algorithm Overview

The hill climbing algorithm follows a simple iterative process to search for the best solution:

- Initialization: Start with an initial solution within the search space.
- Evaluation: Evaluate the quality of the current solution using an objective function or fitness measure.
- Neighbor Generation: Generate neighboring solutions by making small modifications to the current solution.
- Selection: Choose the best neighboring solution based on its objective function value.
- Comparison: Compare the objective function value of the best neighboring solution with the current solution.
- Iteration: Repeat the process until a termination condition is met.

## Usage

To use the hill climbing algorithm for your optimization problem, follow these steps:

- Step 1: Define the search space: Determine the range or domain of possible solutions for the problem.
- Step 2: Define the objective function: Create a function that measures the quality or fitness of a solution.
- Step 3: Initialization: Generate or select an initial solution within the search space.
- Step 4: Iterative process: Repeat the following steps until a termination condition is met:
  - Evaluate the current solution using the objective function.
  - Generate neighboring solutions by making small modifications to the current solution.
  - Select the best neighboring solution based on its objective function value.
  - Compare the objective function value of the best neighboring solution with the current solution.
  - If the neighboring solution is better, update the current solution. Otherwise, terminate the algorithm.
- Step 5: Termination condition: Define a condition to stop the algorithm, such as reaching a maximum number of iterations, achieving a specific threshold for the objective function value, or exceeding a time limit.

## Limitations

The hill climbing algorithm has certain limitations to keep in mind:

- Local Optima: It may get stuck in local optima, suboptimal solutions that are better than their neighbors but worse than the global optimum.
- Plateaus: It has difficulty navigating flat regions or plateaus where there are no uphill moves.
- Multiple Peaks: It may miss the global optimum if the search space has multiple peaks or valleys.
- Dependency on Initial solution: The quality of the final solution can be highly dependent on the initial solution chosen.

## Code Example

```pseudo
import random

def objective_function(solution):
    # Define your objective function here
    # This function should evaluate the quality of a solution and return a value
    # The higher the value, the better the solution
    # Modify this function based on your specific optimization problem
    return sum(solution)

def generate_neighbor(current_solution):
    # Generate a neighboring solution by making a small modification to the current solution
    # This function should implement the logic to generate a neighboring solution
    # Modify this function based on your specific optimization problem
    neighbor = current_solution[:]
    index = random.randint(0, len(neighbor) - 1)
    neighbor[index] = 1 - neighbor[index]  # Flip the value at the selected index
    return neighbor

def hill_climbing():
    # Initialization
    current_solution = [random.randint(0, 1) for _ in range(10)]  # Generate an initial solution
    current_fitness = objective_function(current_solution)

    # Iterative process
    while True:
        # Neighbor generation
        neighbor = generate_neighbor(current_solution)
        neighbor_fitness = objective_function(neighbor)

        # Comparison
        if neighbor_fitness >= current_fitness:
            current_solution = neighbor
            current_fitness = neighbor_fitness
        else:
            break  # Terminate if no better solution is found

    return current_solution, current_fitness

# Usage example
best_solution, best_fitness = hill_climbing()
print("Best Solution:", best_solution)
print("Best Fitness:", best_fitness)
```

Suppose there is a game where the best solution needs to be found in order to win. This code helps find that solution.

First, the code uses a special tool called [`random`](https://www.codecademy.com/resources/docs/python/random-module) to help make random choices. This will be useful later.

Next, a function called `objective_function()` determines how good a solution is. The function looks at the solution given to it and adds up all the parts. If the total is high, it means the solution is good.

Then, the `generate_neighbor()` function helps make small changes to a solution. It takes a solution and picks a random spot. It then either flips a switch there (from 0 to 1 or 1 to 0) or leaves it as it is. It's like changing one small thing in the solution.

Now is the main part, called `hill_climbing()`. This is where the magic happens! It starts by making a random solution with switches set to 0 or 1. Then, it asks the judge (the `objective_function()`) how good this solution is. This is the starting point.

The code then keeps making changes to the solution and checking with the judge how good the new solution is. If the new solution is better than the current one, it becomes the new solution. It does this repeatedly, always trying to find a better solution.

But, there is a rule: if the new solution is not better than the current one, it stops trying to find a better solution, meaning it has reached the top of the hill and can't climb any higher. It's like saying, "I tried my best, but this is as good as it gets."

Finally, when the code can't find any better solutions, it responds with the best solution it found and how good it is. It's like saying, "Hey, I found the best way to win the game! This is it, and it's really good!"

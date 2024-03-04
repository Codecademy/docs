---
Title: 'Simulated Annealing'
Description: 'An optimization algorithm used to solve problems where it is impossible or computationally expensive to find a global optimum. It evaluates many solutions each with a different score, and the goal of the algorithm is to find the best score.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Search Algorithms'
  - 'Machine Learning'
  - 'AI'
CatalogContent:
  - 'paths/data-science'
  - 'paths/machine-learning-ai-engineering-foundations'
---

**Simulated annealing** is an optimization algorithm used to solve problems where it is impossible or computationally expensive to find a global optimum. In these situations simulated annealing can often find an approximate global optimum that works well.

As the algorithm runs it employs a permissive evaluation process that will accept worse solutions in order to complete a comprehensive search of the solution space. And as the space is explored the algorithm slowly decreases the probability that worse solutions will be accepted. Each solution has a different score and the goal of the algorithm is to find the best score over the course of the search.

## The Implementation

- Simulated annealing begins by creating a trial point randomly, then the algorithm selects the distance between the current point and the trial point through a probability distribution.
- The algorithm then determines if the new point is better than the older point, or not. If the new point is better, it is set as the next point, but if the new point is worse, it can still be accepted depending on the evaluation function.
- The annealing parameters are set, raising and reducing the temperatures (the scale of such distribution from point to point) for lowering values. The simulated annealing concludes when it reaches the lowest minima or hits a given stopping criteria.

## Background

Simulated annealing is a probabilistic algorithm which tests points across a solution space to find the lowest minima. The algorithm is termed "simulated annealing" because it mirrors physical annealing, a process in which a material is repeatedly heated and cooled to elicit desired structural properties.

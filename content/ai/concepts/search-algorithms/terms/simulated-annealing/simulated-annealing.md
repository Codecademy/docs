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

**Simulated Annealing** An optimization algorithm, used to solve an optimization problems which can contain many different solutions by the process of slowly decreasing the probability of accepting worse solutions as the vast solution space is explored. Each solution has a different score and the goal of the algorithm is to find the best score over the course of the search.

## The Implementation
- Simulated annealing begins by creating a trial point randomly, then the algorithm selects the distance between the current point and the trial point through a probability distribution.
- The Simulated Annealing formula then determines if the new point is better than the older point or not. If the new point is better, it is made as a next point, but if the new point is worse, it can still be accepted depending on the acceptance function.
- The annealing parameters are set, raising and reducing the temperatures (the scale of such distribution from point to point) for lowering values. The simulated annealing is concluded when it reaches the lowest minima or hits a certain stopping criteria.

## Background
- Simulated annealing uses machine learning to constantly improve itself based on an algorithm which tests various points over and over to find the lowest minima. This is done via a similar process called physical annealing, the process through which a material is heated till the annealing temperature and then cooled down for the desired structure formation.
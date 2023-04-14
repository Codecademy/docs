---
Title: 'Greedy Best-First Search'
Description: 'Greedy best-first seach is an informed search algorithm where the evaluation function is strictly equal to the heuristic function.'
Subjects:
  - 'Data Science'
  - 'AI'
Tags:
  - 'Search Algorithms'
  - 'AI'
CatalogContent:
  - 'learn-python-3'
  - 'paths/machine-learning-ai-engineering-foundations'
---

**Greedy best-first search** is an informed search algorithm where the evaluation function is strictly equal to the heuristic function, disregarding the edge weights in a weighted graph. To get from one node to a target node, the lowest value resulting from some heuristic function, **h(x)**, is considered as the successive node to traverse to. The goal is to choose the quickest and shortest path to the target node.

## Evaluation Function

The evaluation function, **f(x)**, for the greedy best-first search algorithm is the following:

```pseudo
f(x) = h(x)
```

Here, the evaluation function is equal to the heuristic function. Since this search disregards edge weights, finding the lowest-cost path is uncertain.

### Heuristic Function

A heuristic function, **h(x)**, evaluates the successive node based on how close it lies to the target node. In other words, it chooses the immediate low-cost option. As this is the case, however, it does not necessarily find the shortest path to the goal.

Suppose a bot is trying to move from point A to point B. In greedy best-first search, the bot will choose to move to the position that brings it closest to the goal, disregarding if another position ultimately yields a shorter distance. In the case that there is an obstruction, it will evaluate the previous nodes with the shortest distance to the goal, and continuously choose the node that is closest to the goal.

## Example

Consider the following example of finding the path from **P** to **S** in the following graph:

![Greedy Best-first Search Example Graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/greedy-best-first-search-example-graph.png)

![Greedy Best-first Search 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/greedy-best-first-search-tree-1.png)

![Greedy Best-first Search 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/greedy-best-first-search-tree-2.png)

![Greedy Best-first Search 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/greedy-best-first-search-tree-3.png)

![Greedy Best-first Search Final Example Graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/greedy-best-first-search-final-example-graph.png)

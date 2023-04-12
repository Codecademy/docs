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

## Heuristic Function

A heuristic function evaluates the successive node based on how close it lies to the target node. However, it does not necessarily find the shortest path to the goal.

Suppose a bot is trying to move from point A to point B. In greedy best-first search, the bot will choose to move to the position that brings it closest to the goal, disregarding if another position ultimately yields a shorter distance. In the case that there is an obstruction, it will evaluate the previous nodes with the shortest distance to the goal, and continuously choose the node that is closest to the goal.

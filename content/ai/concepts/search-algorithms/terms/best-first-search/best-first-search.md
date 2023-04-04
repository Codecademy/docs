---
Title: 'Best-First Search'
Description: 'A graph searching algorithm that determines a path between nodes based on an evaluation function.'
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

**Best-first search** is a class of search algorithms that explores a graph (the graph can be weighted or unweighted) for a path from some start node to a goal node. These algorithms are known as informed search algorithms, meaning that they incorporate information regarding the location of the goal node relative to any other node. This information is quantified by an evaluation function denoted by _f(x)_. In a weighted graph, the evaluation function can combine information regarding the edge weights and some heuristic function, _h(x)_, that represents a measure from a node (_x_ in this case) to the goal node. When searching for the goal node, a BFS algorithm (not to be confused with breadth-first search) selects the node with the most promising value determined by the evaluation function.

## Evaluation Function

An evaluation function estimates the cost to reach the goal node from the current node. For example, consider the case of a robot having to navigate from point A (start state) to point B (goal state) in a room containing obstacles and obstructions. The robot can move one unit of length in the forward direction, backward direction, to the right, or to the left. The robot wishes to reach point B in the shortest possible time. What should the robot do? In this case, an evaluation function is defined as the straight-line distance (Euclidean distance) from any point in the room to point B ignoring all obstructions. The next position the robot chooses to move to will be the one with the shortest distance to point B. However, if there is an obstruction preventing this move, the robot will choose to move to the second-best position in the room. And if there is an obstruction there, the third-best and so on.

In a weighted graph, the total cost from the start node to the goal node is the sum of the cost of every visited edge along the path. The values from the evaluation function do not contribute to the total cost. They are only there to guide the search.

## Best-First Search Algorithms

The following is a list of Best-First search algorithms.

- Greedy Best-First Search: A search algorithm where the evaluation function is strictly equal to the heuristic function, disregarding the edge weights in a weighted graph.
- A\* Search: A search algorithm where the evaluation function takes into account the edge weights as well as the heuristic measure.
- BEAM Search: A search algorithm where, in a weighted graph, only the _n_ (in this case, _n_ is known as the beam width) most promising nodes are considered for further exploration.

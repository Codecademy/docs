---
Title: 'A* Search'
Description: 'An informed graph searching algorithm that efficiently determines a path between nodes based on an evaluation function.'
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

**A\* Search** is an informed best-first search algorithm that efficiently determines the lowest cost path between any two nodes in a directed weighted graph with non-negative edge weights. This algorithm is a variant of Dijkstra's algorithm. A slight difference arises from the fact that an evaluation function is used to determine which node to explore next. The algorithm is correct for the same reason as Dijkstra's algorithm.

## Evaluation Function

The evaluation function, _f(x)_, for the A\* search algorithm is the following:

```tex
f(x) = g(x) + h(x)
```

Where _g(x)_ represents the cost to get to node _x_ and _h(x)_ represents the estimated cost to arrive at the goal node from node _x_.

For the algorithm to generate the correct result, the evaluation function must be _admissible_, meaning that it never overestimates the cost to arrive at the goal node.

## The Algorithm

The A\* algorithm is implemented in a similar way to Dijkstra's algorithm. Given a weighted graph with non-negative edge weights, to find the lowest-cost path from a start node _S_ to a goal node _G_, two lists are used:

- An **open list**, implemented as a priority queue, which stores the next nodes to be explored. Because this is a priority queue, the most promising candidate node (the one with the lowest value from the evaluation function) is always at the top. Initially, the only node in this list is the start node _S_.
- A **closed list** which stores the nodes that have already been evaluated. When a node is in the closed list, it means that the lowest-cost path to that node has been found.

To find the lowest cost path, a search tree is constructed in the following way:

1. Initialize a tree with the root node being the start node _S_.
2. Remove the top node from the open list for exploration.
3. Add the current node to the closed list.
4. Add all nodes that have an incoming edge from the current node as child nodes in the tree.
5. Update the lowest cost to reach the child node.
6. Compute the evaluation function for every child node and add them to the open list.

Just like in Dijkstra's algorithm, the lowest cost is updated as the algorithm progresses in the following way:

```pseudo
current_lowest_cost = min(current_lowest_cost, parent_node_cost + edge_weight)
```

All nodes except for the start node start with a lowest cost of infinity. The start node has an initial lowest cost of 0.

The algorithm concludes when the goal node _G_ is removed from the open list and explored indicating that a shortest path has been found. The shortest path is the path from the start node _S_ to the goal node _G_ in the tree.

> Note: The algorithm ends when the goal node _G_ has been explored, NOT when it is added to the open list.

## Example

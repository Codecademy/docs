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

**A\* Search** is an informed [best-first search algorithm](https://www.codecademy.com/resources/docs/ai/search-algorithms/best-first-search) It evaluates the nodes by combining **g(n)** the exact cost to reach the node n from the starting point, and **h(n)** the (heuristic) approximate cost to get from 'n' to the goal.

**f(n)** = **h(n)** + **g(n)**
**g(n)** = The exact cost to reach node n from the starting node.
**h(n)** = The heuristic cost of the cheapest path from node n to the goal.
**f(n)** = Estimated cost of the cheapest solution from the starting point to the goal through n.

A* search is both complete and optimal given that **h(n)** should be **admissible**, meaning that it should never overestimate the cost to reach the goal, and **h(n)** must be **consistent**, i.e., it satisfies the triangle inequality.

## Evaluation Function

The evaluation function, **f(n)**, for the A\* search algorithm is the following:

```pseudo
f(n) = g(n) + h(n)
```

Where **g(n)** represents the cost to get to node **n** and **h(n)** represents the estimated cost to arrive at the goal node from node **n**.


## The Algorithm

The A\* algorithm is implemented in a similar way to Dijkstra's algorithm. Given a weighted graph with non-negative edge weights, to find the lowest-cost path from a start node **S** to a goal node **G**, two lists are used:

- An **open list**, implemented as a priority queue, which stores the next nodes to be explored. Because this is a priority queue, the most promising candidate node (the one with the lowest value from the evaluation function) is always at the top. Initially, the only node in this list is the start node **S**.
- A **closed list** which stores the nodes that have already been evaluated. When a node is in the closed list, it means that the lowest-cost path to that node has been found.

To find the lowest cost path, a search tree is constructed in the following way:

1. Initialize a tree with the root node being the start node **S**.
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

The algorithm concludes when the goal node **G** is removed from the open list and explored, indicating that a shortest path has been found. The shortest path is the path from the start node **S** to the goal node **G** in the tree.

> Note: The algorithm ends when the goal node **G** has been explored, NOT when it is added to the open list.

## Example

Consider the following example of trying to find the shortest path from **S** to **G** in the following graph:

![Example Graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-example-graph.png)

Each edge has an associated weight, and each node has a heuristic cost (in parentheses).

An open list is maintained in which the node **S** is the only node in the list. The search tree can now be constructed.

Exploring **S**:

![a-star-1](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-1.png)

**A** is the current most promising path, so it is explored next:

![a-star-2](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-2.png)

Exploring **D**:

![a-star-3](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-3.png)

Exploring **F**:

![a-star-4](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-4.png)

Notice that the goal node **G** has been found. However, it hasn't been explored, so the algorithm continues because there may be a shorter path to G. The node **B** has two entries in the open list: one at a cost of 16 (child of **S**) and one at a cost of 18 (child of **A**). The one with the lowest cost is explored next:

![a-star-5](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-5.png)

Exploring **C**:

![a-star-6](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-6.png)

The next node in the open list is again **B**. However, because **B** has already been explored, meaning a shortest path to **B** has been found, it is not explored again and the algorithm continues to the next candidate.

![a-star-7](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-7.png)

The next node to be explored is the goal node **G**, meaning the shortest path to **G** has been found! The path is constructed by tracing the graph backward from **G** to **S**:

![a-star-8](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-8.png)

## Using the A\* Algorithm

This algorithm is guaranteed to find a shortest path if one exists. One of the main uses of this algorithm is route planning. However, there are many other uses.

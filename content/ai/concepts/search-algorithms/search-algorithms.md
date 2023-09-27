---
Title: 'Search Algorithms'
Description: 'Search algorithms are a class of algorithms used to find an optimal solution to a problem by exploring a search space.'
Subjects:
  - 'Machine Learning'
  - 'Computer Science'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Graphs'
  - 'Graph Search'
CatalogContent:
  - 'paths/data-science'
---

A **search algorithm** is a type of algorithm used in artificial intelligence to find the best or most optimal solution to a problem by exploring a set of possible solutions, also called a search space. A search algorithm filters through a large number of possibilities to find a solution that works best for a given set of constraints.

Search algorithms typically operate by organizing the search space into a particular type of graph, commonly a tree, and evaluate the best score, or cost, of traversing each branch of the tree. A solution is a path from the start state to the goal state that optimizes the cost given the parameters of the implemented algorithm.

Search algorithms are typically organized into two categories:

- Uninformed Search: Algorithms that are general purpose traversals of the state space or search tree without any information about how good a state is. These are also referred to as blind search algorithms.

- Informed Search: Algorithms that have information about the goal during the traversal, allowing the search to prioritize its expansion toward the goal state instead of exploring directions that may yield a favorable cost but don't lead to the goal, or global optimum. By including extra rules that aid in estimating the location of the goal (known as heuristics) informed search algorithms can be more computationally efficient when searching for a path to the goal state.

## Types of Search Algorithms

There are many types of search algorithms used in artificial intelligence, each with their own strengths and weaknesses. Some of the most common types of search algorithms include:

### Depth-First Search (DFS)

This algorithm explores as far as possible along each branch before backtracking. DFS is often used in combination with other search algorithms, such as iterative deepening search, to find the optimal solution. Think of DFS as a traversal pattern that focuses on digging as deep as possible before exploring other paths.

### Breadth-First Search (BFS)

This algorithm explores all the neighbor nodes at the current level before moving on to the nodes at the next level. Think of BFS as a traversal pattern that tries to explore broadly across many different paths at the same time.

### Uniform Cost Search (UCS)

This algorithm expands the lowest cumulative cost from the start, continuing to explore all possible paths in order of increasing cost. UCS is guaranteed to find the optimal path between the start and goal nodes, as long as the cost of each edge is non-negative. However, it can be computationally expensive when exploring a large search space, as it explores all possible paths in order of increasing cost.

### Heuristic Search

This algorithm uses a heuristic function to guide the search towards the optimal solution. A\* search, one of the most popular heuristic search algorithms, uses both the actual cost of getting to a node and an estimate of the cost to reach the goal from that node.

## Application of Search Algorithms

Search algorithms are used in various fields of artificial intelligence, including:

### Pathfinding

Pathfinding problems involve finding the shortest path between two points in a given graph or network. BFS or A\* search can be used to explore a graph and find the optimal path.

### Optimization

In optimization problems, the goal is to find the minimum or maximum value of a function, subject to some constraints. Search algorithms such as hill climbing or simulated annealing are often used in optimization cases.

### Game Playing

In game playing, search algorithms are used to evaluate all possible moves and choose the one that is most likely to lead to a win, or the best possible outcome. This is done by constructing a search tree where each node represents a game state and the edges represent the moves that can be taken to reach the associated new game state.

The following algorithms have dedicated, more in-depth content:

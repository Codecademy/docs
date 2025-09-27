---
Title: 'Search Algorithms'
Description: 'Search algorithms are a class of algorithms used to explore a search space to find a solution, often with the goal of finding an optimal one.'
Subjects:
  - 'Computer Science'
  - 'Machine Learning'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Graph Search'
  - 'Graphs'
CatalogContent:
  - 'prompt-engineering-for-software-engineers'
  - 'paths/machine-learning-ai-engineering-foundations'
---

A **search algorithm** is a type of [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) used in artificial intelligence (AI) to find the best or most optimal solution to a problem by exploring a set of possible solutions, also called a search space. A search algorithm filters through a large number of possibilities to find a solution that works best for a given set of constraints.

Search algorithms typically operate by organizing the search space into a particular type of [graph](https://www.codecademy.com/resources/docs/general/graphs), commonly a tree, and evaluate the best score, or cost, of traversing each branch of the tree. A solution is a path from the start state to the goal state that optimizes the cost given the parameters of the implemented algorithm.

## Types of Search Algorithms

Search algorithms are typically organized into two categories:

- **Uninformed/Blind Search**: Algorithms that are general purpose traversals of the state space or search tree without any information about how good a state is.
- **Informed/Heuristic Search**: Algorithms that have information about the goal during the traversal, allowing the search to prioritize its expansion toward the goal state instead of exploring directions that may yield a favorable cost but don't lead to the goal, or global optimum.

## Uninformed/Blind Search Algorithms

Let's go through the different types of uninformed/blind search algorithms one-by-one.

### Depth-First Search (DFS)

This algorithm explores as far as possible along each branch before backtracking. DFS is often used in combination with other search algorithms, such as iterative deepening search, to find the optimal solution. Think of DFS as a traversal pattern that focuses on digging as deep as possible before exploring other paths.

### Breadth-First Search (BFS)

This algorithm explores all the neighbor nodes at the current level before moving on to the nodes at the next level. Think of BFS as a traversal pattern that tries to explore broadly across many different paths at the same time.

### Uniform Cost Search (UCS)

This algorithm expands the lowest cumulative cost from the start, continuing to explore all possible paths in order of increasing cost. UCS is guaranteed to find the optimal path between the start and goal nodes, as long as the cost of each edge is non-negative. However, it can be computationally expensive when exploring a large search space, as it explores all possible paths in order of increasing cost.

### Depth-Limited and Iterative Deepening Search

These are variations of DFS that limit exploration depth. Depth-limited search restricts how deep the search can go, while iterative deepening search repeatedly increases the depth limit. This balances completeness and efficiency while avoiding infinite loops.

## Informed/Heuristic Search Algorithms

Let's go through the different types of informed/heuristic search algorithms one-by-one.

### Greedy Best-First Search

This algorithm selects nodes based on the estimated cost to reach the goal. While it can be efficient, it does not guarantee finding the optimal path since it ignores the cost already incurred.

### A\* Search

A\* combines the actual path cost from the starting node with a heuristic estimate of the cost to reach the goal. When using an admissible heuristic (one that never overestimates), A\* is both complete and optimal, making it one of the most widely used informed search algorithms.

### Hill Climbing

This algorithm iteratively moves in the direction that seems best according to the heuristic function. While simple and memory-efficient, it can get stuck in local optima, plateaus, or ridges, preventing it from finding the global optimum.

### Iterative Deepening A\* (IDA\*)

This is a memory-efficient variant of A\* that uses depth-first exploration combined with heuristic guidance. It gradually increases the cost threshold, ensuring a balance between memory usage and optimality.

## Comparison of Search Algorithms

| Algorithm                       | Type       | Complete | Optimal | Time Complexity              | Space Complexity   | Notes                                                                |
| ------------------------------- | ---------- | -------- | ------- | ---------------------------- | ------------------ | -------------------------------------------------------------------- |
| Depth-First Search (DFS)        | Uninformed | No       | No      | O(b^m)                       | O(bm)              | Explores deep paths first; may get stuck in infinite branches.       |
| Breadth-First Search (BFS)      | Uninformed | Yes      | Yes\*   | O(b^d)                       | O(b^d)             | Finds shortest path in unweighted graphs; memory-intensive.          |
| Uniform Cost Search (UCS)       | Uninformed | Yes      | Yes     | O(b^(1 + ⌈C\*/ε⌉))           | O(b^(1 + ⌈C\*/ε⌉)) | Expands least-cost nodes; suitable for weighted graphs.              |
| Depth-Limited Search            | Uninformed | No       | No      | O(b^l)                       | O(bl)              | DFS with depth limit `l`; avoids infinite descent.                   |
| Iterative Deepening Search      | Uninformed | Yes      | Yes\*   | O(b^d)                       | O(bd)              | Combines BFS optimality and DFS space efficiency.                    |
| Greedy Best-First Search        | Informed   | Yes      | No      | O(b^m)                       | O(b^m)             | Uses heuristic only; fast but not guaranteed optimal.                |
| A\* Search                      | Informed   | Yes      | Yes     | O(b^d) (with good heuristic) | O(b^d)             | Balances path cost + heuristic; optimal with admissible heuristic.   |
| Hill Climbing                   | Informed   | No       | No      | Varies                       | Varies             | Moves toward best heuristic neighbor; can get stuck in local optima. |
| Iterative Deepening A\* (IDA\*) | Informed   | Yes      | Yes     | O(b^d)                       | O(bd)              | Memory-efficient A\* variant using iterative deepening.              |

> **Note:** The asterisk (\*) indicates that the corresponding search algorithm is optimal only if all step costs are equal (i.e., in unweighted graphs).

## Applications of Search Algorithms

- **Pathfinding**: Finds the shortest path in graphs or networks; BFS and A\* are commonly used.
- **Optimization**: Seeks minimum/maximum values under constraints; algorithms like hill climbing or simulated annealing are applied.
- **Game Playing**: Evaluates possible moves via search trees to choose the best strategy.
- **Planning and Scheduling**: Used in logistics, project management, and resource allocation to create efficient plans.

## Frequently Asked Questions

### 1. What is the most used search algorithm?

A\* is the most widely used search algorithm because it balances efficiency and accuracy. It uses both the path cost and a heuristic estimate, ensuring optimal solutions when the heuristic is admissible.

### 2. Why are searching algorithms used?

Search algorithms are used to explore problem spaces, find solutions, and make decisions. They help in tasks like pathfinding, optimization, planning, and game playing, enabling AI systems to operate intelligently.

### 3. Which search algorithm is faster?

The speed of a search algorithm depends on the problem and the available information. Greedy Best-First Search can be faster since it uses heuristics to guide the search, but it is not always optimal. A\*, while slightly slower, guarantees optimality with the right heuristic.

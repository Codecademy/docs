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

**A\* Search** is an informed [best-first search algorithm](https://www.codecademy.com/resources/docs/ai/search-algorithms/best-first-search) that efficiently determines the lowest cost path between any two nodes in a directed weighted graph with non-negative edge weights. This algorithm is a variant of Dijkstra's algorithm. A slight difference arises from the fact that an evaluation function is used to determine which node to explore next.

## Evaluation Function

The evaluation function, **f(x)**, for the A\* search algorithm is the following:

```pseudo
f(x) = g(x) + h(x)
```

Where **g(x)** represents the cost to get to node **x** and **h(x)** represents the estimated cost to arrive at the goal node from node **x**.

For the algorithm to generate the correct result, the evaluation function must be **admissible**, meaning that it never overestimates the cost to arrive at the goal node.

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

![Example Graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-example-graph_corrected.png)

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

The next node in the open list is again **B**. However, because **B** has already been explored, meaning the shortest path to **B** has been found, it is not explored again, and the algorithm continues to the next candidate.

![a-star-7](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-7.png)

The next node to be explored is the goal node **G**, meaning the shortest path to **G** has been found! The path is constructed by tracing the graph backwards from **G** to **S**:

![a-star-8](https://raw.githubusercontent.com/Codecademy/docs/main/media/a-star-tree-8.png)

## Using the A\* Algorithm

This algorithm is guaranteed to find the shortest path if one exists. One of the main uses of this algorithm is route planning, but there are many other uses.

## Example Code

Here is an example of the A\* algorithm implemented in Python that solves the above example graph:

```py
from heapq import heappop, heappush

def a_star_search(graph: dict, start: str, goal: str, heuristic_values: dict) -> int:
    '''
    A* search algorithm implementation.

    @param graph: The graph to search.
    @param start: The starting node.
    @param goal: The goal node.
    @param heuristic_values: The heuristic values for each node. The goal node must be admissible, and the heuristic value must be 0.
    @return: The path cost from the start node to the goal node.
    '''

    # A min heap is used to implement the priority queue for the open list.
    # The heapq module from Python's standard library is utilized.
    # Entries in the heap are tuples of the form (cost, node), ensuring that the entry with the lowest cost is always smaller during comparisons.
    # The heapify operation is not required, as the heapq module maintains the heap invariant after every push and pop operation.

    # The closed list is implemented as a set for efficient membership checking.

    open_list, closed_list = [(heuristic_values[start], start)], set()

    while open_list:
        cost, node = heappop(open_list)

        # The algorithm ends when the goal node has been explored, NOT when it is added to the open list.
        if node == goal:
            return cost

        if node in closed_list:
            continue

        closed_list.add(node)

        # Subtract the heuristic value as it was overcounted.
        cost -= heuristic_values[node]

        for neighbor, edge_cost in graph[node]:
            if neighbor in closed_list:
                continue

            # f(x) = g(x) + h(x), where g(x) is the path cost and h(x) is the heuristic.
            neighbor_cost = cost + edge_cost + heuristic_values[neighbor]
            heappush(open_list, (neighbor_cost, neighbor))

    return -1  # No path found

EXAMPLE_GRAPH = {
    'S': [('A', 4), ('B', 10), ('C', 11)],
    'A': [('B', 8), ('D', 5)],
    'B': [('D', 15)],
    'C': [('D', 8), ('E', 20), ('F', 2)],
    'D': [('F', 1), ('I', 20), ('H', 16)],
    'E': [('G', 19)],
    'F': [('G', 13)],
    'H': [('J', 2), ('I', 1)],
    'I': [('K', 13), ('G', 5), ('J', 5)],
    'J': [('K', 7)],
    'K': [('G', 16)]
}

# Node heuristic values (admissible heuristic values for the nodes)
EXAMPLE_HEURISTIC_VALUES = {
    'S': 7,
    'A': 8,
    'B': 6,
    'C': 5,
    'D': 5,
    'E': 3,
    'F': 3,
    'G': 0,
    'H': 7,
    'I': 4,
    'J': 5,
    'K': 3
}

EXAMPLE_RESULT = a_star_search(EXAMPLE_GRAPH, 'S', 'G', EXAMPLE_HEURISTIC_VALUES)
print(EXAMPLE_RESULT)
```

The code above produces the following output:

```shell
23
```

## Complexity Analysis

For time complexity, one might notice that each heappush corresponds to an edge, which would be the dominating complexity for most cases. Indeed, A\* is equivalent to Dijkstra's algorithm when the heuristic function is 0, and A\* is equivalent to Dijkstra's algorithm with reduced cost when the heuristic function is admissible i.e. `O(V+Elog(V))` time complexity.

However, a good heuristic function can drastically decrease A*'s complexity. The idea here is we need to look at exponentially fewer nodes with a better heuristic. So the time and space complexity are actually `O(b1^d)`, where b1 is the effective branching factor, i.e., an empirical average of neighboring nodes not in the closed list, and d is the search depth, i.e., optimal path length. The large space complexity is the biggest disadvantage of the A* search, giving rise to other algorithm variations.

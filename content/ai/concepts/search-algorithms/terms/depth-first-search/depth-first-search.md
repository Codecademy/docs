---
Title: 'Depth-First Search'
Description: 'A traversing algorithm for unweighted graphs.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Graphs'
  - 'Graph Search'
  - 'Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Depth-first search (DFS)** is a traversing algorithm for unweighted graphs.Like BFS (Breadth-first search), it is a foundational algorithm in [graph](https://www.codecademy.com/resources/docs/general/graph) theory from which many other algorithms begin.

## Features

Some of the features and constraints that define the use and functionality of the DFS algorithm include the following:
- DFS traverses a graph by following a given path as far as possible.Once a dead end is reached, the algorithm backtracks to explore the most recent unvisited neighbours.  A stack is used to remember how to get the next vertex to start a search, when a dead end is found in any iteration. 
- It can be a relatively simple algorithm that can be built upon for finding cycles within a graph, to conduct a topological sort of vertices, as well as a range of other useful applications.
- It has a time complexity of **O(|V| + |E|)**, which is the sum of the vertices and edges.
- It finds a solution but may or may not be optimal one as in BFS.
- The difference between DFS and BFS is that DFS takes less time than BFS and finds a solution.
- The disadvantage of DFS is that it may get stuck in infinite loop if depth is infinite.

## Implementation

The example below walks through a basic implementation of DFS that will take a starting node, an end node, and a graph as arguments. The algorithm will return the path it navigated between starting and end node provided.
The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until we find the goal node or the node with no children.
Because of the recursive nature of the traversal process, stack data structure can be used to implement the DFS algorithm.

The implementation below can be broken down into the following steps:

- First, create a stack with the total number of vertices in the graph.
- Now, choose any vertex as the starting point of traversal, and push that vertex into the stack.
- After that, push a non-visited vertex (adjacent to the vertex on the top of the stack) to the top of the stack.
- Now, repeat steps 3 and 4 until no vertices are left to visit from the vertex on the stack's top.
- If no vertex is left, go back and pop a vertex from the stack.
- Repeat steps 2, 3, and 4 until the stack is empty.

## Example:
https://raw.githubusercontent.com/Codecademy/docs/main/media/Depth-First-Search-Example.png

## code:
The following is an implementation in Python:

```python
#visited keepds record of visited nodes
def dfs(graph,start,goal,stack,visited):
    stack.append(start)
    visited.append(start)
    print('The path traversed is:')
    while stack:
        #pop from stack if visited 
        element=stack.pop()
        print(element,end=" ")
        if(element==goal):
            break
        for neighbor in graph[element]:
            if neighbor not in visited:
                stack.append(neighbor)
                visited.append(neighbor)
# A dictionary representing the illustrated graph 
graph={
    'A':['C','B'],
    'B':['E','D'],
    'C':['G','F'],
    'D':[],
    'E':['I','H'],
    'F':[],
    'G':['J'],
    'H':[],
    'I':[],
    'J':[]
}
start='A'
goal='J'
visited=[]
stack=[]

dfs(graph,start,goal,visited,stack)
```

```shell
The path traversed is:
A B D E H I C F G J >
```

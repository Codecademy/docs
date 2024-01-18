---
Title: 'Graphs'
Description: 'Graphs are a way of modeling systems based on a node and edge structure for representing the relationships between items.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conceptual'
  - 'Graphs'
  - 'Development'
CatalogContent:
  - 'learn-testing-for-web-development'
  - 'paths/full-stack-engineer-career-path'
---

**Graphs** are a way of modeling systems based on a node and edge structure for representing the relationships between items. There are many types of systems and problems that lend themselves to be represented through graphs, including social networks, street navigation or path finding, etc.

## Graph Types

Graphs are often classified by their structural characteristics, some common elements include the following:

- Directed: A graph in which the relationships between elements are not equivalent.
- Undirected: All of the connections are bidirectional: A to B is the same as B to A.
- Weighted: Edges in the graph have an associated cost.
- Acyclic: A graph that does not contain any cycles among any of the nodes. A cycle is a path which starts and ends at the same node. A tree is a common example of a directed acyclic graph: all the nodes in the graph have one orientation, parent to child.

## Data Structures

There are a few data structures typically used for implementing a graph. Each structure offers different benefits and constraints.

- Edge List: This is the simplest format, it consists of an unordered list of all edge pairs.
- Adjacency List: This is a simple and space-efficient format that maps all the edges of each node to a list.
- Adjacency Matrix: This format documents the adjacent or neighboring nodes in a matrix of size n x n (n equals the total number of nodes in the graph).

## Graph Algorithms

There are many well-known algorithms that have been developed for working with graphs, some of them include the following:

- Breadth First Search: A path-finding and mapping algorithm that relies on a layered approach to finding the next closest nodes within a graph.
- Dijkstra: This is a shortest-path algorithm that can be used on weighted graphs, but not on graphs that include negative weights.
- Bellman-Ford: Another shortest-path algorithm that is specifically designed for addressing graphs with negative weights.

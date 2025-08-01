---
Title: 'BEAM Search'
Description: 'A graph searching algorithm that is a variant of breadth-first search.'
Subjects:
  - 'AI'
  - 'Data Science'
Tags:
  - 'AI'
  - 'Algorithms'
  - 'Search Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**BEAM Search**, a variant of [breadth-first Search](https://www.codecademy.com/resources/docs/ai/search-algorithms/breadth-first-search), is an algorithm that searches a weighted graph for an optimal path from some start node **S** to some goal node **G**. The difference between BEAM search and breadth-first search is that at every level of the search tree, only the top _β_ candidates are chosen for further exploration. Here, β is known as the _beam width_. The reasoning behind this is that a path from **S** to **G** is likely to pass through some top number of most promising nodes. This leads to an algorithm that is fast and memory-efficient because it can disregard many nodes that may appear to be too far from the goal. This, however, sometimes causes the algorithm to overlook a potential shortest path because a candidate node is greater than the beam width. This renders the algorithm as _incomplete_, meaning that finding the shortest path is not guaranteed. Since the algorithm can find a reasonably short path, trading completeness for efficiency is accepted. Much like [A\* search](https://www.codecademy.com/resources/docs/ai/search-algorithms/a-star-search) and [best-first search](https://www.codecademy.com/resources/docs/ai/search-algorithms/best-first-search), an evaluation function is used to evaluate the candidacy of nodes for further exploration.

## How the Beam Search Algorithm Works

Similar to A\* search, the algorithm uses an **open list** and a **closed list** for the exploration of nodes. In this algorithm, the open list is an ordinary queue. The algorithm begins with a start node **S**, which also serves as the root node for the search tree.

1. Initialize a search tree with the root node being the start node **S**. This is level zero in the tree.
2. Add **S** to the closed list and evaluate all nodes adjacent to **S**.
3. Select the top β nodes and add them as child nodes to **S** in the tree. Disregard all other nodes.
4. Add the selected nodes to the **open list** for further exploration.
5. Remove all nodes in the **open list**. Once a node is removed from the **open list** for exploration, add it to the **closed list**.
6. Evaluate all adjacent nodes and sort them according to the evaluation function.
7. Select the top β nodes and add them to the tree, connecting them to their respective parent nodes.
8. Repeat this process until the goal node **G** is removed from the open list, indicating that a path has been found.

It is important to note that every level of the search tree contains at most β number of nodes.

## Example

Consider the following example of searching a graph from **S** to **G**. For simplicity, only the edge weights will be used for evaluation. A beam width of β = 2 will be used, meaning only the top two nodes are considered at every level.

![Example-graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-example-graph.png)

Initialize the tree and add **S** to the **closed list**:

![BEAM-Search-1](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-1.png)

**S** only has one adjacent node, so it is added to the tree:

![BEAM-Search-2](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-2.png)

Explore **I**. Nodes **N** and **H** are the top two nodes, so those are added to the tree:
![BEAM-Search-3](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-3.png)

Nodes **F** (adjacent to **H** in the graph) and **L** (adjacent to **N** in the graph) are next:
![BEAM-Search-4](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-4.png)

The incompleteness of this algorithm can be seen in this step. Node **G** has appeared in the **open list** but unfortunately, it has been eliminated by the beam width. Nodes **M** and **C** are next:
![BEAM-Search-5](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-5.png)

It is in this step that node **G** has been found:
![BEAM-Search-6](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-Tree-6.png)

Trace the path from **S** to **G**:
![Final-path](https://raw.githubusercontent.com/Codecademy/docs/main/media/BEAM-Search-final-path.png)

## Pseudocode for Beam Search Algorithm

```plaintext
function BEAM_SEARCH(start_node, goal_test, beam_width, max_depth):
    current_level ← [start_node]
    depth ← 0

    while current_level is not empty AND depth < max_depth:
        all_successors ← []

        // Generate all successors from current level
        for each node in current_level:
            if goal_test(node):
                return SUCCESS (node)

            successors ← get_successors(node)
            for each successor in successors:
                successor.score ← evaluation_function(successor)
                all_successors.append(successor)

        if all_successors is empty:
            return FAILURE

        // Sort all successors by their scores (best first)
        sorted_successors ← sort(all_successors, by=score, descending=True)

        // Keep only top beam_width candidates for next level
        current_level ← sorted_successors[0 : beam_width]
        depth ← depth + 1

    // Check final level for goal
    for each node in current_level:
        if goal_test(node):
            return SUCCESS (node)

    return FAILURE
```

## Advantages and Disadvantages of Beam Search

As stated before, the advantage of BEAM search is that it is efficient both in time and memory. The disadvantage can be seen from the example in that a possible shortest path from **S** to **G** was overlooked. This can be somewhat corrected by varying the beam width to include more nodes. This, however, would reduce the efficiency of the algorithm. Selecting the optimal beam width is problem-specific and usually requires further insight into the problem.

## Applications of BEAM Search

The BEAM search algorithm is commonly used in natural language processing and machine translation. An encoder is used to process the text from the source language and BEAM search selects the most probable words (the beam width) in the target language. The evaluation function in this context is the conditional probability of a word in the target language.

## Frequently Asked Questions

### 1. Is ChatGPT using beam search?

No, ChatGPT (and most large language models from OpenAI) doesn't use beam search during inference. It uses sampling-based decoding methods like top-k sampling, top-p (nucleus) sampling, or temperature-controlled sampling to generate text.

### 2. Where is beam search used?

Beam search is widely used in natural language processing (NLP) tasks where sequential predictions are needed:

- Machine translation (e.g., translating English to French)
- Speech recognition
- Text generation (in some models)
- Optical character recognition (OCR)

### 3. What are the benefits of beam search?

Beam search is faster and more memory-efficient than exhaustive search. It explores only the most promising paths, giving better results than greedy search while still being customizable through the beam width. However, it might miss the optimal path.

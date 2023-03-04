---
Title: 'Postorder Traversal'
Description: 'First traverses the left subtree, then the right subtree, and then the root.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Algorithms'
  - 'Conceptual'
  - 'Binary Tree'
  - 'Data Structures'
  - 'Search'
  - 'Trees'
CatalogContent:
  - 'complex-data-structures'
  - 'paths/computer-science'
---

**Postorder traversal** is a depth-first search [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) for a binary search tree that first traverses the left subtree, then the right subtree, and then the root. Its primary use is deleting the tree.

## Algorithm

The postorder algorithm can be described as follows:

```pseudo
Function Postorder(tree)
  return Postorder(left-subtree) + Postorder(right-subtree) + root
```

## Example

For the following binary search tree:

![Binary Search Tree Diagram](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree-labeled.png)

Postorder traversal provides the nodes in the following order: `1`, `3`, `2`, `5`, `7`, `6`, `4`.

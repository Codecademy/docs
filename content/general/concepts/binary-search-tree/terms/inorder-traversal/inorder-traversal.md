---
Title: 'Inorder Traversal'
Description: 'First traverses the left subtree, then the root, and then the right subtree.'
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

**Inorder traversal** is a depth-first search [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) for a binary search tree that first traverses the left subtree, then the root, then traverses the right subtree. This provides the nodes of the binary search tree in increasing order. To get nodes in decreasing order, inorder traversal can be done in reverse.

## Algorithm

The inorder algorithm can be described as follows:

```pseudo
Function Inorder(tree)
  return Inorder(left-subtree) + root + Inorder(right-subtree)
```

## Example

For the following binary search tree:

![Binary Search Tree Diagram](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree-labeled.png)

Inorder traversal provides the nodes in the following order: `1`, `2`, `3`, `4`, `5`, `6`, `7`.

---
Title: 'Preorder Traversal'
Description: 'First traverses the root, then the left subtree, and then the right subtree.'
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

**Preorder traversal** is a depth-first search [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) for a binary search tree that first traverses the root, then the left subtree, and then the right subtree. Its primary use is to create a copy of the tree.

## Algorithm

The preorder algorithm can be described as follows:

```pseudo
Function Preorder(tree)
  return root + Preorder(left-subtree) + Preorder(right-subtree)
```

## Example

For the following binary search tree:

![Binary Search Tree Diagram](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree-labeled.png)

Preorder traversal provides the nodes in the following order: `4`, `2`, `1`, `3`, `6`, `5`, `7`.

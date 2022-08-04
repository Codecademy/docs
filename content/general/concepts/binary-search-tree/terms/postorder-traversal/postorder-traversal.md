---
Title: 'Postorder Traversal'
Description: 'A method of traversing a binary search tree by first traversing the left subtree, then traversing the right subtree, then the root.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Conceptual'
  - 'Binary Tree'
  - 'Data Structures'
CatalogContent:
  - 'complex-data-structures'
  - 'paths/computer-science'
---

**Postorder traversal** is a method of traversing a binary search tree by first traversing the left subtree, then traversing the right subtree, then the root. Its primary use is deleting the tree.

## Algorithm

The postorder algorithm can be described as follows:

```pseudo
Function Postorder(tree)
  return Postorder(left-subtree) + Postorder(right-subtree) + root
```

## Example

For the following binary search tree:

![Binary Search Tree](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree.png 'Binary Search Tree Diagram')

Postorder traversal provides the nodes in the following order: `1`,`3`,`2`,`5`,`7`,`6`,`4`.

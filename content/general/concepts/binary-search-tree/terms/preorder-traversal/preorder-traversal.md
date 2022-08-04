---
Title: 'Preorder Traversal'
Description: 'A method of traversing a binary search tree by first traversing the root, then traversing the left subtree, then traversing the right subtree.'
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

**Preorder traversal** is a method of traversing a binary search tree by first traversing the root, then traversing the left subtree, then traversing the right subtree. Its primary use is to create a copy of the tree.

## Algorithm

The preorder algorithm can be described as follows:

```pseudo
Function Preorder(tree)
  return root + Preorder(left-subtree) + Preorder(right-subtree)
```

## Example

For the following binary search tree:

![Binary Search Tree](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree.png 'Binary Search Tree Diagram')

Preorder traversal provides the nodes in the following order: `4`,`2`,`1`,`3`,`6`,`5`,`7`.

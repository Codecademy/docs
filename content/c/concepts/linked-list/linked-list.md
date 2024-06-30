---
Title: 'Linked List'
Description: 'Linked list is a type of data structure in which elements are not sequentially stored but are randomly spread in memory.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Linked Lists'
  - 'Pointers'
  - 'Memory'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **`linked list`** is a type of linear data structure in which elements are not sequentially stored but are randomly spread in memory consisting of small units called `node`. These units connect and point to other nodes to create a linked list. A node is the smallest unit of the linked list, responsible for storing two different types of values first is the value we are storing, which can be of any data type, and the second is a pointer used for storing the address of the next node.

The structure of a node is shown in the below image.

![Linked list node](https://raw.githubusercontent.com/Codecademy/docs/main/media/linked-list-node.png)

So the node consist of two parts:

- `data`: The data that will be stored, this can be of any data type present in `C`.
- `next`: This is a `pointer` that is used to store the address of a different node.

When nodes are connected to each other a linked list is formed like shown below.

![Singular linked list](https://raw.githubusercontent.com/Codecademy/docs/main/media/singular-linked-list.png)

So the linked consist to parts:

- `head`: The first node of the linked list.
- `tail`: The last node of the linked list.

There are four types of linked list:

- Singly Linked List
- Doubly Linked List
- Circular Linked List
- Doubly Circular linked list

---
Title: 'Linked List'
Description: 'Linked list is a type of data structure in which elements are not sequentially stored but are randomly spread in memory.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Linked Lists'
  - 'Memory'
  - 'Pointers'
  - 'Variables'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **linked list** is a type of linear data structure in which elements are not stored sequentially but are dynamically allocated in memory, consisting of small units called nodes. These units connect and point to other nodes to create a linked list.

The structure of a node is illustrated below:

![Linked list node](https://raw.githubusercontent.com/Codecademy/docs/main/media/linked-list-node.png)

Each node in a linked list has two parts:

- `data`: It stores the value, which can be of any data type.
- `next`: A pointer that stores the memory address of the next node in the sequence.

When nodes are connected to one other, a linked list is formed, as shown below:

![Singular linked list](https://raw.githubusercontent.com/Codecademy/docs/main/media/singular-linked-list.png)

A linked list consists of two key components:

- `Head`: The first node in the linked list.
- `Tail`: The last node in the linked list, which points to `NULL` in a singly linked list.

There are four types of linked list:

- Singly Linked List: Each node points to the next node and the last node points to NULL.
- Doubly Linked List: Each node has two pointers, one to the next node and one to the previous node.
- Circular Linked List: The last node points back to the first node, forming a circular structure.
- Doubly Circular Linked List: Combines the features of both doubly and circular linked lists, where each node has two pointers and the last node points back to the first node, forming a circular structure.

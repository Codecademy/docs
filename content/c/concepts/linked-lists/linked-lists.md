---
Title: 'Linked Lists in C'
Description: 'In C language, a linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the list.'
Subjects:
  - 'Code Foundations'
  - 'Data Structures'
Tags:
  - 'Linked Lists'
  - 'C Programming'
CatalogContent:
  - 'learn-c'
  - 'paths/data-structures'
---

In C, a linked list is a collection of nodes where each node contains a data element and a reference (or link) to the next node in the sequence.

## Creating a Linked List

To create a linked list, you define a structure for the nodes:

```c
struct Node {
    int data;
    struct Node* next;
};
```

Here, `data` stores the value, and `next` points to the next node in the list.

## Initializing a Linked List

```c
struct Node* head = NULL;
```

This initializes an empty linked list.

## Inserting Elements

To insert elements (for example, adding a new node with value `value` to the beginning of the list):

```c
struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
newNode->data = value;
newNode->next = head;
head = newNode;
```

This creates a new node, assigns its value, and makes it the new head of the list.

## Accessing Elements

To access elements, you traverse the list:

```c
struct Node* current = head;
while (current != NULL) {
    printf("%d ", current->data);
    current = current->next;
}
```

This prints the elements of the linked list.

## Example

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;

    // Insert elements
    for (int i = 1; i <= 5; ++i) {
        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = i;
        newNode->next = head;
        head = newNode;
    }

    // Print elements
    struct Node* current = head;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }

    // Output: 5 4 3 2 1

    // Remember to free allocated memory for nodes
    current = head;
    while (current != NULL) {
        struct Node* temp = current;
        current = current->next;
        free(temp);
    }

    return 0;
}
```

This code creates a linked list from 1 to 5 and then prints the elements in reverse order. Don't forget to free the allocated memory for each node to prevent memory leaks.
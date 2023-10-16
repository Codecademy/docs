---
Title: 'Linked Lists'
Description: 'In computer science, a linked list is a linear data structure consisting of a sequence of elements where each element points to the next element in the sequence.'
Subjects:
  - 'Code Foundations'
  - 'Data Structures'
  - 'Computer Science'
Tags:
  - 'Linked Lists'
  - 'Pointers'
  - 'Data Management'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In the C language, a linked list is a fundamental data structure used for organizing and storing data.

## Introduction to Linked Lists

A linked list is made up of nodes, where each node contains a data element and a reference (or pointer) to the next node in the sequence. The last node's pointer typically points to null, indicating the end of the list. This structure allows for efficient insertion and deletion operations.

## Declaring a Linked List Node

To create a linked list in C, you first need to define a structure for the nodes:

```c
struct Node {
    int data;
    struct Node* next;
};
```

Here, `data` stores the value of the node, and `next` is a pointer to the next node in the list.

## Creating a Linked List

Creating a linked list involves dynamically allocating memory for nodes and linking them together. Here's an example of creating a linked list with three nodes:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    // Creating nodes
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    // Linked list: 1 -> 2 -> 3
    return 0;
}
```

## Basic Operations on Linked Lists

### Insertion

#### Insert at the Beginning

```c
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}
```

#### Insert at the End

```c
void insertAtEnd(struct Node* head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    
    while (head->next != NULL) {
        head = head->next;
    }
    head->next = newNode;
}
```

### Deletion

#### Delete from the Beginning

```c
void deleteFromBeginning(struct Node** head) {
    if (*head == NULL) {
        return;
    }
    struct Node* temp = *head;
    *head = (*head)->next;
    free(temp);
}
```

#### Delete from the End

```c
void deleteFromEnd(struct Node* head) {
    if (head == NULL || head->next == NULL) {
        return;
    }
    while (head->next->next != NULL) {
        head = head->next;
    }
    free(head->next);
    head->next = NULL;
}
```

## Example Usage

Creating a linked list and performing operations:

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}

void display(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;

    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 2);
    insertAtBeginning(&head, 1);

    printf("Linked List: ");
    display(head);

    return 0;
}
```

Output:
```
Linked List: 1 -> 2 -> 3 -> NULL
```

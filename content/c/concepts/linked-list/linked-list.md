---
Title: 'Linked List'
Description: 'A data structure that contains a collection of nodes that together with the help of pointers, display a sequence.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Singly linked lists'
  - 'Doubly linked lists'  
  - 'Circular linked lists'
  - 'Circular doubly linked lists'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **`Linked List`** is a data structure that contains a collection of `nodes` that together with the help of pointers, display a sequence. There are several list types, four of the most common are discussed below.

## Syntax

```pseudo
#include <stdio.h>

typedef struct Node {
    void* data;
    struct Node *next;
} Node;
- //push to the front of the list
struct Node* push(struct Node* head, void* data) {
  struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = head;
  return new_node;
}
int main(){
  Node* list = NULL;
-    //remember to set the list after push
  list = push(list, "!");
  list = push(list, "World ");
  list = push(list, "Hello ");
-    //print out the elements
  Node* crnt = list;
  while(crnt != NULL){
      printf("%s", crnt->data);
      crnt = crnt->next;
  }
  return 0;
}
```

## Example

The following C code showcases the creation and traversal of a linked list, which is comprised of a series of nodes with integer values of 10, 20, and 30. The nodes are connected continuously from head to tail displaying the elements of the linked list.

```c
#include <stdio.h>

int main()
{
  //node structure
  struct node
  {
      int data;
      struct node *next;
  };

  //declaring nodes
  struct node *head,*middle,*last;

  //allocating memory for each node
  head   = malloc(sizeof(struct node));
  middle = malloc(sizeof(struct node));
  last   = malloc(sizeof(struct node));

  //assigning values to each node
  head->data   = 10;
  middle->data = 20;
  last->data   = 30;

  //connecting each nodes. head->middle->last
  head->next   = middle;
  middle->next = last;
  last->next   = NULL;

  //temp is a reference for the head pointer.
  struct node *temp = head;

  //till the node becomes null, printing each node's data
  while(temp != NULL)
  {
      printf("%d->",temp->data);
      temp = temp->next;
  }
  printf("NULL");

  return 0;
}
```

### Singly-linked lists

A `singly linked` list is a collection of data called `nodes`, where each `node` is divided into two parts to store `data` and `address` at some random addresses. The pointer next points to the address of the next `node` in a list.

```c
#include <stdio.h>

struct node {
  int data;
  struct node *next;
};

void main() {
  struct node *head = NULL;
  struct node *current = NULL;
  int i;

  for (i = 0; i < 5; i++) {
    struct node *new_node = malloc(sizeof(struct node));
    new_node->data = i;
    new_node->next = NULL;

    if (head == NULL) {
      head = new_node;
      current = new_node;
    } else {
      current->next = new_node;
      current = new_node;
    }
  }

  while (head != NULL) {
    printf("%d\n", head->data);
    head = head->next;
  }
}
```

### Doubly linked lists

A `doubly linked list` consists of two pointers that store the address of the next successive `node` and the `address` of the previous node.

```c
#include <stdio.h>

struct node {
  int data;
  struct node *next;
  struct node *prev;
};

void insert_at_beginning(struct node **head, int data) {
  struct node *new_node = (struct node *)malloc(sizeof(struct node));
  new_node->data = data;
  new_node->next = *head;
  new_node->prev = NULL;
  if (*head != NULL) {
    (*head)->prev = new_node;
  }
  *head = new_node;
}

void insert_at_end(struct node **head, int data) {
  struct node *new_node = (struct node *)malloc(sizeof(struct node));
  new_node->data = data;
  new_node->next = NULL;
  new_node->prev = *head;
  if (*head != NULL) {
    (*head)->next = new_node;
  }
  *head = new_node;
}

void print_list(struct node *head) {
  while (head != NULL) {
    printf("%d ", head->data);
    head = head->next;
  }
  printf("\n");
}

int main() {
  struct node *head = NULL;
  insert_at_beginning(&head, 1);
  insert_at_beginning(&head, 2);
  insert_at_end(&head, 3);
  insert_at_end(&head, 4);
  print_list(head);
  return 0;
}
```

### Circular linked lists

A `circular linked` list is a list in which the nodes are connected in a sequence, where the last node always points to the head (first) node of the `linked list`.

```c
#include <stdio.h>

struct node {
  int data;
  struct node *next;
};

struct node *head = NULL;

void insert(int data) {
  struct node *newNode = (struct node *)malloc(sizeof(struct node));
  newNode->data = data;
  newNode->next = NULL;

  if (head == NULL) {
    head = newNode;
    newNode->next = head;
  } else {
    struct node *temp = head;
    while (temp->next != head) {
      temp = temp->next;
    }
    temp->next = newNode;
    newNode->next = head;
  }
}

void print() {
  struct node *temp = head;
  while (temp->next != head) {
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("%d ", temp->data);
  printf("\n");
}

int main() {
  insert(1);
  insert(2);
  insert(3);
  print();
  return 0;
}
```

### Circular doubly linked lists

A `circular doubly linked list` is a data structure that consists of a collection of nodes, where each node contains a data element and two pointers: one that points to the next node in the list and another that points to the previous node in the list.

```c
#include <stdio.h>
#include <stdlib.h>

struct node {
  int data;
  struct node *next;
  struct node *prev;
};

void insert_at_begin(struct node **head, struct node *new_node) {
  if (*head == NULL) {
    *head = new_node;
    new_node->next = new_node;
    new_node->prev = new_node;
  } else {
    new_node->next = *head;
    new_node->prev = (*head)->prev;
    (*head)->prev = new_node;
    *head = new_node;
  }
}

void insert_at_end(struct node **head, struct node *new_node) {
  if (*head == NULL) {
    *head = new_node;
    new_node->next = new_node;
    new_node->prev = new_node;
  } else {
    new_node->prev = (*head)->prev;
    (*head)->prev = new_node;
    new_node->next = *head;
    *head = new_node;
  }
}

void print_list(struct node *head) {
  struct node *current = head;
  if (head == NULL) {
    printf("List is empty.\n");
    return;
  }
  do {
    printf("%d ", current->data);
    current = current->next;
  } while (current != head);
  printf("\n");
}

int main() {
  struct node *head = NULL;
  int data;

  while (1) {
    printf("Enter data: ");
    scanf("%d", &data);
~
    if (data == -1) {
      break;
    }

    struct node *new_node = malloc(sizeof(struct node));
    new_node->data = data;
    new_node->next = NULL;
    new_node->prev = NULL;

    int choice;
    printf("Enter choice (1: insert at beginning, 2: insert at end): ");
    scanf("%d", &choice);

    if (choice == 1) {
      insert_at_begin(&head, new_node);
    } else if (choice == 2) {
      insert_at_end(&head, new_node);
    }
  }

  printf("List: ");
  print_list(head);

  return 0;
}
```

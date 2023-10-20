---
Title: 'Linked Lists in C'
Description: 'A comprehensive guide to linked lists in the C programming language.'
Subjects:
  - 'Computer Science'
  - 'Data Structures'
Tags:
  - 'C Programming'
  - 'Linked Lists'
CatalogContent:
  - 'learn-c'
  - 'data-structures'
---

# Linked Lists in C
`Linked List` is a linear data structure, in which elements are not stored at a contiguous location,
rather they are linked using pointers. Linked List forms a series of connected nodes, where each node 
stores the data and the address of the next node. 

## Why linked list data structure needed?
Here are a few advantages of a linked list that is listed below, it will help you understand why it is necessary to know.
- **Dynamic Data structure:** The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion.
- **Ease of Insertion/Deletion:** The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated.
- **Efficient Memory Utilization:** As we know Linked List is a dynamic data structure the size increases or decreases as per the requirement so this avoids the wastage of memory. 
- **Implementation:** Various advanced data structures can be implemented using a linked list like a stack, queue, graph, hash maps, etc.
```pseudo
In a system, if we maintain a sorted list of IDs in an array id[] = [1000, 1010, 1050, 2000, 2040]. 

If we want to insert a new ID 1005, then to maintain the sorted order,
we have to move all the elements after 1000 (excluding 1000). 

Deletion is also expensive with arrays until unless some special techniques are used.
For example, to delete 1010 in id[],everything after 1010 has to be moved due to thisso much work is being
done which affects the efficiency of the code.
```

## Node Structure

In C, linked lists are typically implemented using nodes. Each node consists of two parts:

- `Data`: This part holds the actual data or value. The data type can vary (e.g., int, char, custom structs).
- `Next Pointer`: This pointer points to the next node in the list, forming the linkage.
- `Head and Tail`: The linked list is accessed through the head node, which points to the first node in the list.
The last node in the list points to NULL or nullptr, indicating the end of the list. This node is known as the tail node.
```pseudo
struct Node {
    int data;           // Data can be of any C data type
    struct Node* next;  // Points to the next node
}
```
For example:
```c
struct Node {
    int data;           // Data can be of any C data type
    struct Node* next;  // Points to the next node
};
```
The output would be:
```shell
No output is expected for the node structure.
```

## Creating a Node

To work with a linked list, you first need to create `nodes` to store data. Here's how you can create a node in C:

```pseudo
struct Node* createNode(int data) {
    // Pseudocode for creating a new node
}
```
For example:
```c
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode is NULL) {
        // Handle memory allocation error
        printf("Error: Memory allocation failed.\n");
    } else {
        newNode->data = data;
        newNode->next = NULL;
        printf("Created a new node with data: %d\n", data);
    }
    return newNode;
}
```
The output would be:
```shell
Created a new node with data: 1
Created a new node with data: 2
Created a new node with data: 3
```
## Inserting at the Beginning

A common operation in linked lists is to add a new `node` to the beginning of the list. Here's how you can do it:

```pseudo
void insertAtBeginning(struct Node** head, int data) {
    // Pseudocode for inserting a new node at the beginning
}
```
For example:
```c
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = createNode(data);
    if (newNode != NULL) {
        newNode->next = *head;
        *head = newNode;
        printf("Inserted data %d at the beginning.\n", data);
    } else {
        printf("Insertion failed. Node creation error.\n");
    }
}
```
The output would be:
```shell
Inserted data 1 at the beginning.
Inserted data 2 at the beginning.
Inserted data 3 at the beginning.
```
## Displaying the Linked List

To visualize the contents of a `linked list`, you can traverse the list and print the data in each `node`. Here's a function to do that:

```pseudo
void displayList(struct Node* head) {
    // Pseudocode for displaying the linked list
}
```
For example:
```c
void displayList(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}
```
The output would be:
```shell
1 -> 2 -> 3 -> NULL
```
## Deleting a Node

To remove a `node` from a linked list, you need to update the `next pointer` 
of the previous node to skip the node you want to delete. Here's how you can do it:

```pseudo
void deleteNode(struct Node** head, int data) {
    // Pseudocode for deleting a node
}
```
For example:
```c
void deleteNode(struct Node** head, int data) {
    struct Node* current = *head;
    struct Node* previous = NULL;

    while (current != NULL && current->data != data) {
        previous = current;
        current = current->next;
    }

    if (current == NULL) {
        printf("Node with data %d not found.\n", data);
    } else {
        if (previous == NULL) {
            *head = current->next;
        } else {
            previous->next = current->next;
        }
        free(current);
        printf("Deleted node with data: %d\n", data);
    }
}
```
The output would be:
```shell
Deleted node with data: 2
```
## Example Usage

Here's an example of how to use these `functions` to create, modify, and display a `linked list`:

For example:
```c
int main() {
    struct Node* head = NULL;

    insertAtBeginning(&head, 3);
    insertAtBeginning(&head, 2);
    insertAtBeginning(&head, 1);

    printf("Linked List After Insertions:\n");
    displayList(head);

    deleteNode(&head, 2);
    printf("Linked List After Deletion:\n");
    displayList(head);

    return 0;
}
```
The output would be:
```shell
Inserted data 3 at the beginning.
Inserted data 2 at the beginning.
Inserted data 1 at the beginning.
Linked List After Insertions:
1 -> 2 -> 3 -> NULL
Deleted node with data: 2
Linked List After Deletion:
1 -> 3 -> NULL
```

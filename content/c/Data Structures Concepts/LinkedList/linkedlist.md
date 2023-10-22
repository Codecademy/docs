
# Singly Linked List in C

A singly linked list is a data structure that consists of a sequence of elements, where each element points to the next element in the sequence. Here is an example of a singly linked list implemented in C:

## Node Structure

```c
typedef struct Node {
    int data;
    struct Node* next;
} Node;
```

## Linked List Structure

```c
typedef struct LinkedList {
    Node* head;
} LinkedList;
```

## Initialize a Linked List

To initialize a new linked list, you can create an empty list with a NULL head:

```c
LinkedList* createLinkedList() {
    LinkedList* list = (LinkedList*)malloc(sizeof(LinkedList));
    list->head = NULL;
    return list;
}
```

## Insert at the Beginning

To insert a new node at the beginning of the list, you can create a new node and update the `head`:

```c
void insertAtBeginning(LinkedList* list, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = list->head;
    list->head = newNode;
}
```

## Print the Linked List

To print the linked list, you can traverse the list from the head node to the end:

```c
void printLinkedList(LinkedList* list) {
    Node* current = list->head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}
```

## Example Usage

```c
int main() {
    LinkedList* list = createLinkedList();
    insertAtBeginning(list, 3);
    insertAtBeginning(list, 2);
    insertAtBeginning(list, 1);
    printLinkedList(list);
    return 0;
}
```

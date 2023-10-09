---
Title: 'Trie'
Description: 'A Trie data structure is used for storing and retrieval of data and the same operations could be done using another data structure which is Hash Table but Trie can perform these operations more efficiently than a Hash Table.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'trie'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---


A **Trie** is a dynamic list of items that can shrink and grow in size. It can only store values of the same [data type](https://www.codecademy.com/resources/docs/cpp/data-types).

## Syntax
```pseudo 

struct TrieNode { 
    struct TrieNode* children[ALPHABET_SIZE]; 
  
    // This will keep track of number of strings that are 
    // stored in the Trie from root node to any Trie node. 
    int wordCount = 0; 
};

To use Trie it is necessary to create this class.

## Insertion

To insert an element the process is as followed 

void insert_key(TrieNode* root, string& key) 
{ 
    // Initialize the currentNode pointer 
    // with the root node 
    TrieNode* currentNode = root; 
  
    // Iterate across the length of the string 
    for (auto c : key) { 
  
        // Check if the node exist for the current 
        // character in the Trie. 
        if (currentNode->childNode == NULL) { 
  
            // If node for current character does not exist 
            // then make a new node 
            TrieNode* newNode = new TrieNode(); 
  
            // Keep the reference for the newly created 
            // node. 
            currentNode->childNode = newNode; 
        } 
  
        // Now, move the current node pointer to the newly 
        // created node. 
        currentNode = currentNode->childNode; 
    } 
  
    // Increment the wordEndCount for the last currentNode 
    // pointer this implies that there is a string ending at 
    // currentNode. 
    currentNode->wordCount++; 
} 

here we have created a function `insert-key`  to inset an element to the `trie` which we have created.

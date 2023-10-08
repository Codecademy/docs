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

## Syntax
struct TrieNode { 
    struct TrieNode* children[ALPHABET_SIZE]; 
  
    // This will keep track of number of strings that are 
    // stored in the Trie from root node to any Trie node. 
    int wordCount = 0; 
};

## insertion 

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

## searching

bool isPrefixExist(TrieNode* root, string& key) 
{ 
    // Initialize the currentNode pointer 
    // with the root node 
    TrieNode* currentNode = root; 
  
    // Iterate across the length of the string 
    for (auto c : key) { 
  
        // Check if the node exist for the current 
        // character in the Trie. 
        if (currentNode->childNode == NULL) { 
            
            // Given word as a prefix does not exist in Trie 
            return false; 
        } 
  
        // Move the currentNode pointer to the already  
        // existing node for current character. 
        currentNode = currentNode->childNode; 
    } 
   
      // Prefix exist in the Trie 
    return true; 
}
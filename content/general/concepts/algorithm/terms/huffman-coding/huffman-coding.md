---
Title: 'Huffman Coding'
Description: 'A lossless data compression algorithm that assigns variable-length codes to input characters based on their frequencies.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Algorithms'
  - 'Data Structures'
  - 'Search Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Huffman coding** is a popular algorithm for lossless data compression that assigns variable-length codes to input characters based on their frequencies. Characters that appear more frequently in the data are assigned shorter codes, while less frequent characters receive longer codes. This approach minimizes the overall space required to represent the original data.

The algorithm was developed by David A. Huffman in 1952 while he was a Ph.D. student at MIT. It has since become a fundamental technique in information theory and is used in many compression formats and transmission protocols.

## How Huffman Coding Works

Huffman coding works through the following steps:

- Frequency Analysis: Count the frequency of each character in the input data.
- Build the Huffman Tree:
  - Create a leaf node for each character and add it to a priority queue, with priority based on frequency (lower frequency = higher priority).
  - While there is more than one node in the queue:
    - Remove the two nodes with the highest priority (lowest frequency).
    - Create a new internal node with these two nodes as children, with a frequency equal to the sum of both nodes' frequencies.
    - Add the new node back to the priority queue.
  - The remaining node is the root of the Huffman tree.
- Generate Huffman Codes:
  - Traverse the tree from the root to each leaf.
  - Assign '0' for a left branch and '1' for a right branch.
  - The code for each character is the sequence of 0s and 1s on the path from the root to the character's leaf node.
- Encoding: Replace each character in the original data with its corresponding Huffman code.

## Example

Let's use a simple example to illustrate Huffman coding. Consider encoding the string "ABRACADABRA":

### Step 1: Calculate Character Frequencies

| Character | Frequency |
| --------- | --------- |
| A         | 5         |
| B         | 2         |
| R         | 2         |
| C         | 1         |
| D         | 1         |

### Step 2: Build the Huffman Tree

Starting with leaf nodes for each character:

```plaintext
A(5)  B(2)  R(2)  C(1)  D(1)
```

First, combine the two lowest frequency nodes (C and D):

![Huffman Coding Tree Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/huffman_coding_1.png)

```plaintext
Remaining: A(5) B(2) R(2) [2]
```

Next, combine the [2] node with another lowest frequency node (B or R, both have 2):

![Huffman Coding Tree Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/huffman_coding_2.png)

```plaintext
Remaining: A(5) R(2) [4]
```

Combine R with the [4] node:

![Huffman Coding Tree Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/huffman_coding_3.png)

```plaintext
Remaining: A(5) [6]
```

Finally, combine the remaining nodes:

![Huffman Coding Tree Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/huffman_coding_4.png)

## Step 3: Generate Huffman Codes

Assigning 0 for left branches and 1 for right branches:

| Character | Path from Root               | Huffman Code |
| --------- | ---------------------------- | ------------ |
| A         | Left                         | 0            |
| R         | Right → Left                 | 10           |
| B         | Right → Right → Right        | 111          |
| C         | Right → Right → Left → Left  | 1100         |
| D         | Right → Right → Left → Right | 1101         |

## Step 4: Encode the String

Now encode "ABRACADABRA":

```
A   B   R   A   C   A   D   A   B   R   A
0  111 10   0  1100 0  1101 0  111  10  0
```

Without spaces: `01111001100011010111100`

The encoded string is 23 bits long, compared to 88 bits if using 8-bit fixed-length encoding (11 characters × 8 bits = 88 bits), achieving approximately 74% compression.

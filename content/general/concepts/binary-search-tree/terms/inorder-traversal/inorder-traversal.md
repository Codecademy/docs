---
Title: 'Inorder Traversal'
Description: 'Traverses nodes in a binary search tree following Left-Root-Right order to visit elements in sorted sequence.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Algorithms'
  - 'Binary Search'
  - 'Data Structures'
  - 'Trees'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Inorder traversal** is a depth-first traversal [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) used to visit nodes in a [binary search tree](https://www.codecademy.com/resources/docs/general/binary-search-tree) in a specific sequential order: left subtree, root node, then right subtree. This traversal technique follows the Left-Root-Right pattern, making it particularly valuable for binary search trees as it visits nodes in ascending sorted order.

Inorder traversal is widely used in various applications including expression evaluation in compiler design, creating sorted arrays from binary search trees, validating binary search tree properties, and implementing iterator patterns for tree data structures. It is a fundamental operation in tree algorithms and is essential for tasks requiring ordered data processing.

## Syntax

The inorder traversal algorithm can be implemented using the following recursive approach:

```pseudo
inorder_traversal(node):
  if node is not None:
    inorder_traversal(node.left)
    process(node.data)
    inorder_traversal(node.right)
```

**Parameters:**

- `node`: The current node being visited in the binary search tree. Initially, this is the root node of the tree.

**Algorithm Steps:**

1. Check if the current node is not None (base case for recursion)
2. Recursively traverse the left subtree
3. Process the current node (typically print or store the node's data)
4. Recursively traverse the right subtree

**Return value:**

This algorithm does not return a value but processes each node in the tree. The processing operation (such as printing or collecting values) determines the output.

## Example

For the following binary search tree:

![Binary Search Tree Diagram](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-tree-labeled.png)

Inorder traversal provides the nodes in the following order: `1`, `2`, `3`, `4`, `5`, `6`, `7`.

## Example 1: Basic Implementation of a binary search tree

This example demonstrates the fundamental implementation of inorder traversal with a simple binary search tree:

```py
class TreeNode:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

def inorder_traversal(root):
  """
  Perform inorder traversal of binary search tree

  Args:
    root: Root node of the binary search tree
  """
  if root is not None:
    # Traverse left subtree
    inorder_traversal(root.left)

    # Process current node
    print(root.data, end=" ")

    # Traverse right subtree
    inorder_traversal(root.right)

# Create a sample binary search tree
#       50
#      /  \
#    30    70
#   /  \   /  \
#  20  40 60  80

root = TreeNode(50)
root.left = TreeNode(30)
root.right = TreeNode(70)
root.left.left = TreeNode(20)
root.left.right = TreeNode(40)
root.right.left = TreeNode(60)
root.right.right = TreeNode(80)

print("Inorder traversal result:")
inorder_traversal(root)
```

This example results in the following output:

```shell
Inorder traversal result:
20 30 40 50 60 70 80
```

This example creates a binary search tree with seven nodes and performs an inorder traversal. The traversal visits nodes in the following order: left subtree (20, 30, 40), root (50), then right subtree (60, 70, 80), resulting in the sorted sequence: 20 30 40 50 60 70 80.

## Example 2: Student Grade Management System

This example shows how inorder traversal can be used in a real-world scenario for managing and displaying student grades in sorted order:

```py
class Student:
  def __init__(self, student_id, name, grade):
    self.student_id = student_id
    self.name = name
    self.grade = grade
    self.left = None
    self.right = None

  def __str__(self):
    return f"ID: {self.student_id}, Name: {self.name}, Grade: {self.grade}"

class StudentGradeSystem:
  def __init__(self):
    self.root = None

  def insert_student(self, student_id, name, grade):
    """Insert a new student based on student_id"""
    if self.root is None:
      self.root = Student(student_id, name, grade)
    else:
      self._insert_recursive(self.root, student_id, name, grade)

  def _insert_recursive(self, node, student_id, name, grade):
    """Helper method to insert student recursively"""
    if student_id < node.student_id:
      if node.left is None:
        node.left = Student(student_id, name, grade)
      else:
        self._insert_recursive(node.left, student_id, name, grade)
    else:
      if node.right is None:
        node.right = Student(student_id, name, grade)
      else:
        self._insert_recursive(node.right, student_id, name, grade)

  def display_students_sorted(self):
    """Display all students in sorted order by student_id using inorder traversal"""
    print("Students in sorted order by ID:")
    self._inorder_traversal(self.root)

  def _inorder_traversal(self, node):
    """Perform inorder traversal to display students"""
    if node is not None:
      # Traverse left subtree
      self._inorder_traversal(node.left)

      # Process current student
      print(node)

      # Traverse right subtree
      self._inorder_traversal(node.right)

# Create student management system
grade_system = StudentGradeSystem()

# Add students with different IDs
grade_system.insert_student(105, "Alice Johnson", 92)
grade_system.insert_student(102, "Bob Smith", 88)
grade_system.insert_student(108, "Charlie Brown", 95)
grade_system.insert_student(101, "Diana Prince", 90)
grade_system.insert_student(107, "Eve Wilson", 87)

# Display students in sorted order
grade_system.display_students_sorted()
```

This example results in the following output:

```shell
Students in sorted order by ID:
ID: 101, Name: Diana Prince, Grade: 90
ID: 102, Name: Bob Smith, Grade: 88
ID: 105, Name: Alice Johnson, Grade: 92
ID: 107, Name: Eve Wilson, Grade: 87
ID: 108, Name: Charlie Brown, Grade: 95
```

This example demonstrates a practical application where inorder traversal helps manage student records. The binary search tree is organized by student ID, and inorder traversal automatically displays students in ascending order of their IDs, making it easy to generate sorted reports.

## Codebyte Example: File System Directory Listing

This example illustrates using inorder traversal to display a hierarchical file system structure in sorted order:

```py
class FileNode:
  def __init__(self, name, file_type="file", size=0):
    self.name = name
    self.file_type = file_type  # "file" or "directory"
    self.size = size
    self.left = None
    self.right = None

  def __str__(self):
    return f"{self.file_type.upper()}: {self.name} ({self.size} bytes)"

class FileSystemTree:
  def __init__(self):
    self.root = None

  def add_file(self, name, file_type="file", size=0):
    """Add a file or directory to the file system tree"""
    if self.root is None:
      self.root = FileNode(name, file_type, size)
    else:
      self._add_recursive(self.root, name, file_type, size)

  def _add_recursive(self, node, name, file_type, size):
    """Helper method to add file recursively based on alphabetical order"""
    if name.lower() < node.name.lower():
      if node.left is None:
        node.left = FileNode(name, file_type, size)
      else:
        self._add_recursive(node.left, name, file_type, size)
    else:
      if node.right is None:
        node.right = FileNode(name, file_type, size)
      else:
        self._add_recursive(node.right, name, file_type, size)

  def list_files_sorted(self):
    """List all files and directories in alphabetical order"""
    print("File system contents (alphabetically sorted):")
    print("-" * 45)
    self._inorder_traversal(self.root)

  def _inorder_traversal(self, node):
    """Perform inorder traversal to list files"""
    if node is not None:
      # Traverse left subtree (alphabetically earlier files)
      self._inorder_traversal(node.left)

      # Process current file/directory
      print(node)

      # Traverse right subtree (alphabetically later files)
      self._inorder_traversal(node.right)

# Create file system tree
fs = FileSystemTree()

# Add various files and directories
fs.add_file("documents", "directory", 0)
fs.add_file("report.pdf", "file", 2048)
fs.add_file("backup", "directory", 0)
fs.add_file("config.json", "file", 512)
fs.add_file("images", "directory", 0)
fs.add_file("readme.txt", "file", 1024)
fs.add_file("app.py", "file", 4096)

# Display sorted file listing
fs.list_files_sorted()
```

This example shows how inorder traversal can be applied to organize and display file system contents. The binary search tree organizes files alphabetically, and inorder traversal provides a natural way to generate sorted directory listings, similar to the `ls` command in Unix systems.

## Frequently Asked Questions

### 1. What is the time complexity of inorder traversal?

The time complexity is O(n), where n is the number of nodes in the tree, because each node is visited exactly once during the traversal process.

### 2. What is the space complexity of inorder traversal?

The space complexity is O(h), where h is the height of the tree, due to the recursive call stack. In the worst case (skewed tree), this becomes O(n), while in a balanced tree, it's O(log n).

### 3. Why does inorder traversal produce sorted output for binary search trees?

Inorder traversal visits nodes in Left-Root-Right order. In a binary search tree, all nodes in the left subtree are smaller than the root, and all nodes in the right subtree are larger. This property ensures that nodes are processed in ascending order.

### 4. Can inorder traversal be implemented iteratively?

Yes, inorder traversal can be implemented iteratively using a stack data structure to simulate the recursive call stack, which can be more memory-efficient for very deep trees.

### 5. How does inorder traversal compare to preorder and postorder traversals?

Inorder (Left-Root-Right) is most useful for BSTs to get sorted data, preorder (Root-Left-Right) is used for tree copying and expression parsing, while postorder (Left-Right-Root) is used for tree deletion and expression evaluation.

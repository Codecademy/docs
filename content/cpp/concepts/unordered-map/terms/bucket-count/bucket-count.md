---
Title: 'bucket_count()'
Description: 'Returns the number of buckets in the hash table of an unordered associative container.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Hash Maps'
  - 'Hash Tables'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`bucket_count()`** method is a member function of C++ unordered associative containers such as [`unordered_map`](https://www.codecademy.com/resources/docs/cpp/unordered-map), `unordered_set`, `unordered_multimap`, and `unordered_multiset`. 

**`It returns the current number of buckets in the hash table used internally by these containers`**. Each bucket can contain zero or more elements that hash to the same value, and understanding bucket distribution is crucial for analyzing hash table performance and collision patterns.

The `bucket_count()` function is particularly useful for performance analysis, debugging hash table behavior, monitoring load factors, and understanding how elements are distributed across the hash table. It helps developers optimize hash functions and assess whether rehashing might be beneficial for their specific use case.

## Syntax

```pseudo
container.bucket_count()
```

**Parameters:**

This method takes no parameters.

**Return value:**

Returns a value of type `size_type` (typically `size_t`) representing the current number of buckets in the hash table.

## Example

This example demonstrates how to use `bucket_count()` with an `unordered_map` and observe how it changes as elements are added:

```cpp
// unordered_map::bucket_count
#include <iostream>
#include <string>
#include <unordered_map>

int main ()
{
  std::unordered_map<std::string,std::string> mymap = {
            {"house","Vaikunth"},
            {"apple","red"},
            {"tree","green"},
            {"book","Geeta"},
            {"door","porte"},
            {"grapefruit","pamplemousse"}
  };

  unsigned n = mymap.bucket_count();

  std::cout << "mymap has " << n << " buckets.\n";

  for (unsigned i=0; i<n; ++i) {
    std::cout << "bucket #" << i << " contains: ";
    for (auto it = mymap.begin(i); it!=mymap.end(i); ++it)
      std::cout << "[" << it->first << ":" << it->second << "] ";
    std::cout << "\n";
  }

  return 0;
}
```

The output might look like this (actual values may vary by implementation):

```shell
mymap has 13 buckets.
bucket #0 contains: [book:Geeta] [tree:green] [apple:red] 
bucket #1 contains: 
bucket #2 contains: 
bucket #3 contains: 
bucket #4 contains: 
bucket #5 contains: [grapefruit:pamplemousse] 
bucket #6 contains: 
bucket #7 contains: 
bucket #8 contains: 
bucket #9 contains: 
bucket #10 contains: 
bucket #11 contains: [door:porte] 
bucket #12 contains: [house:Vaikunth] 
```

This example shows how the bucket count can increase when the hash table needs to rehash to maintain performance as more elements are added.

## Codebyte Example

This interactive example demonstrates using `bucket_count()` to analyze hash table performance and distribution:

```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <iomanip>

int main() {
  std::unordered_map<int, std::string> students;
  
  std::cout << "Hash Table Analysis Tool" << std::endl;
  std::cout << "========================" << std::endl;
  
  // Initial state
  std::cout << "Initial bucket count: " << students.bucket_count() << std::endl;
  
  // Add student data
  students[101] = "Alice";
  students[102] = "Bob";
  students[103] = "Carol";
  students[104] = "David";
  students[105] = "Eva";
  
  std::cout << "\nAfter adding 5 students:" << std::endl;
  std::cout << "Elements: " << students.size() << std::endl;
  std::cout << "Bucket count: " << students.bucket_count() << std::endl;
  std::cout << "Load factor: " << std::fixed << std::setprecision(3) 
            << students.load_factor() << std::endl;
  
  // Show bucket distribution
  std::cout << "\nBucket distribution:" << std::endl;
  for (size_t i = 0; i < students.bucket_count(); ++i) {
    std::cout << "Bucket " << std::setw(2) << i << ": " 
              << students.bucket_size(i) << " elements";
    
    if (students.bucket_size(i) > 0) {
      std::cout << " -> ";
      for (auto it = students.begin(i); it != students.end(i); ++it) {
        std::cout << it->first << ":" << it->second << " ";
      }
    }
    std::cout << std::endl;
  }
  
  // Add more elements to trigger rehashing
  for (int i = 106; i <= 115; ++i) {
    students[i] = "Student" + std::to_string(i);
  }
  
  std::cout << "\nAfter adding 15 students total:" << std::endl;
  std::cout << "Elements: " << students.size() << std::endl;
  std::cout << "Bucket count: " << students.bucket_count() << std::endl;
  std::cout << "Load factor: " << std::fixed << std::setprecision(3) 
            << students.load_factor() << std::endl;
  
  // Calculate statistics
  size_t empty_buckets = 0;
  for (size_t i = 0; i < students.bucket_count(); ++i) {
    if (students.bucket_size(i) == 0) {
      empty_buckets++;
    }
  }
  
  double utilization = (double)(students.bucket_count() - empty_buckets) 
                      / students.bucket_count() * 100;
  
  std::cout << "Empty buckets: " << empty_buckets << std::endl;
  std::cout << "Utilization: " << std::setprecision(1) << utilization << "%" << std::endl;
  
  return 0;
}
```

## Frequently Asked Questions

### 1. Why does the bucket count sometimes change automatically?

The bucket count changes when the hash table automatically rehashes to maintain performance. This typically happens when the load factor exceeds the maximum load factor threshold, causing the container to increase the number of buckets and redistribute elements.

### 2. Is there a relationship between bucket count and performance?

Yes, the bucket count directly affects performance. More buckets generally mean fewer collisions and faster lookups, but also more memory usage. The load factor (size/bucket_count) is a key metric for balancing performance and memory efficiency.

### 3. Can I control the bucket count manually?

Yes, you can use the `rehash()` method to request a specific number of buckets, or `reserve()` to ensure the container can hold a certain number of elements without rehashing. However, the actual bucket count may differ from your request based on the implementation's requirements.
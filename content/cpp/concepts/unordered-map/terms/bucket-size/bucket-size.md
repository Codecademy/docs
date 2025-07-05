---
Title: 'bucket_size()'
Description: 'Returns the number of elements in a specific bucket of an unordered associative container.'
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

The **`bucket_size()`** method is a member function of C++ unordered associative containers such as [`unordered_map`](https://www.codecademy.com/resources/docs/cpp/unordered-map), `unordered_set`, `unordered_multimap`, and `unordered_multiset`. 

**`It returns the number of elements stored in a specific bucket of the hash table`**. This function is essential for analyzing hash distribution patterns, detecting collisions, and understanding the performance characteristics of the hash table implementation.

The `bucket_size()` function is particularly useful for debugging hash functions, identifying hotspots where many elements hash to the same bucket, monitoring collision rates and optimizing hash table performance. It helps developers understand how evenly elements are distributed across buckets and whether the hash function is working effectively.

## Syntax

```pseudo
container.bucket_size(bucket_index)
```

**Parameters:**

- `bucket_index`: A value of type `size_type` (typically `size_t`) representing the index of the bucket to query. Must be less than the value returned by bucket_count()

**Return value:**

Returns a value of type `size_type` (typically `size_t`) representing the number of elements in the specified bucket.

## Example

This example demonstrates how to use `bucket_size()` to analyze the distribution of elements across buckets in an `unordered_map`:

```cpp
// unordered_map::bucket_size
#include <iostream>
#include <string>
#include <unordered_map>

int main ()
{
  std::unordered_map<std::string,std::string> mymap = {
    {"us","United States"},
    {"uk","United Kingdom"},
    {"fr","France"},
    {"de","Germany"}
  };

  unsigned nbuckets = mymap.bucket_count();

  std::cout << "mymap has " << nbuckets << " buckets:\n";

  for (unsigned i=0; i<nbuckets; ++i) {
    std::cout << "bucket #" << i << " has " << mymap.bucket_size(i) << " elements.\n";
  }

  return 0;
}
```

The output might look like this (actual distribution may vary by implementation):

```shell
mymap has 13 buckets:
bucket #0 has 0 elements.
bucket #1 has 0 elements.
bucket #2 has 0 elements.
bucket #3 has 0 elements.
bucket #4 has 1 elements.
bucket #5 has 0 elements.
bucket #6 has 1 elements.
bucket #7 has 0 elements.
bucket #8 has 0 elements.
bucket #9 has 1 elements.
bucket #10 has 0 elements.
bucket #11 has 0 elements.
bucket #12 has 1 elements.
```


## Codebyte Example

This interactive example demonstrates using `bucket_size()` to create a collision detection and analysis tool:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <vector>
#include <iomanip>
#include <algorithm>

class CollisionAnalyzer {
private:
  std::unordered_set<int> data;

public:
  void addNumbers(const std::vector<int>& numbers) {
    for (int num : numbers) {
      data.insert(num);
    }
  }

  void analyzeCollisions() {
    std::cout << "Collision Analysis Report" << std::endl;
    std::cout << "========================" << std::endl;
    std::cout << "Total elements: " << data.size() << std::endl;
    std::cout << "Total buckets: " << data.bucket_count() << std::endl;
    
    std::vector<size_t> bucket_sizes;
    size_t max_bucket_size = 0;
    size_t collisions = 0;
    size_t empty_buckets = 0;
    
    // Collect bucket size statistics
    for (size_t i = 0; i < data.bucket_count(); ++i) {
      size_t size = data.bucket_size(i);
      bucket_sizes.push_back(size);
      
      if (size == 0) {
        empty_buckets++;
      } else {
        max_bucket_size = std::max(max_bucket_size, size);
        if (size > 1) {
          collisions += size - 1;
        }
      }
    }
    
    std::cout << "Empty buckets: " << empty_buckets << std::endl;
    std::cout << "Max bucket size: " << max_bucket_size << std::endl;
    std::cout << "Total collisions: " << collisions << std::endl;
    
    // Show buckets with collisions
    if (collisions > 0) {
      std::cout << "\nBuckets with collisions:" << std::endl;
      for (size_t i = 0; i < data.bucket_count(); ++i) {
        if (data.bucket_size(i) > 1) {
          std::cout << "Bucket " << i << " (size " << data.bucket_size(i) << "): ";
          for (auto it = data.begin(i); it != data.end(i); ++it) {
            std::cout << *it << " ";
          }
          std::cout << std::endl;
        }
      }
    } else {
      std::cout << "\nNo collisions detected - excellent hash distribution!" << std::endl;
    }
    
    // Performance assessment
    double collision_rate = (double)collisions / data.size() * 100;
    std::cout << "\nPerformance Metrics:" << std::endl;
    std::cout << "Collision rate: " << std::fixed << std::setprecision(1) 
              << collision_rate << "%" << std::endl;
    
    if (collision_rate < 10) {
      std::cout << "Hash performance: Excellent" << std::endl;
    } else if (collision_rate < 25) {
      std::cout << "Hash performance: Good" << std::endl;
    } else if (collision_rate < 50) {
      std::cout << "Hash performance: Fair" << std::endl;
    } else {
      std::cout << "Hash performance: Poor - consider rehashing" << std::endl;
    }
  }
};

int main() {
  CollisionAnalyzer analyzer;
  
  // Test with different number patterns
  std::cout << "Test 1: Sequential numbers" << std::endl;
  std::vector<int> sequential = {10, 20, 30, 40, 50, 60, 70, 80};
  analyzer.addNumbers(sequential);
  analyzer.analyzeCollisions();
  
  std::cout << "\n" << std::string(40, '=') << std::endl;
  
  // Create a new analyzer for second test
  CollisionAnalyzer analyzer2;
  std::cout << "\nTest 2: Random-like numbers" << std::endl;
  std::vector<int> random_like = {157, 283, 491, 672, 829, 934, 1047, 1158};
  analyzer2.addNumbers(random_like);
  analyzer2.analyzeCollisions();
  
  return 0;
}
```

## Frequently Asked Questions

### 1. What does it mean when a bucket has size greater than 1?

When `bucket_size()` returns a value greater than 1, it indicates a collision - multiple elements have hashed to the same bucket. While some collisions are normal, consistently high bucket sizes may indicate poor hash function performance.

### 2. How can I use bucket_size() to optimize my hash table?

Use `bucket_size()` to identify buckets with many collisions. If you see consistently large bucket sizes, consider using a custom hash function, increasing the bucket count with `rehash()`, or analyzing your key distribution patterns.

### 3. Is there a performance cost to calling bucket_size()?

The `bucket_size()` function typically has O(1) complexity in most implementations, as hash tables often maintain size information for each bucket. However, frequent calls in performance-critical code should still be used judiciously.
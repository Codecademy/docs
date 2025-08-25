---
Title: 'load_factor()'
Description: 'Returns the current load factor of the unordered map hash table, which is the ratio of element count to bucket count.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Hash Maps'
  - 'Map'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`load_factor()`** is a member function of the `std::unordered_map` container that returns the current load factor of the hash table. `The load factor is the ratio between the number of elements in the container (its size) and the number of buckets (bucket count)`.

The **load factor** is a crucial measure of a hash table's efficiency. It is calculated by dividing the number of stored elements by the number of available buckets.

`Load Factor = Number of Elements / Number of Buckets`

Essentially, the load factor indicates how full the hash table is. A low load factor signifies ample space, leading to faster operations and fewer "collisions" (when multiple items map to the same spot). A high load factor indicates the table is crowded, which can degrade performance because extra work is required to find and store items.

## Syntax

```pseudo
float load_factor() const;
```

**Parameters:**

- None

**Return value:**

- Returns a floating-point value representing the container's current load factor (the ratio of size to bucket count).

## Example 1: Basic Usage of `load_factor()`

This example demonstrates the basic usage of `load_factor()` and how it changes as elements are added:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <iomanip>

int main() {
  // Create an empty unordered_map
  std::unordered_map<int, std::string> inventory;

  // Display initial stats
  std::cout << std::fixed << std::setprecision(3);
  std::cout << "Initial state:" << std::endl;
  std::cout << "Size: " << inventory.size() << std::endl;
  std::cout << "Bucket count: " << inventory.bucket_count() << std::endl;
  std::cout << "Load factor: " << inventory.load_factor() << std::endl;
  std::cout << "Max load factor: " << inventory.max_load_factor() << std::endl;
  std::cout << std::endl;

  // Insert elements and observe load factor changes
  std::cout << "Inserting inventory items:" << std::endl;
  for (int i = 1; i <= 8; ++i) {
    inventory[i] = "Item " + std::to_string(i);
    std::cout << "After inserting " << i << " items:" << std::endl;
    std::cout << "  Size: " << inventory.size() << std::endl;
    std::cout << "  Bucket count: " << inventory.bucket_count() << std::endl;
    std::cout << "  Load factor: " << inventory.load_factor() << std::endl;
    std::cout << std::endl;
  }

  return 0;
}
```

The output might look something like:

```shell
Initial state:
Size: 0
Bucket count: 1
Load factor: 0.000
Max load factor: 1.000

Inserting inventory items:
After inserting 1 items:
  Size: 1
  Bucket count: 13
  Load factor: 0.077

After inserting 2 items:
  Size: 2
  Bucket count: 13
  Load factor: 0.154

After inserting 3 items:
  Size: 3
  Bucket count: 13
  Load factor: 0.231

After inserting 4 items:
  Size: 4
  Bucket count: 13
  Load factor: 0.308

After inserting 5 items:
  Size: 5
  Bucket count: 13
  Load factor: 0.385

After inserting 6 items:
  Size: 6
  Bucket count: 13
  Load factor: 0.462

After inserting 7 items:
  Size: 7
  Bucket count: 13
  Load factor: 0.538

After inserting 8 items:
  Size: 8
  Bucket count: 13
  Load factor: 0.615
```

The above code shows how the load factor changes as elements are inserted into the container. Initially, the load factor is 0 (empty container). As elements are added, the load factor increases. When it approaches the max load factor, the container automatically rehashes (increases the bucket count), which reduces the load factor.

## Example 2: Performance Analysis with `load_factor()`

This example demonstrates how to use `load_factor()` to analyze and optimize hash table performance:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <chrono>
#include <vector>
#include <iomanip>

// Function to measure average lookup time
double measureLookupTime(const std::unordered_map<int, std::string>& map, int iterations) {
  auto start = std::chrono::high_resolution_clock::now();

  // Perform lookups
  for (int i = 0; i < iterations; ++i) {
    for (int key = 1; key <= 100; ++key) {
      map.find(key);
    }
  }

  auto end = std::chrono::high_resolution_clock::now();
  auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
  return static_cast<double>(duration.count()) / (iterations * 100);
}

int main() {
  std::unordered_map<int, std::string> cache;

  std::cout << std::fixed << std::setprecision(4);
  std::cout << "Performance Analysis with Load Factor:" << std::endl;
  std::cout << "| Elements | Buckets | Load Factor | Avg Lookup (μs) |" << std::endl;
  std::cout << "|----------|---------|-------------|-----------------|" << std::endl;

  // Insert elements in batches and measure performance
  for (int batch = 0; batch < 10; ++batch) {
    // Add 50 elements per batch
    for (int i = 1; i <= 50; ++i) {
      int key = batch * 50 + i;
      cache[key] = "CachedData" + std::to_string(key);
    }

    // Measure performance
    double avgTime = measureLookupTime(cache, 1000);

    std::cout << "| " << std::setw(8) << cache.size()
              << " | " << std::setw(7) << cache.bucket_count()
              << " | " << std::setw(11) << cache.load_factor()
              << " | " << std::setw(15) << avgTime << " |" << std::endl;
  }

  return 0;
}
```

The output will show the relationship between load factor and lookup performance:

```shell
Performance Analysis with Load Factor:
| Elements | Buckets | Load Factor | Avg Lookup (μs) |
|----------|---------|-------------|-----------------|
|       50 |      59 |      0.8475 |          0.1296 |
|      100 |     127 |      0.7874 |          0.0939 |
|      150 |     257 |      0.5837 |          0.0935 |
|      200 |     257 |      0.7782 |          0.0948 |
|      250 |     257 |      0.9728 |          0.0983 |
|      300 |     541 |      0.5545 |          0.0930 |
|      350 |     541 |      0.6470 |          0.0930 |
|      400 |     541 |      0.7394 |          0.0755 |
|      450 |     541 |      0.8318 |          0.0728 |
|      500 |     541 |      0.9242 |          0.0944 |
```

This example demonstrates how monitoring the load factor helps understand performance characteristics. It shows the correlation between load factor and lookup time, revealing that performance generally improves when the load factor decreases due to rehashing.

## Codebyte Example: Smart Cache Management

This interactive example shows how to use `load_factor()` for intelligent cache management and performance optimization:

```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>
#include <iomanip>

class SmartCache {
private:
  std::unordered_map<int, std::string> cache;
  static constexpr double OPTIMAL_LOAD_FACTOR = 0.6;

public:
  void addItem(int key, const std::string& value) {
    cache[key] = value;

    // Check if we need to optimize
    if (cache.load_factor() > OPTIMAL_LOAD_FACTOR * 1.5) {
      optimize();
    }
  }

  void optimize() {
    std::cout << "Optimizing cache..." << std::endl;
    std::cout << "Before optimization:" << std::endl;
    displayStats();

    // Set optimal max load factor
    cache.max_load_factor(OPTIMAL_LOAD_FACTOR);

    std::cout << "After optimization:" << std::endl;
    displayStats();
    std::cout << std::endl;
  }

  void displayStats() {
    std::cout << std::fixed << std::setprecision(3);
    std::cout << "  Size: " << cache.size() << std::endl;
    std::cout << "  Bucket count: " << cache.bucket_count() << std::endl;
    std::cout << "  Load factor: " << cache.load_factor() << std::endl;
    std::cout << "  Max load factor: " << cache.max_load_factor() << std::endl;

    // Calculate distribution statistics
    size_t emptyBuckets = 0;
    size_t maxBucketSize = 0;

    for (size_t i = 0; i < cache.bucket_count(); ++i) {
      size_t bucketSize = cache.bucket_size(i);
      if (bucketSize == 0) emptyBuckets++;
      if (bucketSize > maxBucketSize) maxBucketSize = bucketSize;
    }

    double emptyPercent = (static_cast<double>(emptyBuckets) / cache.bucket_count()) * 100;
    std::cout << "  Empty buckets: " << emptyBuckets << " (" << emptyPercent << "%)" << std::endl;
    std::cout << "  Max bucket size: " << maxBucketSize << std::endl;
  }

  std::string get(int key) {
    auto it = cache.find(key);
    return (it != cache.end()) ? it->second : "Not found";
  }
};

int main() {
  SmartCache smartCache;

  std::cout << "Smart Cache Management Demo" << std::endl;
  std::cout << "============================" << std::endl;

  // Initial state
  std::cout << "Initial cache state:" << std::endl;
  smartCache.displayStats();
  std::cout << std::endl;

  // Add items to trigger optimization
  std::cout << "Adding 100 cache entries..." << std::endl;
  for (int i = 1; i <= 100; ++i) {
    smartCache.addItem(i, "CacheEntry_" + std::to_string(i));

    // Show progress at certain intervals
    if (i % 25 == 0) {
      std::cout << "Progress: " << i << " items added" << std::endl;
      smartCache.displayStats();
      std::cout << std::endl;
    }
  }

  // Test retrieval
  std::cout << "Testing cache retrieval:" << std::endl;
  std::cout << "Key 50: " << smartCache.get(50) << std::endl;
  std::cout << "Key 999: " << smartCache.get(999) << std::endl;

  return 0;
}
```

This example demonstrates a practical scenario where monitoring and managing the load factor is crucial for maintaining optimal performance. The smart cache automatically adjusts its configuration based on the load factor to ensure efficient operations.

## Frequently Asked Questions

### 1. What is an ideal load factor for `unordered_map`?

There's no universally ideal load factor as it depends on the hash function quality, key distribution, and performance requirements. However, most implementations perform well with load factors between 0.5 and 0.75. Values around 0.6-0.7 often provide a good balance between memory usage and performance.

### 2. What is the load factor in C++?

The load factor in C++ (specifically for hash-based containers like `unordered_map` and `unordered_set`) measures how full the hash table is. It’s calculated as:

```tex
load_factor = number_of_elements / number_of_buckets
```

### 3. Is unordered_map faster than map in C++?

Yes, in most cases:

- `unordered_map` is implemented using hash tables, so average time complexity for insert, delete, and find is O(1).
- `map` is implemented using a balanced binary search tree (Red-Black tree), so those operations take O(log n) time.

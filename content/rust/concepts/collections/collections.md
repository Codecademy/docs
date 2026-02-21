---
Title: 'Collections'
Description: 'A collection refers to data structures that can store multiple values.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'collections'
CatalogContent:
  - 'rust-for-programmers'
  - 'paths/computer-science'
---

In Rust, **collections** are standard library data structures that let you store and work with multiple values. Unlike fixed-size `arrays` and `tuples`, collections can grow and shrink at runtime because they allocate on the heap. Commonly used collections include `Vec<T>`, `String`, and `HashMap<K, V>`. Others include `VecDeque`, `LinkedList`, `BTreeMap`, `BinaryHeap`, and set types.

---

## Vector (`Vec<T>`)

```rust
fn main() {
    let mut nums = Vec::new();
    nums.push(10);
    nums.push(20);
    nums.push(30);

    for n in &nums {
        println!("{n}");
    }
}
````

---

## String

```rust
fn main() {
    let mut s = String::from("Hi");
    s.push_str(", Rust!");
    println!("{s}");
}
```

---

## HashMap<K, V>

```rust
use std::collections::HashMap;

fn main() {
    let mut scores = HashMap::new();
    scores.insert("alice", 12);
    scores.insert("bob", 18);

    if let Some(v) = scores.get("alice") {
        println!("Alice has {v}");
    }
}
```

---

## VecDeque

```rust
use std::collections::VecDeque;

fn main() {
    let mut q = VecDeque::new();
    q.push_back("task1");
    q.push_back("task2");
    q.push_front("urgent");

    while let Some(job) = q.pop_front() {
        println!("{job}");
    }
}
```

---

## LinkedList

```rust
use std::collections::LinkedList;

fn main() {
    let mut list = LinkedList::new();
    list.push_back("a");
    list.push_back("b");
    list.push_front("start");

    for v in list {
        println!("{v}");
    }
}
```

---

## BTreeMap

```rust
use std::collections::BTreeMap;

fn main() {
    let mut map = BTreeMap::new();
    map.insert(3, "three");
    map.insert(1, "one");
    map.insert(2, "two");

    for (k, v) in &map {
        println!("{k} -> {v}");
    }
}
```

---

## BinaryHeap

```rust
use std::collections::BinaryHeap;

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(10);
    heap.push(4);
    heap.push(7);

    while let Some(max) = heap.pop() {
        println!("{max}"); // prints in descending order
    }
}
```

---

## HashSet (example set type)

```rust
use std::collections::HashSet;

fn main() {
    let mut set = HashSet::new();
    set.insert("apple");
    set.insert("banana");
    set.insert("apple"); // duplicate ignored

    for item in set {
        println!("{item}");
    }
}
```

---

## When to use which collection

| Collection       | Use it when                                                                                    | Notes and tradeoffs                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Vec<T>`         | You need an ordered, indexable, growable list and will mostly push and iterate.                | Appends at the end are fast. Inserting or removing in the middle shifts elements. Best default when you just need a list.                         |
| `String`         | You need owned, growable UTF-8 text.                                                           | Indexing by position is not constant time because of UTF-8. Use `push_str`, `push`, and slicing by ranges found from methods like `char_indices`. |
| `HashMap<K, V>`  | You need to associate keys with values with average constant-time lookups.                     | Order is not stable. Requires `Hash` for keys. Good general map when you do not care about key order.                                             |
| `VecDeque<T>`    | You need a queue where you push and pop at both ends efficiently.                              | Provides amortized constant-time `push_front` and `push_back`. Indexed access exists but the layout is a ring buffer.                             |
| `LinkedList<T>`  | You will do many insertions and removals in the middle using list nodes that you already have. | Rarely faster than `Vec`. Consider it only for special cases where node ownership matters more than cache locality.                               |
| `BTreeMap<K, V>` | You need a map that iterates in key order or you need range queries.                           | Slower lookups than `HashMap` but order is guaranteed and range operations are efficient.                                                         |
| `BinaryHeap<T>`  | You need to repeatedly pop the largest (or smallest with `Reverse`) element.                   | Great for priority queues and scheduling. Not for random indexed access.                                                                          |
| `HashSet<T>`     | You need to track membership or remove duplicates with average constant-time checks.           | Order is not stable. If you need sorted iteration, use `BTreeSet`.                                                                                |

---

## One-line use cases

* `Vec<T>`: grow a list of items then iterate in order.
* `String`: build user-visible text that changes over time.
* `HashMap<K, V>`: cache or count things by key with fast lookups.
* `VecDeque<T>`: implement a FIFO queue or sliding window.
* `LinkedList<T>`: splice or move existing nodes without copying elements.
* `BTreeMap<K, V>`: keep data sorted by key and run range queries.
* `BinaryHeap<T>`: always get the next highest-priority item first.
* `HashSet<T>`: track unique items and test membership quickly.



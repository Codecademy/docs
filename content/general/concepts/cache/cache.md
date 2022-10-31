---
Title: 'Cache'
Description: 'A cache is data stored locally in an application for faster retrieval.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Best Practices'
  - 'Memory'
  - 'Algorithms'
  - 'Queries'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

A **cache** is data stored locally in an application for faster retrieval. Caches work by acting as initial locations for data access when client interfaces make a request for data.

If the data requested is found we call this a "cache hit" and return the requested data, if the data is not found it is deemed a "cache miss". Cache misses trigger a process for getting the correct data called a "replacement policy".

Data is transferred between memory and cache in blocks of fixed size called "cache lines" or "cache blocks" after the stale data has been removed. Larger caches have better hit rates but longer latency. To address this trade-off, many computers use multiple layers of caching, with small fast caches backed up by larger, slower caches. If the smaller cache misses, the next fastest cache (level 2, L2) is checked, and so on, before accessing external memory.

The size of the cache can be calculated as the number of bytes stored in each data block times the number of blocks stored. "Higher-level" caches (i.e. Level 2 and above) have progressively larger numbers of blocks, larger block size and relatively longer access times, but faster than main memory. Effective caching implementations are a major way for applications to improve their performance.

## Caching with Hardware vs Software

- Hardware caching strategies are strategies that utilize part of the hardware in a computing device to store the necessary data. Often these computing devices offer caching on multiple layers of the hardware parts responsible for caching.

  - CPU Cache: The Central Processing Unit of a computer contains multiple levels of caching, with L1 being the fastest. Each subsequent cache layer is slower and larger. On multicore chips, the L3 cache is generally shared among all the processing cores.

  - GPU Cache: A computer's Graphics Processing Unit (GPU) has a device memory that is independent of the RAM in the host system and can be used as a cache location.

  - Disk Cache: Disk Cache aka (Disk Buffer) is the embedded memory in a hard disk drive (HDD) acting as a buffer between the rest of the computer and the physical hard disk platter that is used for storage.

- Software caching strategies are strategies that utilize software to store the necessary data locally and retrieve it in an efficient and optimized manner.

  - CDN: Caching in the browser via Content Delivery Network (CDN) retains copies of web content at various points throughout a network and serves them to clients from the closest network location.

  - Memoization: Memoization is an optimization technique used to speed up applications by storing the results of function calls and returning the cached result when the same inputs occur again.

That's all for now. Cache me outside, how about that!

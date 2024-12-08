---
- Title: C++ Variables Volatile Variables 
- Description: Variables Volatile with Code examples.
- Subjects: 
  - 'Computer Science'
- Tags:
  - 'Methods'
  - 'Syntax'
- CatalogContent
  - 'Learn C or C++'
  - 'path/volatile-variables'

CatalogContent: Relevant catalog content in list form.
---


# What is Variables Volatile is used for?


Volatile is used to instruct a C or C++ compiler that a variable contains an address that is not mapped to conventional memory. This suppresses most of the compiler's memory-related optimizations: loads and stores through volatile references are never dropped, coalesced, duplicated, or reordered.

**C++** does not generate default copy/move constructors or assignment operators for any volatile struct or class type. That is, given these three declarations, all of the following statements are illegal:

## *`Code`*

Intendet code

       class Foo {}; // or struct Foo {};
       Foo a;
       volatile Foo b;

    // ALL of these are illegal:
       a = b;
       b = a;
       Foo c = b;
       Foo d = std::move(b);
       volatile Foo e = b;
       b = b; // a=a is useless but allowed. b=b is not 
       permitted.

Furthermore, if you define constructors and operator=s to allow these, then all the default ones go away, and you have to explicitly default them. Defining all this is a massive amount of boilerplate even for a small PoD class:

       class Bar {
       int m_a, m_b;
       public:
       constexpr Bar(int a, int b) noexcept : m_a(a), m_b(b) 
       {}

Everything below this line is the aforementioned boilerplate
    
       Bar(const Bar&) = default;
       Bar(Bar&&) = default;
       Bar& operator=(const Bar&) = default;
       Bar& operator=(Bar&&) = default;
       Bar(const volatile Bar& other) noexcept : 
       m_a(other.m_a), m_b(other.m_b) {}
       Bar(volatile Bar&& other) noexcept : 
       m_a(std::move(other.m_a)), m_b(std::move(other.m_b)) 
       {}
       Bar& operator=(const volatile Bar& other) noexcept {
       m_a = other.m_a;
       m_b = other.m_b;
       return *this;
       }
       volatile Bar& operator=(const volatile Bar& other) 
       volatile noexcept {
       m_a = other.m_a;
       m_b = other.m_b;
       return *this;
       }
       Bar& operator=(volatile Bar&& other) noexcept {
       m_a = std::move(other.m_a);
       m_b = std::move(other.m_b);
       return *this;
       }
       volatile Bar& operator=(volatile Bar&& other) 
       volatile noexcept {
       m_a = std::move(other.m_a);
       m_b = std::move(other.m_b);
       return *this;
      }
    };

## What volatile actually means

The meaning of volatile in **C** and **C++** is often poorly understood. The main use case for volatile is low-level programming on embedded systems that utilize memory-mapped I/O. In these systems, portions of the address space are not mapped to ROM or RAM; instead, reads from or writes to these special addresses are arbitrarily interpreted as commands by other hardware attached to the bus. In these cases, the usual properties of memory do not apply:

+ When an address refers to memory, merely reading the value at that address has no side effects, so unused reads can be deleted by the compiler without changing program semantics. However, when an address refers to a memory-mapped I/O device, a “read” can actually modify the device’s state!

+ As a very simple hypothetical example of this, an address might be mapped to a shift register. Each time the address is read, one value might be shifted out, so repeated reads will return successive values in the shift register. “Unused” reads still advance the register, so removing them changes the program’s semantics.

+ Similar to the above, when an address refers to memory, reading from it multiple times with no intervening writes or synchronizations can always be assumed to return the same value. As the shift register example above illustrates, this is not necessarily true.

+ When an address refers to RAM, a write followed immediately by a read of the same memory address can always be assumed to return the written value. If the address refers to a memory-mapped I/O device, reads and writes to the same address can be interpreted in completely different ways, so there is no requirement that this be true.

+ In other words, reads from or writes to an address mapped to an I/O device is really more like a kind of hardware procedure call than a traditional load or store from memory. This is incompatible with the standard memory semantics of the **C** and **C++** abstract machines, which assume that memory addresses refer to real memory and therefore behave in the usual way.

Volatile is used to instruct a **C** or **C++** compiler that a variable contains an address that is not mapped to conventional memory. This suppresses most of the compiler’s memory-related optimizations: loads and stores through volatile references are never dropped, coalesced, duplicated, or reordered. In other words, loads and stores through volatile addresses are optimized in much the same way as a call to an unknown function.

### Volatile is not useful for multithreading

+ There is a widespread (false) belief that volatile is useful in multithreaded programs to ensure mutations are consistently visible across threads, but this is not the case. volatile only requires that the compiler emit a load or store instruction for each load or store in the source program, but this is not sufficient to ensure consistent visibility across threads on hardware that uses a weak memory model. On such systems, speculative execution can reorder non-conflicting loads and stores to conventional memory, so even if volatile is used, memory barriers are still necessary to ensure consistent ordering of mutations between threads.

+ (In theory, a **C** or **C++** compiler could interpret volatile differently and automatically insert memory barriers to make it useful in this way. However, this is not guaranteed by the standard for either language, and GCC and Clang do not interpret it this way. By default, MSVC does interpret it this way on x86 and x86_64, but it does not on ARM, and it inhibits useful optimizations that more targeted synchronization constructs do not, so relying on this behavior is not recommended.)

-- volatile being a qualifier is somewhat strange
The fact that volatile is a qualifier like const is a somewhat strange decision because it is not really a property of the variable. Instead, volatile essentially changes the meaning of the * and -> operators when used on that variable. Instead of providing the volatile keyword, C could have simply provided volatile reads and writes as separate operations. For example, instead of writing

## *`Code`*

    volatile unsigned char* io_addr = 0xdeadbeef;
    *io_addr = 0x01;
    return *io_addr;
    one could write

    mio_store(0xdeadbeef, 0x01);
    return mio_load(0xdeadbeef);

+ Which would arguably make it much clearer that these are not ordinary reads and writes but more like procedure calls. Indeed, this is precisely the approach that Rust takes: it provides the std::ptr::read_volatile and std::ptr::write_volatile functions instead of providing a special qualifier.

+ C’s decision to treat volatile as a qualifier makes more sense when considered from a historical perspective. C’s original purpose was essentially to be a fancy portable macro assembler, and C programs were originally written by assembly programmers who expected to be able to predict the assembly that C compilers would generate. From this point of view, it makes sense to want a guarantee that loads and stores to certain variables really produce loads and stores, and this naturally led to the volatile keyword. Modern C and C++ compilers diverged from this original philosophy decades ago, so the design of volatile has unfortunately outlived its original usefulness.

## Volatile objects and **C++** classes
All of the above describes the meaning of volatile when used on references to primitive types, like char* or int*, but *C++* substantially complicates the meaning of const and volatile qualifiers, also known as cv-qualifiers. When volatile is applied to a variable of composite type like a struct or class, then references to members through that variable are considered volatile as well. Additionally, const and volatile can also be used to qualify methods, and if a method is invoked through a cv-qualified object, the method must be appropriately cv-qualified.

Given the meaning of volatile, this restriction makes sense. Keep in mind that every volatile load and store should be treated like a side-effectful procedure call, so order very much matters! This substantially complicates the meaning of copy constructors and operator=, each of which perform several sequential reads and writes to the objects’ members. Changing the order in which these assignments are performed could very well result in completely different behavior due to different ordering of effects, so it is likely better that the programmer specify that order explicitly.

All that said, by this point you should hopefully be wondering whether a volatile-qualified composite object is terribly useful in the first place. Given that volatile is generally useful with memory-mapped I/O, the addresses targeted by volatile loads and stores are generally fixed and statically-known. It makes little sense to copy an object from a volatile reference because the resource identified by a memory-mapped I/O address is a piece of actual hardware that cannot simply be duplicated. In most cases, volatile should not be used at all, and when it is, it should be used on values of primitive type, not objects.

    #Codebyte Example:

    #include <iostream>

      int main() {
      double tip = 3.85;
       std::cout << "Tip is" << tip;
     }

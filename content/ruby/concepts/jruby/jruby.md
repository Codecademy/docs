---
Title: 'JRuby'
Description: 'JRuby is an implementation of Ruby written in Java that leverages the Java Virtual Machine (JVM).'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'JRuby'
CatalogContent:
  - 'learn-ruby'
  - 'learn-rails'
---

JRuby is an implementation of Ruby written in Java that leverages the Java Virtual Machine (JVM), which provides performance and accessibility benefits for deploying Ruby applications.

## Design Differences

Ruby is written and implemented in the C programming language, and JRuby is written and implemented in Java. Ruby and JRuby use object-oriented programming, dynamic typing, and garbage collection despite being written in different programming languages. As a result, JRuby can understand and interpret all Ruby code with a few exceptions.

## Interpreter Differences

JRuby will interpret Ruby code using Java's Virtual Machine (JVM) rather than Ruby's interpreter. All of Ruby's built-in core classes are supported by JRuby and most standard libraries; however, there are a few missing libraries that depend on a C language implementation.

## Global Interrupt Lock

While Ruby can create threads and perform serial execution, Ruby has a Global Interrupter Lock, which means Ruby can only execute one thread at a time. JRuby does not have this limitation and uses the JVM's multi-threaded features to complete tasks faster by running code simultaneously.

## JRuby Advantages

The advantages of using JRuby are high performance, real threading, and platform independence. JRuby achieves more requests per second by using the JVM's multi-threading capability. The JVM has over 20 years of experienced engineers working to solve many performance issues by enhancing concurrency, parallelism, memory garbage collection, and the [Just-in-Time (JIT) compiler](https://www.codecademy.com/resources/docs/general/jit-compilation).

### JRuby Disadvantages

JRuby takes longer to start up, tends to be more memory intensive, and may even overwrite memory which could result in additional time spent addressing bugs. JRuby may lose access to the C library compatibility, and some gems may not transition to JRuby because of incompatible native C libraries.

## Some Popular Java Ruby Implementations

[JRuby](https://www.jruby.org/)
[TruffleRuby](https://www.graalvm.org/ruby/)

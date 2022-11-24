---
Title: 'Transactions'
Description: 'A transaction is a logical unit of a process, a series of operations that only make sense together.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
  - 'SQL'
CatalogContent:
  - 'learn-sql'
---

A transaction combines operations into one unit, and the system guarantees the following properties:

- atomic execution,
- consistency,
- isolation from each other,
- and durability.

Let us examine these basic properties to understand how concurrent data access issues are resolved with their help.


## Transactions basic properties

### Atomicity

Atomic execution means that we have a sequence of operations, and this sequence is meaningful only when all of it is executed. In other words, partial execution must be prohibited. In database systems, we often need multiple statements to achieve our goal, hence the sequence of steps.

Let us imaging the checkout process in a webshop:

- The order is recorded in the database with the provided data
- The amount of stock is decreased by one since one piece was sold

These steps only make sense together. Given that an order has been recorded, the amount of stock must be compensated; otherwise, the data becomes invalid, and we sell more products than we have. Thus, we must not abort the sequence of steps in the middle.

This is what atomicity guarantees: **if executing a sequence of steps has begun, all steps have to complete successfully or the initial state before the modification must be restored**.

### Consistency

The database's consistency rules are described by the integrity requirements, such as the record referenced by a foreign key must exist. There are other types of consistency requirements; e.g., there cannot be more students registered for an exam than the limit in the Neptun system.

Transactions ensure that our database is always in a consistent state. While a transaction is in progress, temporary inconsistencies may arise, similarly to the interim state between the two steps of the sequence of the operation above. However, at the end of the transaction, consistency must be restored. In other words: **transactions enforce transition between consistent states**.


### Durability

Durability prescribes that the **effect of a transaction is durable**, that is, the results are not lost. Practically it means that the modifications performed by a transaction must be flushed to persistent storage (i.e., disk).

There are two types of errors in database systems that can lead to data corruption: soft crash and hard crash. **Soft crash** means the database process terminates, and the content of memory is lost. Transactions offer protection from these kinds of crashes. A **hard crash** means that the disk is also affected. Only a backup can provide protection here.

### Isolation

By isolation, we mean to isolate the effect of transactions from each other. That is, when writing our query, we do not need to concern ourselves with other concurrent transactions; the system will handle this aspect. The developer can write queries as if they were executed in the system alone, and the system will guarantee that it will **prohibit those concurrency issues that we do not want to deal with**.

The system will still run transactions concurrently. However, it guarantees to schedule the transactions to not violate the rules of the isolation level requested by the transaction. Therefore, all transactions need to specify the requested isolation level.

---
Title: 'Transactions' 
Description: Transactions bundle one or more steps into a single unit of work; an all-or-nothing operation where all statements succeed or all statements fail.'
Subjects: 
  - 'Computer Science'
  - 'Data Science'
  - 'An nth subject name'
Tags: 
  - 'PostgreSQL'
  - 'Database'
  - 'Finance'
CatalogContent: 
    - 'paths/design-databases-with-postgresql'
    - 'getting-started-off-platform-for-data-science'
    - 'ext-courses/google-associate-cloud-engineer-configuring-google-cloud'
---

**Transactions** are a fundamental concept in PostgreSQL that bundles one or more steps into a single unit of work. It is an all-or-nothing operation where all statements succeed or all statements fail. The intermediate states between the steps are not visible to other concurrent transactions, and if a failure occurs that prevents the transaction from completing, it does not affect the database.

Examples for when to use transactions would be in finance, such as a bank database that contains balances for various customer accounts, and total deposit balances for branches. Transactions are fundamental for maintaining the accuracy and reliability of the records in a database.

## Syntax

There are three main commands in a transaction. These are the `BEGIN`, `COMMIT`, and `ROLLBACK` statements.

`BEGIN` starts a transaction block.

```sql
BEGIN;
```

If you do *not* issue a `BEGIN` command, each individual statement has an implicit `BEGIN`. If successful, it will have a `COMMIT` wrapped around it.

`COMMIT`  permanently saves the changes made within the transaction block to the database.

```sql
COMMIT;
```

`ROLLBACK` is used to undo a transaction. It cancels all changes made in the current transaction block. This can also be used if partway through the transaction, there is no need to commit these changes.

```sql
ROLLBACK;
```

Putting it all together, here is the general syntax for the three commands:
```sql
BEGIN;
-- set of statements
COMMIT; 
```

or

```sql
BEGIN;
-- set of statements
ROLLBACK; 
```

## Example 1

A customer named Alice has a bank account. Here is an oversimplified example that demonstrates the usage of a transaction block using the `BEGIN` and `COMMIT` commands:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
  WHERE name = 'Alice';
-- set of statements
COMMIT;
```

The transaction is set up by surrounding the SQL commands with `BEGIN` and `COMMIT` commands.

## Example 2
Customers Alice, Bob, and Carol each have bank accounts.

To have more control over statements in a transaction, the use of the `SAVEPOINT` command allows a savepoint to be defined. After defining a savepoint, if needed, the transaction can be rolled back to the savepoint with the `ROLLBACK TO` command.

Here is an oversimplified example that demonstrates the usage of a transaction block, implementing the `SAVEPOINT` and `ROLLBACK TO` commands, giving more control over the statements within the transaction block:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
  WHERE name = 'Alice';
-- add a savepoint for Alice's account
SAVEPOINT my_savepoint;
UPDATE accounts SET balance = balance + 100.00
  WHERE name = 'Bob';
-- oops ... this wasn't for Bob, use Carol's account
ROLLBACK TO my_savepoint;
UPDATE accounts SET balance = balance + 100.00
  WHERE name = 'Carol';
COMMIT;
```

Using the `SAVEPOINT` selectively discards parts of the transaction, while committing the rest.

`ROLLBACK TO` prevents the need for rolling back the transaction completely and starting over. This means the database changes between `SAVEPOINT` and `ROLLBACK TO` are discarded, but earlier changes in the savepoint are kept.
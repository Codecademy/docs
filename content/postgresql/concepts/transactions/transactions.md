---
Title: 'Transactions'
Description: 'Transactions bundle one or more steps into a single unit of work; an all-or-nothing operation where all statements succeed or all statements fail.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'PostgreSQL'
  - 'Database'
  - 'Finance'
  - 'Data'
CatalogContent:
  - 'paths/data-science'
  - 'paths/data-science-foundations'
---

**Transactions** are a fundamental concept in PostgreSQL that bundles one or more steps into a single unit of work. It is an all-or-nothing operation where all statements succeed or all statements fail. The intermediate states between the steps are not visible to other concurrent transactions and if a failure occurs that prevents the transaction from completing, it does not affect the database.

Examples for when to use transactions would be in finance, such as a bank database that contains balances for various customer accounts and total deposit balances for branches. Transactions are fundamental for maintaining the accuracy and reliability of the records in a database.

## Syntax

There are three main commands in a transaction. These are `BEGIN`, `COMMIT`, and `ROLLBACK`.

`BEGIN` starts a transaction block:

```pseudo
BEGIN;
```

Even if a `BEGIN` command is _not_ issued, each individual statement has an implicit `BEGIN`. If successful, it will have a `COMMIT` wrapped around it.

`COMMIT` permanently saves the changes made within the transaction block to the database:

```pseudo
COMMIT;
```

`ROLLBACK` is used to undo a transaction. It cancels all changes made in the current transaction block. This can also be used if partway through the transaction, there is no need to commit these changes:

```pseudo
ROLLBACK;
```

Putting it all together, here is the general syntax for the three commands:

```pseudo
BEGIN;
-- Set of statements
COMMIT;
```

Or,

```pseudo
BEGIN;
-- Set of statements
ROLLBACK;
```

## Example 1

A customer named Alice has an initial balance of $500.00 in her bank account. Here is an example that demonstrates the usage of a transaction block using the `BEGIN` and `COMMIT` commands:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
  WHERE name = 'Alice';
-- Set of statements
COMMIT;
```

After the transaction, $100 has been deducted from Alice's balance. To verify Alice's updated balance, a query is run on the `accounts` table:

```sql
SELECT balance FROM accounts WHERE name = 'Alice';
```

Here is the output:

```shell
400.00
```

## Example 2

Customers Alice, Bob, and Carol each start with $500.00 in their bank accounts.

To have more control over statements in a transaction, the `SAVEPOINT` command can be used, which allows a savepoint to be defined. After defining a savepoint, if needed, the transaction can be rolled back to the savepoint with the `ROLLBACK TO` command.

Here is an example that demonstrates the usage of a transaction block, implementing the `SAVEPOINT` and `ROLLBACK TO` commands, giving more control over the statements within the transaction block:

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
  WHERE name = 'Alice';
-- Output: Alice's account was deducted by 100.00 and now has 400.00
-- Add a savepoint for Alice's account
SAVEPOINT my_savepoint;
UPDATE accounts SET balance = balance + 100.00
  WHERE name = 'Bob';
-- Output: Bob's account was increased by 100.00 and now Bob has 600.00
-- Oops... this wasn't for Bob, use Carol's account
ROLLBACK TO my_savepoint;
-- No Output: Bob's account reverts back to 500.00
UPDATE accounts SET balance = balance + 100.00
  WHERE name = 'Carol';
  -- Output: Carol's account was increased by 100.00 and now Carol has 600.00
COMMIT;
```

To verify the balances after the transaction, the `accounts` table is queried:

```sql
SELECT balance FROM accounts WHERE name = 'Alice';
-- Output: 400.00

SELECT balance FROM accounts WHERE name = 'Bob';
-- Output: 500.00

SELECT balance FROM accounts WHERE name = 'Carol';
-- Output: 600.00
```

Using the `SAVEPOINT` selectively discards parts of the transaction, while committing the rest.

`ROLLBACK TO` prevents the need for rolling back the transaction completely and starting over. This means the database changes between `SAVEPOINT` and `ROLLBACK TO` are discarded, but earlier changes in the savepoint are kept.

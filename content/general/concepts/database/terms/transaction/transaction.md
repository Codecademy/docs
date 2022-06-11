---
Title: 'Transaction'
Description: 'Refers to an encapsulated set of instructions sent to a database that must happen as a unit.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Database'
CatalogContent:
  - 'paths/analyze-data-with-sql'
  - 'paths/data-science'
---

A **transaction** is an encapsulated set of instructions sent to a database that must happen as a unit. If something interrupts the transaction, such as an error, none of the instructions in the transaction occur. This ensures that there are never any partially executed transactions.

Transactions are used to preserve the consistency of a database, so that execution of a complex process, such as debiting one account and crediting another, is never partially completed. In the prior example, without transactions, an error or a resource lock could leave the first account debited without making the corresponding credit. Transactions adhere to [ACID properties](https://www.codecademy.com/resources/docs/general/database/acid-properties) in order to ensure this doesn’t happen.

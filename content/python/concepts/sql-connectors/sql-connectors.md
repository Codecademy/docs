---
Title: 'sql-connectors' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'A guide to understanding and using SQL connectors in Python for database interactions.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Data Science'
  - 'Web Development'
  - 'Developer Tools'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Database'
  - 'SQL'
  - 'Python'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-python-3'
  - 'paths/data-science'
---

[Introduction - make sure first mention of concept is in **bold**.] (The first 160 characters of this section will appear as the description of the page when it shows up on search engines. It's important!)
**SQL Connectors** are libraries that enable Python applications to connect to and interact with SQL databases. They serve as a bridge, allowing Python code to execute SQL commands for tasks like creating tables, inserting data, or fetching records. By using SQL connectors, developers can dynamically interact with databases while maintaining the original database structure.

## Setting Up a SQL Connector 
To use a SQL connector, you first need to set up your development environment. This includes installing the appropriate connector library for you database and making sure that youre database server is accessible. 
1. Install the Connector:
- For MySQL: Use ```pip install mysql-connector-python```.
- For PostgreSQL: Use ```pip install psycopg2```
- For SQLite: No installation is needed; it is built into Python's standard library.

2. Set Up the Database
- Make sure the database server is running and accessible. 
- Create or access an exisiting database. 

3. Import the Connector Library
Use the appropriate Python module to work with the database, such as ```mysql.connector``` for MySQL or ```sqlite3``` for SQLite. 


The next step is to connect your database. Connections are established using the ```connect()``` method, which requires parameters like the host, username, password, and database name. 

**General Workflow:**
- Import the connector library. 
- Use the ```connect()``` method to establish a connection.
- Handle connection errors with try-except blocks. 

```codebyte/python
import mysql.connector

connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='password123',
    database='example_db'
)
print("Connection established!")
connection.close()```

## Executing SQL Queries
Once connected, use a cursor object to execute SQL queries. The cursor facilitates operations such as creating tables, inserting data, and retrieving records. 
 **Query Execution:**
 - Use ```cursor.execute()``` to run queries. 
 - Use ```cursor.fetchall()``` to fetch data for SELECT queries.

``` codebyte/python
cursor = connection.cursor()
cursor.execute('SELECT * FROM users')
results = cursor.fetchall()```

for row in results:
    print(row)


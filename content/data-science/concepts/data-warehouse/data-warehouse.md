---
Title: 'Data Warehouse'
Description: 'A data warehouse is a collection of stored data resources that are designed for use in analysis and business intelligence applications.'
Subjects:
  - 'Data Science'
  - 'Data Visualization'
  - 'Machine Learning'
Tags:
  - 'Data Science'
  - 'Deep Learning'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

A **data warehouse** is a collection of stored data resources that are designed for use in analysis and business intelligence applications. The term **data warehousing** refers to the development of these data resources from existing or new sources of data.

The use of data warehousing is a relatively recent development. It is a tool that has grown out of businesses' widespread adoption of analytics and the growing need to have the data that is being collected available in a final form for the use in business intelligence applications, such as Power BI.

## Implementation

There are two main systems used in the development of a data warehouse, commonly known as **ETL** and **ELT**. These two systems are comprised of the same steps, however, the order and hardware vary.

### Extract

The first step is always to collect all of the disparate data sources that will be unified in the data warehouse, which may constitute existing databases, APIs, etc.

### Transform

Traditionally, **transforming** is the second step in the process. The extracted data are stored in a staging area and transformed to meet the needs of the end user.

### Load

**Loading** entails storing or transferring the transformed data to the data warehouse. It is now often the case that the load and transform steps are inverted. With modern cloud computing, the staging step falls away and the final destination (the data warehouse) is where all the processing occurs.

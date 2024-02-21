# Title: 'Indexes second look'

The bigger the table, the more important indices are. Indices are the gateway to the data that is stored in a table. The following visual may help. You have a group of photos. When the number of photos is small, they are easy to find. Who needs organization?  When the number of photos increases, that makes finding one harder. That calls for organization. If they are physical photos, you organize them in boxes and label the boxes. Those labels are indices. These labels allow you to get to a photo quicker.  

With SQL tables the same applies.  The bigger the table, the greater the need for indices to find rows quickly.

## Consider the following Questions:  
1- what is large, a 1,000, 10,000, or 1,000,000 records?  
2- what indices do I need?  
3- Is it possible for indices to harm performance? 

The above questions can be answered by using the analysis tools that come with most any database. These tools will review the performance of any SQL statement. You can also use ANALYZE in SQL statements to help with answers. I prefer to use visual tools that graph out what is occurring when a statement is run. The database engine may break down one SQL statement into multiple statements and the visual tools do an excellent job showing this. Second, the tools will show if the database is doing a scan (reading the table row by row), or a probe (using an index to do one read to get to that row). 

## Specific answers:
1. size is relative. What is large today will be small tomorrow, but I would consider any table over 10,000 rows large enough to consider an index.  
2. The tools will make recommendations, but in an SQL statement, the fields in a where clause are good candidates for indices. Keep in mind that too many cooks spoil the broth, and too many indices spoil the table.  
3. Can indices harm performance. See real life story.  

## Complexity: 
When an index exists for a table, the database must decide whether to use that index to make access faster, or just scan the table. This decision must be made quickly. The algorithms used are rocket science. This is what separates a great database from one that is not. To add to the complexity, a database may use an index if it is close but not a perfect fit. Finally, it may use multiple indices if that gives a close fit. The point is that the process is complex, which is why you need to use the analysis tools. These give you a view into the mind of the database (aka optimizer). 

## Real life story: 

 worked for a major retailer and one of the ends of day processes took about 3 and half hours to complete.  The code was reviewed and blocking records was tried.  This made no difference. I had read somewhere that indices could cause slow performance on large files.  The file being written to had over 30 indices.  A coworker and I decided to see what indices could be removed without impacting other applications.  We consulted with numerous people and concluded only 9 of the existing indices were needed.  We went ahead and removed all but the 9.  The job was monitored, and it went from 3 hours 45 minutes to 45 minutes.  

 Moral of the story: Add indices when needed but do them with care.  Also monitor the installation.    

## Best practices to consider
1. Use Analyze and visual tools to research how a database optimizes queries for a particular table  
2. Teamwork. You will need to consult others. If there is a database administrator, they may be a useful source.  
3. monitor installs. The decisions of the optimizer change with growth or other changes to a table.  


---
Title: 'Cloud Storage'
Description: 'A storage paradigm where data is stored and accessed remotely over the internet.'
Subjects:
  - 'Computer Science'
  - 'Networking'
  - 'Web Development'
  - 'Data Science'
Tags:
  - 'Cloud Computing'
  - 'Infrastructure'
  - 'Storage'
  - 'Data'
  - 'Deployment'
  - 'APIs'
  - 'Azure'
  - 'Firebase'
CatalogContent:
  - 'foundations-of-cloud-computing'
  - 'paths/data-engineer'
  - 'paths/data-science-foundations'
  - 'paths/back-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

**Cloud storage** refers to a model of storage where data is kept on remote servers accessed over the internet. This allows users to store and access their files from anywhere, at any time, as long as they have an internet connection.
In essence, cloud storage provides a virtual hard drive that can be accessed through any device with an internet connection (e.g. desktop, smartphone, tablet, etc.). Users can upload, download, edit, and share files with others without the need for physical storage media like external hard drives or USB sticks.

Some popular cloud storage services include Google Drive, Dropbox, Microsoft OneDrive, and iCloud.

There are three distinct methods of storing data in the cloud commonly in use today: Object Storage, Block Storage & File Storage.

## Object Storage

**Object storage** stores and retrieves data as individual objects, which are then stored across multiple servers in a distributed manner. This approach provides scalability, durability, and high availability. Each object typically consists of metadata (such as name, size, and timestamp) and a file (such as a PDF, Spreadsheet or executable). Object storage lacks the hierarchical structure of file storage (see below), its organization being describable as "flat".

Applications of Object Storage:

- Backups
- Data archiving
- Analytics workloads

Relevant cloud provider docs for Object Storage:

- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide)
- [Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs)
- [Google Cloud Storage](https://cloud.google.com/storage/docs)

## Block Storage

In essence, **block storage** presents itself as a raw storage device, where you can write directly to a specific block without having to worry about the underlying file system structure.
Block storage works by dividing data into "blocks" assigning an arbitrary identifier to each block to enable retrieval.
This approach provides high performance, making it ideal for applications that require low latency and high throughput.

Applications of Block Storage:

- Databases
- Virtual machines
- Traditional hard disk drives (HDDs)

Relevant cloud provider docs for Block Storage:

- [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs)
- [Azure Managed Disks](https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview)
- [Google Persistent Disk](https://cloud.google.com/compute/docs/disks/persistent-disks)

## File Storage

File storage is a type of data storage that stores and retrieves data as individual files or directories.
It's typically presented as a hierarchical structure, with folders and subfolders containing files. In file storage, each file has its own metadata. However, its metadata is more focused on traditional file system permissions than the metadata used in Object Storage. Data is organized in a hierarchical structure.

Applications of File Storage:

- Document Syncing Applications: Google Drive, Dropbox, etc.
- Media Storage: images, videos, etc.

Relevant cloud provider docs for File Storage:

- [Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs)
- [Azure Files](https://learn.microsoft.com/en-us/azure/storage/files)
- [Google Filestore](https://cloud.google.com/filestore/docs)

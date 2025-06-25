---
Title: 'Cloud Storage'
Description: 'A service that allows users to store and access data remotely over the internet.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Cloud Computing'
  - 'Storage'
  - 'Data'
  - 'Infrastructure'
CatalogContent:
  - 'foundations-of-cloud-computing'
  - 'paths/back-end-engineer-career-path'
---

**Cloud storage** provides on-demand storage services over the internet, eliminating the need for physical storage infrastructure. Users can store, access, and manage data remotely through cloud providers, paying only for the storage they use.

## Object storage

Designed for storing large amounts of unstructured data. Data is stored as objects with metadata and unique identifiers. Object storage is highly scalable and commonly used for:

- Backup and archival data
- Media files (images, videos, audio)
- Web content and static assets
- Big data analytics

[Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide)
[Google Cloud Storage](https://cloud.google.com/storage/docs)
[Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs)

## Block storage

Provides raw storage volumes that can be attached to virtual machines. Data is stored in fixed-size blocks and is ideal for:

- Operating system storage
- Database storage
- High-performance applications
- Applications requiring low latency

[Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs)
[Google Persistent Disk](https://cloud.google.com/compute/docs/disks/persistent-disks)
[Azure Managed Disks](https://learn.microsoft.com/en-us/azure/virtual-machines/managed-disks-overview)

## File storage

Shared file systems that can be accessed by multiple users and applications. It organizes data in a hierarchical structure and is suitable for:

- Shared document storage
- Application data that requires file system access
- Content management systems
- Collaborative work environments

[Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs)
[Google Filestore](https://cloud.google.com/filestore/docs)
[Azure Files](https://learn.microsoft.com/en-us/azure/storage/files)

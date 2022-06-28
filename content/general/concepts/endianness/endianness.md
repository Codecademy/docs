---
Title: 'Endianness'
Description: 'Endianness describes the order in which bytes are stored in memory for multi-byte values.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Numbers'
  - 'Memory'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Endianness** describes the order in which bytes are stored in memory for multi-byte values. The options are generally described as big-endian or little-endian. A big-endian system stores the most significant byte at the smallest memory address and the least significant byte at the largest. A little-endian system stores the least significant byte at the smallest memory address and the most significant byte at the largest.

## Example

To store the 32-bit integer `0x0A0B0C0D`, it is broken down into four bytes:

- `0x0A`
- `0x0B`
- `0x0C`
- `0x0D`

The endianness of the computer system defines in what order these bytes are stored in memory. The following examples show it stored at memory address `0xFFF0` for both big- and little-endian systems:

### Big-endian

| Address  | Value  |
| -------- | ------ |
| `0xFFF0` | `0x0A` |
| `0xFFF1` | `0x0B` |
| `0xFFF2` | `0x0C` |
| `0xFFF3` | `0x0D` |

### Little-endian

| Address  | Value  |
| -------- | ------ |
| `0xFFF0` | `0x0D` |
| `0xFFF1` | `0x0C` |
| `0xFFF2` | `0x0B` |
| `0xFFF3` | `0x0A` |

---
Title: 'Cryptography'
Description: 'A method of protecting information and communications through the use of codes that allow only the sender and receiver of a message to view its contents.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
Tags:
  - 'Cybersecurity'
  - 'Cryptography'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/fundamentals-of-cybersecurity'
  - 'introduction-to-personal-digital-security'
---

**Cryptography** is a method of protecting information and communications through the use of codes that allow only the sender and receiver of a message to view its contents. In cryptography, an original message in plaintext is changed by means of an algorithm into something that is unreadable, known as ciphertext.

## Cryptography In-Use

Cryptography provides confidentiality, integrity, authentication for sensitive information while it is stored (at rest), traveling across a network (in transit), and existing in memory (in use). Two main types of cryptosystems enforce confidentiality: symmetric and asymmetric cryptosystems.

### Symmetric vs. Asymmetric Cryptography

Cryptography's approach uses a secret key for both encryption and decryption. Data is changed into a format that cannot be read or interpreted by someone who does not have the key used to encrypt it during this phase. Symmetric cryptography is based on a single shared key that all parties are privy to and can utilize to encrypt and decrypt data. Asymmetric cryptography encrypts and decrypts a message using a pair of similar keys. Anybody can use a public key to encrypt a document so that only the recipient can decrypt it with their private key. A private key is only known to the party that generated it.

## Cryptography's Goals

- _Confidentiality_: confidentiality means that only the intended recipient can decrypt and thus read the message.
- _Non-repudiation_: non-repudiation means the sender of the message cannot backtrack and deny their reasons for sending the message.
- _Integrity_: integrity is the idea that the information contained within the message cannot be tampered with while in storage or transit.
- _Authenticity_: authenticity ensures that both the sender and recipient can confirm each other’s identities and the destination of the message.

---
Title: 'Multi-factor Authentication'
Description: 'Multi-factor Authentication (MFA) is the use of more than one factor to prove the identity of a user.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
Tags:
  - 'Best Practices'
  - 'Cybersecurity'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'paths/computer-science'
---

**Multi-factor Authentication (MFA)** is the use of more than one factor to prove the identity of a user.

One factor is typically a username or email and password combination. This is the basic log-in functionality that most websites require users to create when initially signing up for an account.

## Factors

There are, broadly speaking, five ways for a user to prove his identity. A user can prove his identity through

- Something he knows
- Something he has
- Something he is
- Some*where* he is
- Some*when* he is

Multi-factor authentication is typically discussed online or in a corporate context as two-factor authentication (2FA) which consists in the user providing two of the above factors as a means to more securely verify his identity. More factors being used in the verification process results in greater security. 

Below are common examples for each of the authentication factors.

## Examples

### Something the User Knows

Typically the first (and often only) factor used to verify user identity. Examples include the user knowing:

- a password
- a personal identification number (PIN)
- a signature

### Something the User Has

This factor refers to a physical object in the possession of the user. Something the user has is often the second factor of authentication referred to in a 2FA authentication procedure. Examples include the user having:

- a mobile phone
- a USB key
- a security token
- a bank card
- a lock key

The physical objects used for verification are signed in such a way as to certify their belonging to the individual whose identity is being verified (e.g., a model number on a lock key, a PIN being sent to the user's phone, etc.)

### Something the User Is

Something the user is can refer to the user's biology in the form of biometric markers. This factor can also refer to the user's behavioral tendencies. Examples include the user's:

- fingerprint
- face
- voice
- iris
- keystroke typing dynamics

### Somewhere the User Is

This factor uses information about the user's location. Examples include the user's:

- [geolocation](https://www.codecademy.com/resources/docs/general/geolocation)
- proximity to a particular location

Somewhere the user is may be used, for example, to allow the user access to a mobile phone only if the user is within a certain distance of his or her workplace.

### Somewhen the User Is

Somewhen the user is refers to a specific time of the day or to a specific date during which the user finds him or herself in. Although rarely used as a standalone factor, certain security tokens methods of authentication use the user's temporal location by enforcing that the tokens sent to the user to verify his identity remain valid for no longer than 30 or 60 seconds (more on security tokens is found in the Two-Factor Authentication Examples Section below). 

### Two-Factor Authentication Examples

- ATMs often require a physical card (something the user has) and a memorized PIN (something the user knows) to successfully withdraw cash.

- Secure sites, like [GitHub](https://www.codecademy.com/resources/docs/general/github), allow users to enable MFA through a PIN that's sent to the user's physical device like a mobile phone or tablet. This is very secure because to be verified, a person would need the physical device which probably has a PIN (something the user has) and biometric marker factor (something the user is).

Other factors, depending on the verification system, include the following:

- A physical item belonging to the user (e.g., a mobile phone).
- A personal identity number (PIN), key, or token that only the user should know prior, or an authentication code that is e-mailed, texted, or phoned-in to the user in real-time.
- Some biometric marker for the user (fingerprints, voice-recognition, key-stroke patterns, etc.).
- Information about the user's [geolocation](https://www.codecademy.com/resources/docs/general/geolocation).
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

There are, broadly speaking, five ways for a user to prove their identity. A user can prove their identity through the following:

- Something the user knows
- Something the user has
- Something the user is
- Somewhere the user is
- Somewhen the user is

Multi-factor authentication is typically discussed online or in a corporate context as two-factor authentication (2FA) which consists in the user providing two of the above factors as a means to more securely verify their identity. More factors being used in the verification process results in greater security.

Below are common examples for each of the authentication factors.

## Examples

### Something the User Knows

Typically the first (and often only) factor used to verify user identity. Examples include the user knowing:

- A password
- A personal identification number (PIN)
- A signature

### Something the User Has

This factor refers to a physical object in the possession of the user. Something the user has is often the second factor of authentication referred to in a 2FA authentication procedure. Examples include the user having:

- A mobile phone
- A USB key
- A security token
- A bank card
- A physical key

The physical objects used for verification are signed in such a way as to certify their belonging to the individual whose identity is being verified (e.g., a model number on a lock key, a PIN being sent to the user's phone, etc.)

### Something the User Is

Something the user is typically refers to the user's biology in the form of biometric markers. This factor can also refer to the user's behavioral tendencies. Examples include the user's:

- Fingerprint(s)
- Face
- Voice
- Iris(es)
- Keystroke typing dynamics

### Somewhere the User Is

This factor uses information about the user's location. Examples include the user's:

- [Geolocation](https://www.codecademy.com/resources/docs/general/geolocation)
- Proximity to a particular location

Somewhere the user is may be used, for example, to allow the user access to a mobile phone only if the user is within a certain distance of his or her workplace.

### Somewhen the User Is

Somewhen the user is refers to a specific time of the day or to a specific date during which the user finds him or herself in. Although rarely used as a standalone factor, certain security tokens methods of authentication use the user's temporal location by enforcing that the tokens sent to the user to verify his identity remain valid for no longer than 30 or 60 seconds (more on security tokens is found in the Two-Factor Authentication Examples Section below).

### Two-Factor Authentication Examples

ATMs often require a physical card (something the user has) and a memorized PIN (something the user knows) to successfully withdraw cash.

Secure sites, like [GitHub](https://www.codecademy.com/resources/docs/general/github), allow users to enable MFA through a PIN that's sent to the user's physical device like a mobile phone or tablet. This is very secure because to be verified, a person would need the physical device which probably has a PIN (something the user has) and biometric marker factor (something the user is).

Corporations and universities increasingly require that their employees login to their staff email accounts by using 2FA: the first authentication factor is the employee's email address and password (something the employee knows) and the second authentication factor is typically a security token (something the employee has). The security token may be an authentication code that is e-mailed, texted, or phoned-in to the user in real-time. Security tokens are nowadays often generated through the use of authenticator apps or keys as one-time passwords (OTPs). The uniqueness of the OTP can be enforced by allowing the user access to the OTP only for a limited amount of time (so-called time-based one time passwords or TOTPs) or it can be enforced by changing the OTP when a well-defined event occurs like the opening of a lock for example (so-called HMAC-based one time passwords or HOTPs). Authenticator applications examples include the [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US), the [Microsoft Authenticator](https://play.google.com/store/apps/details?id=com.azure.authenticator), and the [Aegis Authenticator](https://getaegis.app/). Physical OTP generators include the [Yubikey](https://www.yubico.com/), the [Nitrokey](https://www.nitrokey.com/), and the [Protectimus Slim NFC](https://www.protectimus.com/slim-mini/index.php).

---
Title: 'Geolocation'
Description: 'Geolocation refers to the process of determining the geographic location of an object, usually through electronic means such as GPS.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Map'
  - 'Positioning'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Geolocation** refers to the process of determining the geographic location of an object, usually through electronic means such as GPS. A modern example of geolocation is the location function in various electronic devices such as smartphones.

Many modern applications can be given access to a device's geolocation data, so a review app can show restaurants within a few miles/kilometers, a banking app can show nearby branches, or a game can offer [augmented reality](https://www.codecademy.com/resources/docs/general/augmented-reality) experiences based on where the device is located.

Also, most smartphones have a mapping app that can locate the phone on a street map in order to provide directions to some other location.

## Common Geolocation Methods

These are the main ways a smartphone (and other consumer electronic device) can provide geolocation services:

- The Global Positioning System (GPS): A device can have a GPS receiver that communicates with the GPS satellite system that uses the positions of the satellites it can communicate with to determine its position on the ground. A disadvantage is that things like heavy tree cover or buildings can interfere with the signal.
- Wireless: A device connects with several different cell towers in the area and using signal strength and [triangulation](https://en.wikipedia.org/wiki/Triangulation) determines its position on the ground. The disadvantage is this can be inaccurate when there are limited cell towers available, and will not work where there is no cell reception.
- The Wi-Fi Positioning System (WPS): Like Wireless positioning above, but instead of cell towers, uses the positions of nearby Wi-Fi hotspots. This is generally only useful in urban locations with dense Wi-Fi coverage.
- Wireless-assisted GPS: Combines Wireless and/or WPS with GPS to compensate for the weaknesses of the different methods. It can often get the device's location faster than GPS alone.

---
Title: '.getcolors()'
Description: 'Returns colors and their frequencies in an image.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Images'
  - 'Pillow'
  - 'Python'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

In the Pillow library, the **`.getcolors()`** method retrieves a list of colors present in an image, along with the count of how many times each color appears. This method is useful for tasks like analyzing image content, generating color palettes, or simplifying images by identifying dominant colors.

## Syntax

```pseudo
Image.getcolors(maxcolors=256)
```

**Parameters:**

- `maxcolors` (int): The maximum number of unique colors to return.
  - If the number of colors in the image exceeds `maxcolors`, the method returns `None`.
  - If `None` is passed (or a sufficiently large number), it will attempt to return all colors.

**Return value:**

Returns a list of tuples. Each tuple is of the form `(count, color)`:

- `count`: Number of pixels with that color.
- `color`: The color value (e.g., RGB or grayscale).

## Example

The image to be used for this example is:

![Input image to perform the .getcolors() operation](https://raw.githubusercontent.com/Codecademy/docs/main/media/samandgos.jpg)

In this example, the `.getcolors()` method returns a list of `(count, color)` tuples representing the number of times each color occurs in the image:

```py
from PIL import Image

# Open the image
image = Image.open("samandgos.jpg")

# Convert the image to RGB
image = image.convert("RGB")

# Reduce the image to 256 colors
image = image.quantize(colors=256)

# Use the .getcolors() method
colors = image.getcolors(maxcolors=256)

if colors is None:
  print("Still too many colors")
else:
  for count, color in colors:
    print(f"Color {color} occurs {count} times")
```

The output lists each color in the simplified image along with the number of times it occurs. The output for this example will be:

```shell
Color 0 occurs 5351 times
Color 1 occurs 2097 times
Color 2 occurs 8281 times
Color 3 occurs 4160 times
Color 4 occurs 2251 times
Color 5 occurs 9037 times
Color 6 occurs 7575 times
Color 7 occurs 4630 times
Color 8 occurs 5681 times
Color 9 occurs 4452 times
Color 10 occurs 1004 times
Color 11 occurs 3223 times
Color 12 occurs 8721 times
Color 13 occurs 4921 times
Color 14 occurs 1966 times
Color 15 occurs 7166 times
Color 16 occurs 7571 times
Color 17 occurs 6468 times
Color 18 occurs 4326 times
Color 19 occurs 4736 times
Color 20 occurs 4187 times
Color 21 occurs 6036 times
Color 22 occurs 5684 times
Color 23 occurs 5236 times
Color 24 occurs 2330 times
Color 25 occurs 6085 times
Color 26 occurs 3656 times
Color 27 occurs 5693 times
Color 28 occurs 6344 times
Color 29 occurs 2655 times
Color 30 occurs 3257 times
Color 31 occurs 3736 times
Color 32 occurs 4065 times
Color 33 occurs 7523 times
Color 34 occurs 3035 times
Color 35 occurs 6328 times
Color 36 occurs 5641 times
Color 37 occurs 5685 times
Color 38 occurs 6326 times
Color 39 occurs 6679 times
Color 40 occurs 6636 times
Color 41 occurs 7761 times
Color 42 occurs 4872 times
Color 43 occurs 5512 times
Color 44 occurs 2918 times
Color 45 occurs 1415 times
Color 46 occurs 5392 times
Color 47 occurs 6004 times
Color 48 occurs 6780 times
Color 49 occurs 2384 times
Color 50 occurs 1511 times
Color 51 occurs 4944 times
Color 52 occurs 4678 times
Color 53 occurs 6499 times
Color 54 occurs 6695 times
Color 55 occurs 4522 times
Color 56 occurs 5444 times
Color 57 occurs 4856 times
Color 58 occurs 5478 times
Color 59 occurs 6711 times
Color 60 occurs 3428 times
Color 61 occurs 4900 times
Color 62 occurs 6881 times
Color 63 occurs 3274 times
Color 64 occurs 5509 times
Color 65 occurs 5787 times
Color 66 occurs 2966 times
Color 67 occurs 4922 times
Color 68 occurs 3112 times
Color 69 occurs 2656 times
Color 70 occurs 4266 times
Color 71 occurs 3805 times
Color 72 occurs 3642 times
Color 73 occurs 2387 times
Color 74 occurs 3697 times
Color 75 occurs 5587 times
Color 76 occurs 6387 times
Color 77 occurs 5384 times
Color 78 occurs 3397 times
Color 79 occurs 5873 times
Color 80 occurs 5233 times
Color 81 occurs 4251 times
Color 82 occurs 5992 times
Color 83 occurs 4090 times
Color 84 occurs 3494 times
Color 85 occurs 4198 times
Color 86 occurs 5352 times
Color 87 occurs 4583 times
Color 88 occurs 6856 times
Color 89 occurs 2130 times
Color 90 occurs 3103 times
Color 91 occurs 5131 times
Color 92 occurs 5134 times
Color 93 occurs 4499 times
Color 94 occurs 5915 times
Color 95 occurs 6793 times
Color 96 occurs 3934 times
Color 97 occurs 7124 times
Color 98 occurs 5011 times
Color 99 occurs 6726 times
Color 100 occurs 6869 times
Color 101 occurs 7047 times
Color 102 occurs 4238 times
Color 103 occurs 5505 times
Color 104 occurs 5404 times
Color 105 occurs 3465 times
Color 106 occurs 4124 times
Color 107 occurs 4391 times
Color 108 occurs 4349 times
Color 109 occurs 4072 times
Color 110 occurs 4062 times
Color 111 occurs 4802 times
Color 112 occurs 4841 times
Color 113 occurs 6089 times
Color 114 occurs 7084 times
Color 115 occurs 1471 times
Color 116 occurs 3802 times
Color 117 occurs 4654 times
Color 118 occurs 7700 times
Color 119 occurs 1397 times
Color 120 occurs 3759 times
Color 121 occurs 2965 times
Color 122 occurs 5437 times
Color 123 occurs 2259 times
Color 124 occurs 6166 times
Color 125 occurs 5180 times
Color 126 occurs 4777 times
Color 127 occurs 5131 times
Color 128 occurs 5566 times
Color 129 occurs 4653 times
Color 130 occurs 7840 times
Color 131 occurs 4962 times
Color 132 occurs 2570 times
Color 133 occurs 1590 times
Color 134 occurs 4376 times
Color 135 occurs 3156 times
Color 136 occurs 4364 times
Color 137 occurs 3165 times
Color 138 occurs 4866 times
Color 139 occurs 5165 times
Color 140 occurs 6053 times
Color 141 occurs 3941 times
Color 142 occurs 4895 times
Color 143 occurs 2444 times
Color 144 occurs 5314 times
Color 145 occurs 5200 times
Color 146 occurs 3863 times
Color 147 occurs 5288 times
Color 148 occurs 6256 times
Color 149 occurs 7713 times
Color 150 occurs 4387 times
Color 151 occurs 6095 times
Color 152 occurs 6858 times
Color 153 occurs 3763 times
Color 154 occurs 6492 times
Color 155 occurs 3406 times
Color 156 occurs 2824 times
Color 157 occurs 4030 times
Color 158 occurs 4426 times
Color 159 occurs 4754 times
Color 160 occurs 5036 times
Color 161 occurs 6252 times
Color 162 occurs 5088 times
Color 163 occurs 4866 times
Color 164 occurs 4744 times
Color 165 occurs 5393 times
Color 166 occurs 2679 times
Color 167 occurs 5971 times
Color 168 occurs 4345 times
Color 169 occurs 2580 times
Color 170 occurs 5619 times
Color 171 occurs 3361 times
Color 172 occurs 2991 times
Color 173 occurs 5328 times
Color 174 occurs 3382 times
Color 175 occurs 6777 times
Color 176 occurs 3731 times
Color 177 occurs 4512 times
Color 178 occurs 7768 times
Color 179 occurs 2396 times
Color 180 occurs 3988 times
Color 181 occurs 5164 times
Color 182 occurs 3219 times
Color 183 occurs 7530 times
Color 184 occurs 3541 times
Color 185 occurs 4831 times
Color 186 occurs 5813 times
Color 187 occurs 4139 times
Color 188 occurs 3720 times
Color 189 occurs 7937 times
Color 190 occurs 3594 times
Color 191 occurs 5397 times
Color 192 occurs 6046 times
Color 193 occurs 5681 times
Color 194 occurs 4991 times
Color 195 occurs 5647 times
Color 196 occurs 4275 times
Color 197 occurs 4706 times
Color 198 occurs 8018 times
Color 199 occurs 5323 times
Color 200 occurs 3471 times
Color 201 occurs 3415 times
Color 202 occurs 5235 times
Color 203 occurs 5785 times
Color 204 occurs 5801 times
Color 205 occurs 2675 times
Color 206 occurs 5914 times
Color 207 occurs 3447 times
Color 208 occurs 2012 times
Color 209 occurs 5605 times
Color 210 occurs 5324 times
Color 211 occurs 5453 times
Color 212 occurs 5658 times
Color 213 occurs 3313 times
Color 214 occurs 1382 times
Color 215 occurs 4038 times
Color 216 occurs 3344 times
Color 217 occurs 6042 times
Color 218 occurs 4893 times
Color 219 occurs 4783 times
Color 220 occurs 5210 times
Color 221 occurs 7954 times
Color 222 occurs 5376 times
Color 223 occurs 5203 times
Color 224 occurs 3249 times
Color 225 occurs 4644 times
Color 226 occurs 6352 times
Color 227 occurs 5741 times
Color 228 occurs 3665 times
Color 229 occurs 4127 times
Color 230 occurs 4011 times
Color 231 occurs 6437 times
Color 232 occurs 4812 times
Color 233 occurs 3079 times
Color 234 occurs 4886 times
Color 235 occurs 3857 times
Color 236 occurs 5840 times
Color 237 occurs 4717 times
Color 238 occurs 7219 times
Color 239 occurs 6421 times
Color 240 occurs 5862 times
Color 241 occurs 3208 times
Color 242 occurs 5490 times
Color 243 occurs 4975 times
Color 244 occurs 4550 times
Color 245 occurs 5399 times
Color 246 occurs 5703 times
Color 247 occurs 5256 times
Color 248 occurs 4182 times
Color 249 occurs 5518 times
Color 250 occurs 5247 times
Color 251 occurs 4176 times
Color 252 occurs 3356 times
Color 253 occurs 5822 times
Color 254 occurs 4965 times
Color 255 occurs 4028 times
```

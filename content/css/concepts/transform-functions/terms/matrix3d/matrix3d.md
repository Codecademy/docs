---
Title: 'matrix3d()'
Description: 'Defines a 3D transformation using a 4x4 homogeneous matrix of 16 values.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Animation'
  - 'CSS'
  - 'Functions'
  - 'Transform'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`matrix3d()`** function is a CSS transform that defines how an element is rotated, scaled, skewed, and translated (moved) in three-dimensional space using a single 4x4 homogeneous matrix of 16 values. 

> **Heads up**: `matrix3d()` is verbose and error-prone to write by hand. Prefer higher-level functions like translate3d(), rotateX(), rotateY(), rotateZ(), scale3d(), and perspective() unless you specifically need a baked/combined matrix or a transform not directly expressible via the shorthand functions.

## Syntax

```pseudo
transform: matrix3d(a1, a2, a3, a4,
                    b1, b2, b3, b4,
                    c1, c2, c3, c4,
                    d1, d2, d3, d4);
```

**Parameters (What each slot represents):**

While any set of real numbers is allowed, common meanings when composing typical 3D transforms (with a right-handed coordinate system and the element’s origin as the reference) are:

* **a1..c3**: Linear transformation components (combinations of scale, rotate, skew across x/y/z).
* **a4, b4, c4**: Perspective components (projective terms). For an **affine** transform (no perspective), these are usually 0.
* **d1, d2, d3**: Translation along **x, y, z** respectively.
* **d4**: Homogeneous coordinate (typically **1**).

For a **pure affine 3D transform** (no perspective), a typical matrix looks like:
```
| m11 m12 m13 0 |
| m21 m22 m23 0 |
| m31 m32 m33 0 |
| tx  ty  tz  1 |
```

**Return value:**

The `matrix3d()` function returns a `<transform-function>` value that can be used with the `transform` property.

## Example 1: Minimal Perspective "card tilt" with `matrix3d()`

This example applies a slight perspective and rotation effect equivalent to a modest tilt. 

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>matrix3d Card Tilt</title>
  </head>
  <body>
    <div class="card">3D Card</div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f7f9;
  perspective: 800px; /* helps visualize depth */
}

.card {
  width: 220px;
  height: 130px;
  background: #6c5ce7;
  color: white;
  font: 600 18px/1.2 system-ui, sans-serif;
  display: grid;
  place-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);

  /* A gentle tilt: roughly like rotateX(12deg) then rotateY(10deg) */
  transform: matrix3d(
    0.9848,  0.0000,  0.1736,  0,
    0.0301,  0.9781, -0.2050,  0,
   -0.1710,  0.2080,  0.9637,  0,
    0,       0,       0,       1
  );
}
```

This example results in the following output:

![A purple card with a subtle, realistic 3D tilt, enhanced by the page’s perspective.](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix3d1.png)

## Example 2: Replacing chained transforms with a single `matrix3d()`

We first write the readable version, then show the equivalent `matrix3d()` one might bake in after precomputing the matrix (e.g., via a design tool or small script). 

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>Chained vs Matrix3D</title>
  </head>
  <body>
    <div class="box readable">Readable</div>
	<div class="box baked">Baked Matrix</div>
  </body>
</html>
```

The CSS code is:

```css
body {
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 24px;
  place-content: center;
  min-height: 100vh;
  background: #ecf0f1;
  perspective: 700px;
}

.box {
  width: 220px;
  height: 120px;
  display: grid;
  place-items: center;
  color: #fff;
  font: 600 16px/1 system-ui, sans-serif;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.readable {
  background: #00a8ff;
  /* Equivalent: translateZ(40px) rotateY(15deg) rotateX(8deg) scale(0.95) */
  transform: translateZ(40px) rotateY(15deg) rotateX(8deg) scale(0.95);
}

.baked {
  background: #e17055;
  /* A precomputed equivalent matrix3d (approximate) */
  transform: matrix3d(
     0.9135,  0.0000,  0.2507,  0,
     0.0473,  0.9903, -0.1302,  0,
    -0.4034,  0.1387,  0.9045,  0,
     0,       0,      40,       1
  );
}

```

This example results in the following output:

![Two boxes showing visually similar 3D transformations: one using human-readable chained transforms, the other using a single precomputed `matrix3d()`.](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix3d2.png)

## Example 3: Subtle 3D hover parallax with perspective

A card gains depth on hover using a `matrix3d()` that adds a touch of rotation and translation. 

The HTML code is:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
    <title>matrix3d Hover Parallax</title>
  </head>
  <body>
      <div class="panel">Hover Me</div>
  </body>
</html>
```

The CSS code is:

```css
body {
  height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #ffecd2, #fcb69f);
  perspective: 900px;
}

.panel {
  width: 260px;
  height: 160px;
  border-radius: 14px;
  color: #222;
  background: #fff;
  display: grid;
  place-items: center;
  font: 700 18px/1.2 system-ui, sans-serif;
  transition: transform 400ms ease;
  box-shadow: 0 12px 28px rgba(0,0,0,0.18);
}

.panel:hover {
  /* Slight rotateX, rotateY, and translateZ baked into one matrix */
  transform: matrix3d(
     0.9848,  0.0523,  0.1650,  0,
    -0.0342,  0.9954, -0.0885,  0,
    -0.1680,  0.0829,  0.9825,  0,
     0,       0,      22,       1
  );
}
```

This example results in the following output:

![A white card that lifts forward and tilts slightly on hover, creating a refined parallax feel.](https://raw.githubusercontent.com/Codecademy/docs/main/media/matrix3d3.gif)

## Frequently Asked Questions

### 1. What is `matrix3d()` in CSS?

`matrix3d()` is a CSS function that specifies a **4×4 transformation matrix**, enabling 3D transforms (and perspective) in a single, precise instruction. It’s the most general form of CSS transforms.

### 2. When should I use `matrix3d()` instead of rotateX(), translate3d(), etc.?

Use higher-level functions for readability and maintainability. Use `matrix3d()` when:

* You want to **bake** a chain of transforms into a single matrix for performance or distribution.
* You need a transform that’s hard to express with built-ins.
* You are **interoperating** with tooling or math libraries that already produce 4×4 matrices.

### 3. How do I include perspective with `matrix3d()`?

You can either:

* Use the **perspective property** on a parent (most common for UI effects), or
* Embed perspective in the matrix by using non-zero a4, b4, or c4 (advanced). For typical UI, the parent’s perspective is simpler and easier to reason about.

### 4. Does transform order matter with `matrix3d()`?

Yes. When chaining transforms like transform: A B C;, the **rightmost transform is applied first**. If you precompute a `matrix3d()`, ensure you multiply your matrices in the correct order to match CSS behavior.

### 5. Any tips for working safely with `matrix3d()`?

* Start from known-good chained transforms, then export or compute the matrix.
* Keep an identity matrix handy for comparisons and debugging.
* Use small, incremental changes; a wrong number can easily flip or flatten your element.
* Combine with transform-style: preserve-3d; on parents if you’re composing multiple 3D children, and consider backface-visibility: hidden; for clean flips.

## See also

* matrix() (2D), translate3d(), scale3d(), rotateX(), rotateY(), rotateZ(), skew()
* perspective (property) and perspective() function
* transform-origin, transform-style, backface-visibility

If you want, I can also generate a quick helper script to multiply common transforms and output a ready-to-paste `matrix3d()` for your exact angles/distances.

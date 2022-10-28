---
Title: 'microdata'
Description: 'Microdata is a set of tags, introduced with HTML5, that allows search engines and other applications better understand your content and display it in a useful, relevant way.'
Subjects:
  - 'SEO'
Tags:
  - 'HTML'
  - 'tags'
  - 'attributes'
  - 'itemscope'
  - 'schema-markup'
CatalogContent:
  - 'learn-html'
  - 'paths/html'
---

# Getting started with schema.org using Microdata
===============================================

Most webmasters are familiar with HTML tags on their pages. Usually, HTML tags tell the browser how to display the information included in the tag. For example, `<h1>Avatar</h1>` tells the browser to display the text string "Avatar" in a heading 1 format. However, the HTML tag doesn't give any information about what that text string means—"Avatar" could refer to the hugely successful 3D movie, or it could refer to a type of profile picture—and this can make it more difficult for search engines to intelligently display relevant content to a user.

Schema.org provides a collection of shared vocabularies webmasters can use to mark up their pages in ways that can be understood by the major search engines: Google, Microsoft, Yandex and Yahoo!

You use the [schema.org](../) vocabulary along with the [Microdata](http://en.wikipedia.org/wiki/Microdata_(HTML)), [RDFa](http://en.wikipedia.org/wiki/RDFa), or [JSON-LD](http://en.wikipedia.org/wiki/JSON-LD) formats to add information to your Web content. This guide will help get you up to speed with Microdata and schema.org so that you can start adding markup to your web pages.

Although this guide focuses on [Microdata](http://en.wikipedia.org/wiki/Microdata_(HTML)), most examples on the [schema.org](/) site show examples in RDFa and JSON-LD too. The basic ideas (types, properties etc.) introduced here are relevant beyond Microdata - take a look at the examples to see how the details compare.

1.  [How to mark up your content using microdata](#microdata_how)
    1.  [Why use microdata?](#microdata_why)
    2.  [itemscope and itemtype](#microdata_itemscope_itemtype)
    3.  [itemprop](#microdata_itemprop)
    4.  [Embedded items](#microdata_embedded)
2.  [Using the schema.org vocabulary](#schemaorg)
    1.  [schema.org types and properties](#schemaorg_types)
    2.  [Expected types, text, and URLs](#schemaorg_expected)
    3.  [Testing your markup](#schemaorg_testing)
3.  [Advanced topic: Machine-understandable versions of information](#advanced)
    1.  [Dates, times, and durations](#advanced_dates)
    2.  [Enumerations and canonical references](#advanced_enum)
    3.  [Missing/implicit information](#advanced_missing)
    4.  [Extending schema.org](#advanced_extending)

## 1\. How to mark up your content using microdata
-----------------------------------------------

### 1a. Why use microdata?

Your web pages have an underlying meaning that people understand when they read the web pages. But search engines have a limited understanding of what is being discussed on those pages. By adding additional tags to the HTML of your web pages—tags that say, "Hey search engine, this information describes this specific movie, or place, or person, or video"—you can help search engines and other applications better understand your content and display it in a useful, relevant way. Microdata is a set of tags, introduced with HTML5, that allows you to do this.

### 1b. itemscope and itemtype

Let's start with a concrete example. Imagine you have a page about the movie Avatar—a page with a link to a movie trailer, information about the director, and so on. Your HTML code might look something like this:

```
<div>
 <h1>Avatar</h1>
 <span>Director: James Cameron (born August 16, 1954)</span>
 <span>Science fiction</span>
 <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

To begin, identify the section of the page that is "about" the movie Avatar. To do this, add the itemscope element to the HTML tag that encloses information about the item, like this:

```
<div **itemscope**\>
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954) </span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

By adding `itemscope`, you are specifying that the HTML contained in the `<div>...</div>` block is about a particular item.

But it's not all that helpful to specify that there is an item being discussed without specifying what kind of an item it is. You can specify the type of item using the `itemtype` attribute immediately after the `itemscope`.

```
<div itemscope **itemtype="https://schema.org/Movie"**\>
  <h1>Avatar</h1>
  <span>Director: James Cameron (born August 16, 1954)</span>
  <span>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

This specifies that the item contained in the div is in fact a Movie, as defined in the schema.org type hierarchy. Item types are provided as URLs, in this case `https://schema.org/Movie`.

[Back to top](#top)

### 1c. itemprop

What additional information can we give search engines about the movie Avatar? Movies have interesting properties such as actors, director, ratings. To label properties of an item, use the `itemprop` attribute. For example, to identify the director of a movie, add `itemprop="director"` to the element enclosing the director's name. (There's a full list of all the properties you can associate with a movie at https://schema.org/Movie.)

```
<div itemscope itemtype ="https://schema.org/Movie">
  <h1 **itemprop="name"**\>Avatar</h1>
  <span>Director: <span **itemprop="director"**\>James Cameron</span> (born August 16, 1954)</span>
  <span **itemprop="genre"**\>Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" **itemprop="trailer"**\>Trailer</a>
</div>
```

Note that we have added additional `<span>...</span>` tags to attach the `itemprop` attributes to the appropriate text on the page. `<span>` tags don't change the way pages are rendered by a web browser, so they are a convenient HTML element to use with `itemprop`.

Search engines can now understand not just that http://www.avatarmovie.com is a URL, but also that it's the URL for the trailer for the science-fiction movie Avatar, which was directed by James Cameron.

[Back to top](#top)

### 1d. Embedded items

Sometimes the value of an item property can itself be another item with its own set of properties. For example, we can specify that the director of the movie is an item of type Person and the Person has the properties `name` and `birthDate`. To specify that the value of a property is another item, you begin a new `itemscope` immediately after the corresponding `itemprop`.

```
<div itemscope itemtype ="https://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <div **itemprop="director" itemscope itemtype="https://schema.org/Person"**\>
  Director: <span itemprop="name">James Cameron</span> (born <span **itemprop="birthDate"**\>August 16, 1954</span>)
  </div>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
```

[Back to top](#top)

## 2\. Using the schema.org vocabulary
-----------------------------------

### 2a. schema.org types and properties

Not all web pages are about movies and people—in addition to the Movie and Person types described in section 1, schema.org describes a variety of other item types, each of which has its own set of properties that can be used to describe the item.

The broadest item type is [Thing](../Thing), which has four properties: `name`, `description`, `url`, and `image`. More specific types share properties with broader types. For example, a [Place](../Place) is a more specific type of Thing, and a [LocalBusiness](../LocalBusiness) is a more specific type of Place. More specific items inherit the properties of their parent. (Actually, a LocalBusiness is a more specific type of Place _and_ a more specific type of Organization, so it inherits properties from both parent types.)

Here's a set of commonly used item types:

*   Creative works: [CreativeWork](../CreativeWork), [Book](../Book), [Movie](../Movie), [MusicRecording](../MusicRecording), [Recipe](../Recipe), [TVSeries](../TVSeries) ...
*   Embedded non-text objects: [AudioObject](../AudioObject), [ImageObject](../ImageObject), [VideoObject](../VideoObject)
*   [Event](../Event)
*   [Organization](../Organization)
*   [Person](../Person)
*   [Place](../Place), [LocalBusiness](../LocalBusiness), [Restaurant](../Restaurant) ...
*   [Product](../Product), [Offer](../Offer), [AggregateOffer](../AggregateOffer)
*   [Review](../Review), [AggregateRating](../AggregateRating)

You can also see a [full list of all item types](full.html), listed on a single page.

[Back to top](#top)

### 2b. Expected types, text, and URLs

Here are a few notes to keep in mind when adding schema.org markup to your web pages.

*   **More is better, except for hidden text.** In general, the more content you mark up, the better. However, as a general rule, you should mark up only the content that is visible to people who visit the web page and not content in hidden div's or other hidden page elements.
*   **Expected types vs text.** When browsing the schema.org types, you will notice that many properties have "expected types". This means that the value of the property can itself be an embedded item (see section 1d: embedded items). But this is not a requirement—it's fine to include just regular text or a URL. In addition, whenever an expected type is specified, it is also fine to embed an item that is a child type of the expected type. For example, if the expected type is Place, it's also OK to embed a LocalBusiness.
*   **Using the url property.** Some web pages are about a specific item. For example, you may have a web page about a single person, which you could mark up using the Person item type. Other pages have a collection of items described on them. For example, your company site could have a page listing employees, with a link to a profile page for each person. For pages like this with a collection of items, you should mark up each item separately (in this case as a series of Persons) and add the url property to the link to the corresponding page for each item, like this:

```   
    <div itemscope itemtype="https://schema.org/Person">
      <a href="alice.html" **itemprop="url"**\>Alice Jones</a>
    </div>
    <div itemscope itemtype="https://schema.org/Person">
      <a href="bob.html" **itemprop="url"**\>Bob Smith</a>
    </div>
```

[Back to top](#top)

### 2c. Testing your markup

Much like a web browser is important for testing changes to your web page layout, and a code compiler is important for testing code you write, you should also test your schema.org markup to make sure it is implemented correctly. Google provides a rich snippets testing tool, which you can use to test your markup and identify any errors.

## 3\. Advanced topic: Machine-understandable versions of information
------------------------------------------------------------------

Many pages can be described using only the `itemscope`, `itemtype`, and `itemprop` attributes (described in section 1) along with the types and properties defined on schema.org (described in section 2).

However, sometimes an item property is difficult for a machine to understand without additional disambiguation. This section describes how you can provide machine-understandable versions of information when marking up your pages.

*   Dates, times, and durations: use the `time` tag with `datetime`
*   Enumerations and canonical references: use the `link` tag with `href`
*   Missing/implicit information: use the `meta` tag with `content`.

[Back to top](#top)

### 3a. Dates, times, and durations: use the time tag with datetime

Dates and times can be difficult for machines to understand. Consider the date "04/01/11". Does it mean January 11, 2004? January 4, 2011? Or April 1, 2011? To make dates unambiguous, use the `time` tag along with the `datetime` attribute. The value of the `datetime` attribute is the date specified using `YYYY-MM-DD` format. The HTML code below specifies the date unambiguously as April 1, 2011.

**<time datetime="2011-04-01">**04/01/11**</time>**

You can also specify a time within a day, using the `hh:mm` or `hh:mm:ss` format. Times are prefixed with the letter `T` and can be provided along with a date, like this:

**<time datetime="2011-05-08T19:30">**May 8, 7:30pm**</time>**

Let's see this in context. Here's some HTML describing a concert taking place on May 8, 2011. The Event markup includes the name of the event, a description, and the date of the event.

```
<div **itemscope itemtype="https://schema.org/Event"**\>
  <div **itemprop="name"**\>Spinal Tap</div>
  <span **itemprop="description"**\>One of the loudest bands ever
  reunites for an unforgettable two-day show.</span>
  Event date:
  **<time itemprop="startDate" datetime="2011-05-08T19:30">**May 8, 7:30pm**</time>**
</div>
```

Durations can be specified in an analogous way using the `time` tag with the `datetime` attribute. Durations are prefixed with the letter `P` (stands for "period"). Here's how you can specify a recipe cook time of 1 ½ hours:

**<time** itemprop="cookTime" **datetime="PT1H30M"**\>1 1/2 hrs**</time>**

`H` is used to designate the number of hours, and `M` is used to designate the number of minutes.

The date, time, and duration standards are specified by the [ISO 8601 date/time standard](http://en.wikipedia.org/wiki/ISO_8601).

[Back to top](#top)

### 3b. Enumerations and canonical references: use link with href

#### Enumerations

Some properties can take only a limited set of possible values. Programmers often call these "enumerations." For example, an online store with an item for sale could use the [Offer](https://schema.org/Offer) item type to specify the details of the offer. The `availability` property can typically have one of only a few possible values—`In stock`, `Out of stock`, `Pre-order`, and so on. Much like item types are specified as URLs, possible values for an enumeration on schema.org can also be specified as URLs.

Here is an item for sale, marked up with the Offer type and relevant properties:

```
<div itemscope itemtype="https://schema.org/Offer">
  <span itemprop="name">Blend-O-Matic</span>
  <span itemprop="price">$19.95</span>
  <span itemprop="availability">Available today!</span>
</div>
```

And here is the same item, but using `link` and `href` to unambiguously specify the availability as one of the permitted values:

```
<div itemscope itemtype="https://schema.org/Offer">
  <span itemprop="name">Blend-O-Matic</span>
  <span itemprop="price">$19.95</span>
  **<link itemprop="availability" href="https://schema.org/InStock"/>**Available today!
</div>
```

Schema.org provides enumerations for a handful of properties—typically wherever there are a limited number of typical values for a property, there is a corresponding enumeration specified in schema.org. In this case, the possible values for `availability` are specified in [ItemAvailability](https://schema.org/ItemAvailability).

#### Canonical references

Typically, links are specified using the `<a>` element. For example, the following HTML links to the Wikipedia page for the book Catcher in the Rye.

```
<div itemscope itemtype="https://schema.org/Book">
  <span itemprop="name">The Catcher in the Rye</span>—
  by <span itemprop="author">J.D. Salinger</span>
  Here is the book's <a **itemprop="url"** href="http://en.wikipedia.org/wiki/The\_Catcher\_in\_the\_Rye">Wikipedia page</a>.
</div>
```

As you can see, `itemprop="url"` can be used to specify a link to a page on another site (in this case Wikipedia) discussing the same item. Links to 3rd party sites can help search engines to better understand the item you are describing on your web page.

However, you might not want to add a visible link on your page. In this case, you can use a `link` element instead, as follows:

```
<div itemscope itemtype="https://schema.org/Book">
  <span itemprop="name">The Catcher in the Rye</span>—
  **<link itemprop="url" href="http://en.wikipedia.org/wiki/The\_Catcher\_in\_the\_Rye" />**
  by <span itemprop="author">J.D. Salinger</span>
</div>
```

[Back to top](#top)

### 3c. Missing/implicit information: use the meta tag with content

Sometimes, a web page has information that would be valuable to mark up, but the information can't be marked up because of the way it appears on the page. The information may be conveyed in an image (for example, an image used to represent a rating of 4 out of 5) or a Flash object (for example, the duration of a video clip), or it may be implied but not stated explicitly on the page (for example, the currency of a price).

In these cases, use the `meta` tag along with the `content` attribute to specify the information. Consider this example—the image shows users a 4 out of 5 star rating:

```
<div itemscope itemtype="https://schema.org/Offer">
  <span itemprop="name">Blend-O-Matic</span>
  <span itemprop="price">$19.95</span>
  <img src="four-stars.jpg" />
  Based on 25 user ratings
</div>
```

Here is the example again with the rating information marked up.

```
<div itemscope itemtype="https://schema.org/Offer">
  <span itemprop="name">Blend-O-Matic</span>
  <span itemprop="price">$19.95</span>
  <div **itemprop="reviews" itemscope itemtype="https://schema.org/AggregateRating"**\>
    <img src="four-stars.jpg" />
    **<meta itemprop="ratingValue" content="4" />**
    **<meta itemprop="bestRating" content="5" />**
    Based on <span **itemprop="ratingCount"**\>25</span> user ratings
  </div>
</div>
```

This technique should be used sparingly. Only use `meta` with content for information that cannot otherwise be marked up.

[Back to top](#top)

### 3d. Extending schema.org

Most sites and organizations will not have a reason to extend schema.org. However, schema.org offers the ability to specify additional properties or sub-types to existing types. If you are interested in doing this, read more about the [schema.org extension mechanism](https://schema.org/docs/extension.html).

Reference: This whole article was copied exactly from the [schema.org website in the get started section](https://schema.org/docs/gs.html). Feel free to jump in to extend
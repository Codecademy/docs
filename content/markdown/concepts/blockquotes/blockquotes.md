---
Title: 'Blockquotes'
Description: 'Blockquotes indicate that the enclosed text is an extended quotation. They can also be used to bring attention to a thought-provoking quote.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Quotes'
  - 'Documentation'
  - 'GitHub'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Blockquotes indicate that the enclosed text is an extended quotation. They can also be used to bring attention to a thought-provoking quote. Any quotation that is 50 words or longer should be formatted as a blockquote.

To create a blockquote, a right angle bracket `>` is added in front of a paragraph.

```md
> Context and memory play powerful roles in all the truly great meals in one's life.
```

The output would be:

> Context and memory play powerful roles in all the truly great meals in one's life.

## Multiple Paragraphs

Blockquotes can contain multiple paragraphs by having a chevron `>` on the blank lines between them:

```md
> The first rule about fight club is you don’t talk about fight club.
>
> The second rule about fight club is you don’t talk about fight club.
```

The output would be:

> The first rule about fight club is you don’t talk about fight club.
>
> The second rule about fight club is you don’t talk about fight club.

## Nested Blockquotes

Blockquotes can also be nested by adding two chevrons `>>` in front of it:

```md
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

The output would be:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Blockquotes with Other Elements

Blockquotes can contain other Markdown formatted elements, though not all elements can be used.

```md
> ### The quarterly results look great
>
> - Sales were off the chart!
> - Morale is strong!
> - Poised to go public next spring!
>
> > _Everything_ is going according to **the plan**.
```

The output would be:

> ### The quarterly results look great
>
> - Sales were off the chart!
> - Morale is strong!
> - Poised to go public next spring!
>
> > _Everything_ is going according to **the plan**.

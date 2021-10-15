## Link Headers Directly

When a header is linked, preview mode will show only the header, and not the note name.

### Example:

You have a note named Trees.md:
```
## Birch

A thin-leaved deciduous hardwood tree of the genus Betula.

## Oak

A tree or shrub in the genus Quercus of the beech family, Fagaceae.
```

If you then link to the heading `## Birch` in another note, like this:  

```
One of my favorite trees is the [[Trees#Birch]], because it reminds me of spring.
```

It would be displayed like this in preview mode:

> One of my favorite trees is the **Trees > Birch**, because it reminds me of spring.

This looks unnatural in most sentences, and makes it tedious to have to change the preview text on many links to headings. With this plugin enabled the text would instead be displayed like this in preview mode:

> One of my favorite trees is the **Birch**, because it reminds me of spring.
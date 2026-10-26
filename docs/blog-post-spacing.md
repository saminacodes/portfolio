# Blog post spacing

Blog post layout and spacing are defined in `styles/scss/pages/blog.scss` under
`.blog-post-body`. Keep spacing rules scoped to that component so the global
`section` margins in `styles/config.scss` cannot create oversized gaps inside
articles.

## Defaults

- Keep the reading column at a comfortable line length (`max-width: 700px`).
- Separate sections with the responsive `--blog-section-gap` token.
- Separate consecutive paragraphs with `--blog-paragraph-gap`.
- Keep headings close to the text they introduce with `--blog-heading-gap`.
- Reset section and paragraph margins before applying these explicit gaps;
  do not rely on browser defaults or site-wide section spacing.
- Keep body copy at a relaxed line height and use spacing to show structure,
  rather than adding blank paragraphs.

The numbered 2023, 2024, and 2025 lessons use `.blog-lessons` to set a smaller
`0.75rem` section gap: enough to distinguish consecutive numbered items while
keeping the lists compact. Preserve that exception unless the article design
is intentionally changed.

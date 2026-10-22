const blogPosts = [
  {
    slug: "25-lessons-from-2025",
    title: "25 Lessons from 2025",
    date: "2025-12-29",
    category: "Personal",
    color: "yellow",
    excerpt: "Everything I learned in 2025:",
    sections: [
      {
        heading: "A year in review",
        paragraphs: [
          "A collection of lessons from the year, gathered through work, creative projects, and everyday life.",
          "The post is a reminder to pause at the end of a busy year and notice what changed, what mattered, and what is worth carrying forward.",
        ],
      },
    ],
  },
  {
    slug: "24-lessons-from-2024",
    title: "24 Lessons from 2024",
    date: "2024-12-16",
    category: "Personal",
    color: "green",
    excerpt: "You can have it all. You just can’t have it all at once.",
    sections: [
      {
        heading: "On making room for things",
        paragraphs: [
          "A year-end list of lessons about giving different priorities their time, without expecting every part of life to peak at once.",
        ],
      },
    ],
  },
  {
    slug: "23-lessons-from-2023",
    title: "23 Lessons from 2023",
    date: "2023-12-21",
    category: "Personal",
    color: "red",
    excerpt:
      "Consume less, read more. Replace your endless scrolling with books. Your mental health and eyes will thank you.",
    sections: [
      {
        heading: "A little less scrolling",
        paragraphs: [
          "A set of reflections from 2023, including a nudge to make more space for books and less space for endless scrolling.",
        ],
      },
    ],
  },
];

export default blogPosts;

export function getReadTime(post) {
  const text = [
    post.title,
    post.excerpt,
    ...post.sections.flatMap(({ heading, paragraphs }) => [heading, ...paragraphs]),
  ].join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
}

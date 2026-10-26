import Link from "next/link";
import blogPosts, { getReadTime } from "../../data/blogPosts";

export default function BlogPostPage({ post }) {
  const isNumberedLessons = [
    "23-lessons-from-2023",
    "24-lessons-from-2024",
    "25-lessons-from-2025",
  ].includes(post.slug);

  return (
    <main className="blog-page blog-post-page">
      <article className={`blog-post wrapper blog-color-${post.color}`}>
        <Link href="/blog" className="blog-back-link">
          <span aria-hidden="true">←</span> All writing
        </Link>
        <header className={`blog-post-header blog-color-${post.color}`}>
          <h1>{post.title}</h1>
          <p className="blog-post-deck">{post.excerpt}</p>
          <p className="blog-meta">
            <span className={`blog-category blog-color-${post.color}`}>
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{getReadTime(post)}</span>
          </p>
        </header>
        <div className={`blog-post-body${isNumberedLessons ? " blog-lessons" : ""}`}>
          {post.sections.map((section) => (
            <section key={section.heading}>
              {isNumberedLessons ? (
                <p>
                  <strong>{section.heading}</strong>
                  {section.paragraphs.length > 0 && (
                    <> {section.paragraphs.join(" ")}</>
                  )}
                </p>
              ) : (
                <>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </>
              )}
            </section>
          ))}
          <Link href="/blog" className="blog-read-link">
            Back to all writing <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

export function getStaticPaths() {
  return {
    paths: blogPosts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = blogPosts.find(({ slug }) => slug === params.slug);
  return { props: { post } };
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

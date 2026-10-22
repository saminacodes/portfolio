import { useState } from "react";
import Link from "next/link";
import blogPosts, { getReadTime } from "../../data/blogPosts";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Updates", "Pinokio", "Personal"];
  const visiblePosts = blogPosts.filter(
    ({ category }) => selectedCategory === "All" || category === selectedCategory
  );

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="wrapper">
          <h1>Writing</h1>
          <p className="blog-intro">
            Notes on things I’m learning, making, and thinking about.
          </p>
        </div>
      </section>

      <section className="blog-listing" aria-label="Writing archive">
        <div className="wrapper">
          <div
            className="blog-filters"
            role="group"
            aria-label="Filter posts by category"
          >
            {categories.map((category) => (
              <button
                className={`blog-filter-${category.toLowerCase()} ${
                  selectedCategory === category ? "is-active" : ""
                }`}
                type="button"
                key={category}
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="blog-list">
            {visiblePosts.map((post) => (
              <article
                className={`blog-list-item blog-color-${post.color}`}
                key={post.slug}
              >
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <p className="blog-meta">
                  <span className={`blog-category blog-color-${post.color}`}>
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span>{getReadTime(post)}</span>
                </p>
              </article>
            ))}
            {visiblePosts.length === 0 && (
              <p className="blog-empty-state">No posts in this category yet.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

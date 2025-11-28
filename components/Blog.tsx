"use client";

import Image from "next/image";

const blogPosts = [
  {
    title: "Design conferences in 2022",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-1.jpg",
    description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-2.jpg",
    description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    title: "Design digest #80",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-3.jpg",
    description: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    title: "UI interactions of the week",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-4.jpg",
    description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "The forgotten art of spacing",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-5.jpg",
    description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Design digest #79",
    category: "Design",
    date: "Feb 23, 2022",
    image: "/images/blog-6.jpg",
    description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];

export default function Blog() {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{post.date}</time>
                  </div>

                  <h3 className="blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

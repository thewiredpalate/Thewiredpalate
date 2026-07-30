export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "welcome-to-the-wired-palate",
    title: "Welcome to The Wired Palate",
    date: "2026-07-31",
    excerpt: "The first post on the site — what this blog is about and what's coming next.",
    content:
      "This is the first post on The Wired Palate. More content coming soon — check back for updates.",
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

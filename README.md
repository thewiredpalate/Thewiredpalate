# The Wired Palate

A blog built with Next.js (App Router), TypeScript, and Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```
src/
  app/            App Router pages (home, /blog, /blog/[slug], /about)
  components/     Shared UI components (Header, Footer)
  lib/posts.ts    Post data — add new posts here
```

## Adding a post

Add a new entry to the `posts` array in [src/lib/posts.ts](src/lib/posts.ts):

```ts
{
  slug: "my-new-post",
  title: "My New Post",
  date: "2026-08-01",
  excerpt: "A short summary shown on the blog index.",
  content: "The full post content.",
}
```

The page at `/blog/my-new-post` is generated automatically.

## Deployment

This repo is connected to Vercel. Pushing to the `main` branch triggers a production deployment automatically; other branches get preview deployments.

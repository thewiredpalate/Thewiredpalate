import { getAllPosts } from "@/lib/posts";
import Hero from "@/components/Hero";
import PillarsSticky from "@/components/home/PillarsSticky";
import StatsMarquee from "@/components/home/StatsMarquee";
import RevealPosts from "@/components/home/RevealPosts";
import NewsletterCta from "@/components/home/NewsletterCta";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      <Hero />
      <StatsMarquee />
      <PillarsSticky />
      <RevealPosts posts={recentPosts} />
      <NewsletterCta />
    </div>
  );
}

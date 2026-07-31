export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Category = "Food" | "Lifestyle" | "Technology";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: Category;
  excerpt: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "best-filipino-comfort-food-manila",
    title: "10 Filipino Comfort Foods You Need to Try in Manila",
    date: "2026-07-20",
    category: "Food",
    excerpt:
      "From sizzling sisig to steaming bowls of arroz caldo, here's a local's guide to the Filipino comfort food worth seeking out in Manila.",
    content: [
      {
        type: "p",
        text: "Manila's food scene moves fast — new cafés and fusion concepts open every month — but the dishes people actually crave on a rainy Tuesday haven't changed in decades. This is a guide to the Filipino comfort food that's worth detouring for, whether you're new to the city or just looking to rediscover it.",
      },
      { type: "h2", text: "1. Sisig, straight off the sizzling plate" },
      {
        type: "p",
        text: "Born in Pampanga and perfected in Manila's countless carinderias, sisig is chopped pork face, ears, and liver seared on a hot plate with calamansi, chili, and onions. The best versions arrive still sizzling, with a fried egg cracked on top that you stir in yourself. Pair it with ice-cold beer and rice, and you understand why it's the unofficial national bar food.",
      },
      { type: "h2", text: "2. Arroz caldo on a rainy afternoon" },
      {
        type: "p",
        text: "This ginger-heavy rice porridge, topped with chicken, fried garlic, and a squeeze of calamansi, is what Filipino households make when someone's under the weather — or when Manila's afternoon rain refuses to let up. Look for stalls that make their own toasted garlic in-house; it's the difference between an average bowl and a memorable one.",
      },
      { type: "h2", text: "3. Kare-kare, for the peanut-sauce faithful" },
      {
        type: "p",
        text: "Oxtail and vegetables stewed in a thick peanut sauce, served with bagoong (fermented shrimp paste) on the side — kare-kare is a special-occasion dish that's thankfully available every day at most Filipino restaurants. The bagoong isn't optional; it cuts through the richness and pulls the whole plate together.",
      },
      {
        type: "list",
        items: [
          "Sisig — Pampanga-style, best eaten sizzling with rice",
          "Arroz caldo — ginger rice porridge, ideal for rainy days",
          "Kare-kare — oxtail in peanut sauce with bagoong",
          "Bicol express — pork simmered in coconut milk and chili",
          "Halo-halo — the definitive Filipino dessert for Manila heat",
        ],
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "You don't need a reservation or a food tour to eat well in Manila — some of the best versions of these dishes come from unassuming carinderias and turo-turo stalls in Quezon City, Makati, and Manila proper. Start with whichever one has a line at lunchtime; that's usually the tell.",
      },
    ],
  },
  {
    slug: "best-coffee-shops-metro-manila-remote-work",
    title: "The Best Coffee Shops in Metro Manila for Remote Work",
    date: "2026-07-24",
    category: "Food",
    excerpt:
      "Strong wifi, real outlets, and coffee worth ordering twice — a working guide to Metro Manila's best cafés for getting things done.",
    content: [
      {
        type: "p",
        text: "Working from a café in Metro Manila means balancing three things: coffee that's actually good, wifi that won't drop mid-call, and a seat you're not going to get kicked out of after an hour. Here's where that balance tends to work out.",
      },
      { type: "h2", text: "What actually matters for a work session" },
      {
        type: "p",
        text: "Fast wifi matters less than stable wifi — a café with consistent 20 Mbps beats one that spikes to 100 Mbps and drops every twenty minutes. After that, look for outlet access near most seats, air conditioning that isn't set to arctic, and background noise low enough for calls but present enough that you don't feel like you're being watched typing.",
      },
      { type: "h2", text: "Independent cafés over chains, most of the time" },
      {
        type: "p",
        text: "Metro Manila's independent specialty coffee shops — concentrated in Poblacion, Katipunan, and pockets of BGC — tend to have better seating for long stays than the mall-based chains, which are often optimized for quick turnover instead. If a café has communal tables and visible laptop stickers on the walls, that's usually a good sign it's used to remote workers.",
      },
      { type: "h2", text: "A realistic weekly rotation" },
      {
        type: "list",
        items: [
          "Morning deep work — a quieter café with strong AC and few walk-in customers",
          "Calls and meetings — somewhere with private nooks or booth seating",
          "Afternoon slump — a spot with good iced coffee and natural light",
          "Casual catch-up work — anywhere with a view and no pressure to move fast",
        ],
      },
      {
        type: "p",
        text: "Rotating between two or three go-to spots beats chasing the newest opening every week — baristas start recognizing your order, and you stop wasting the first twenty minutes scouting for an outlet.",
      },
    ],
  },
  {
    slug: "slow-mornings-routine-manila",
    title: "Slow Mornings: Building a Calmer Routine in a Fast City",
    date: "2026-07-26",
    category: "Lifestyle",
    excerpt:
      "Manila traffic and packed schedules make slow mornings feel impossible — here's how to carve out twenty real minutes before the day takes over.",
    content: [
      {
        type: "p",
        text: "Metro Manila doesn't really do slow. Traffic starts backing up before 7 a.m., group chats start buzzing the moment people wake up, and the pressure to be 'on' arrives before coffee does. A slow morning here isn't about waking up at 5 a.m. to journal for an hour — it's about protecting a small window before the day claims you.",
      },
      { type: "h2", text: "Start smaller than you think" },
      {
        type: "p",
        text: "Twenty minutes is enough. The goal isn't an elaborate routine with five steps and a skincare regimen — it's one deliberate thing done without a screen in hand: making coffee properly instead of grabbing it on the way out, sitting by a window, or just not checking your phone until you're actually ready to.",
      },
      { type: "h2", text: "Work around the commute, not against it" },
      {
        type: "p",
        text: "If your commute eats the first hour of your day regardless, the slow morning has to happen before you leave the house, not during. That might mean waking up fifteen minutes earlier — not for productivity, but so the first thing you do isn't reactive.",
      },
      { type: "h2", text: "What this isn't" },
      {
        type: "p",
        text: "It's not a wellness aesthetic and it doesn't require matching ceramics. Some mornings the 'slow' part is just eating pandesal at the table instead of in the car. The point is a few unrushed minutes that are yours before the calls, the group chats, and the traffic reports take over.",
      },
    ],
  },
  {
    slug: "digital-nomad-philippines-best-cities",
    title: "Digital Nomad Life in the Philippines: Where to Base Yourself",
    date: "2026-07-28",
    category: "Lifestyle",
    excerpt:
      "From Manila's fast pace to Cebu's balance to Siargao's slower rhythm — a practical look at where remote workers actually settle in the Philippines.",
    content: [
      {
        type: "p",
        text: "The Philippines has become a genuine option for remote workers who want island living without giving up decent internet. But 'the Philippines' isn't one place to work from — Manila, Cebu, and Siargao each offer a different trade-off between infrastructure, cost, and pace of life.",
      },
      { type: "h2", text: "Manila: best infrastructure, least island fantasy" },
      {
        type: "p",
        text: "If reliable internet, abundant coworking spaces, and easy flight connections matter more than scenery, Metro Manila is the practical choice. It's also the most expensive and most trafficked — expect to plan your day around avoiding EDSA at rush hour.",
      },
      { type: "h2", text: "Cebu: the middle ground" },
      {
        type: "p",
        text: "Cebu City offers a genuine balance: solid coworking spaces and fiber internet in most condos, beach weekends a short drive away, and a noticeably slower pace than Manila without sacrificing much connectivity. It's become the default answer for nomads who want both productivity and proximity to the water.",
      },
      { type: "h2", text: "Siargao: slowest pace, most planning required" },
      {
        type: "p",
        text: "Siargao is where people go to actually unplug — which is exactly the problem if your job requires consistent video calls. Internet has improved significantly, but power interruptions and weather-dependent connectivity are still real considerations. It works best for asynchronous work or shorter stays.",
      },
      {
        type: "list",
        items: [
          "Manila — best infrastructure, highest cost, heaviest traffic",
          "Cebu — balanced connectivity, beach access, moderate cost",
          "Siargao — slowest pace, least reliable infrastructure, best for short stays",
        ],
      },
      {
        type: "p",
        text: "Most people who stay long-term end up splitting time across two of the three — Manila or Cebu for the working weeks, somewhere quieter for the reset.",
      },
    ],
  },
  {
    slug: "best-coworking-spaces-metro-manila-fast-internet",
    title: "Best Coworking Spaces in Metro Manila With Fast, Reliable Internet",
    date: "2026-07-29",
    category: "Technology",
    excerpt:
      "Speed tests, backup connections, and 24/7 access — what actually separates a good coworking space in Metro Manila from a mediocre one.",
    content: [
      {
        type: "p",
        text: "In a city where internet speed can vary block by block, a coworking space's real value isn't the free coffee or the ergonomic chairs — it's whether the connection holds up during a client call. Here's what to actually check before signing up.",
      },
      { type: "h2", text: "Ask about redundancy, not just speed" },
      {
        type: "p",
        text: "Any space can advertise '100 Mbps fiber.' Fewer can tell you what happens when that line goes down. The better coworking spaces in BGC, Makati, and Ortigas run a secondary ISP as backup, so a single provider outage doesn't take the whole building offline. Ask directly — it's usually a good filter for how seriously a space takes uptime.",
      },
      { type: "h2", text: "24/7 access matters more than the amenities list" },
      {
        type: "p",
        text: "If you work with international clients or teams in different time zones, a space that locks at 10 p.m. isn't going to work for a 6 a.m. call with a US-based team. Confirm access hours before the free-trial tour, not after you've already signed a monthly plan.",
      },
      { type: "h2", text: "What to test on a walkthrough" },
      {
        type: "list",
        items: [
          "Run a speed test from a seat in the general area, not just near the router",
          "Ask what happens during a brownout — do they have backup power for the internet, not just the lights",
          "Check if call booths are actually soundproofed or just visually separated",
          "Confirm printing, scanning, and mail-handling if you need them",
        ],
      },
      {
        type: "p",
        text: "A coworking space is infrastructure, not decor. The nicest interior in Metro Manila won't save a client call from a dropped connection.",
      },
    ],
  },
  {
    slug: "ai-tools-filipino-developers-2026",
    title: "AI Tools Filipino Developers Are Actually Using in 2026",
    date: "2026-07-31",
    category: "Technology",
    excerpt:
      "Beyond the hype cycle — a practical rundown of the AI coding tools that have become part of the daily workflow for developers in the Philippines.",
    content: [
      {
        type: "p",
        text: "The AI tooling conversation in global tech media often skips over what's actually practical for developers working with Philippine internet speeds, client budgets, and outsourcing-heavy teams. Here's what's genuinely part of the daily workflow, not just the demo reel.",
      },
      { type: "h2", text: "AI pair programmers, used selectively" },
      {
        type: "p",
        text: "In-editor AI assistants have become standard for boilerplate, test scaffolding, and translating between frameworks — especially useful for developers juggling multiple client stacks, which is common in the Philippines' large freelance and agency market. The habit that separates effective use from wasted subscriptions: reviewing every suggestion before accepting it, not treating the tool as autopilot.",
      },
      { type: "h2", text: "Async-friendly AI for distributed teams" },
      {
        type: "p",
        text: "With so many Filipino developers working on teams spread across US and Australian time zones, AI tools that summarize long Slack threads, draft PR descriptions, and turn meeting recordings into notes have quietly become more valuable than the code-generation features themselves — they cut down the hours spent catching up after waking up to an overnight backlog.",
      },
      { type: "h2", text: "Where teams are still cautious" },
      {
        type: "p",
        text: "Client confidentiality remains the biggest blocker to wider AI adoption in agency work — many teams still avoid pasting client code into hosted tools without an enterprise data agreement in place. That's pushed some studios toward self-hosted or on-premise models for sensitive projects, even at the cost of some convenience.",
      },
      {
        type: "list",
        items: [
          "In-editor AI assistants — fastest ROI for boilerplate and test scaffolding",
          "Meeting/thread summarizers — biggest time saver for distributed, async teams",
          "Self-hosted models — the fallback for client work under NDA",
        ],
      },
      {
        type: "p",
        text: "The honest takeaway: the tools that stick around aren't the flashiest ones, they're the ones that survive contact with a real client deadline and a real NDA.",
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

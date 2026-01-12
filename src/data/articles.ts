import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string[];
  youtubeId?: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "bogota-vs-thailand-expat-reality",
    title: "If You Choose Bogotá, You've Never Been to Thailand — A Reality Check",
    excerpt: "Bangkok and Bogotá are often grouped together in 'top expat cities' lists. On paper, both look attractive. In reality, they deliver very different daily experiences.",
    date: "Jan 4, 2026",
    readTime: "6 min read",
    image: article1,
    category: "City Comparison",
    youtubeId: "dPpvx9uEQ-c",
    content: [
      "If you're an American man over 50 thinking about retiring overseas, city comparisons matter more than lifestyle photos or cost-of-living charts. What really changes your quality of life is how a city feels once novelty fades.",
      "Bangkok and Bogotá are often grouped together in 'top expat cities' lists. On paper, both look attractive. In reality, they deliver very different daily experiences — especially once comfort, safety, mobility, and long-term livability become priorities.",
      "This comparison is not about which city is 'better.' It's about which city better supports long-term, low-friction living after 50.",
      "## Safety and Mental Load: What Your Nervous System Notices First",
      "Safety isn't just crime statistics. It's the background mental energy required to move through a city.",
      "In Bogotá, daily awareness is constant. You think about your phone. You think about your route. You read people's posture. You time exits. None of this feels dramatic — but it's continuous.",
      "Bangkok operates differently. Awareness drops. Body language relaxes. You move without scanning. That reduction in vigilance compounds over months and years.",
      "> Retirement isn't about excitement every day — it's about reducing unnecessary strain.",
      "For men thinking long-term, safety is not fear-based — it's energy-based.",
      "## Transportation: Freedom vs Fatigue",
      "Transportation defines how much of a city you actually use.",
      "Bogotá's TransMilenio is functional but demanding. Crowds, unpredictability, and physical effort turn simple errands into tasks. Many people default to cars — which introduces traffic stress and dependency.",
      "Bangkok's BTS and MRT systems quietly change daily life. Stations are clean. Navigation is intuitive. Movement becomes routine rather than an event.",
      "- **Bogotá:** Transportation requires planning and tolerance.",
      "- **Bangkok:** Transportation enables spontaneity.",
      "As mobility becomes more important with age, frictionless transit stops being a luxury and becomes infrastructure.",
      "## Shopping Malls as Quality-of-Life Infrastructure",
      "Malls aren't about consumption — they're about climate control, accessibility, and services in one place.",
      "In Bogotá, malls are functional but guarded. Security presence is obvious. You feel the boundary between inside and outside.",
      "In Bangkok, malls act as social infrastructure. Medical clinics, supermarkets, cafes, cinemas, banks, and transit all connect seamlessly.",
      "When daily errands don't require mental or physical effort, life gets quieter — and better.",
      "## Coffee Culture and Daily Rituals",
      "Coffee culture reveals how a city treats time.",
      "Bogotá's cafes feel purposeful. You arrive, order, drink, leave.",
      "Bangkok's cafes invite lingering. Power outlets, seating variety, quiet corners. They're designed for time — not turnover.",
      "For retirees, unstructured time is the point. Cities that support that rhythm age better with you.",
      "## The Bottom Line",
      "Both cities have strengths. But if your priority is long-term comfort, low friction, and sustainable daily living after 50, Bangkok offers a more forgiving foundation.",
      "This isn't about adventure. It's about what you don't have to think about — every single day."
    ]
  },
  {
    id: "2",
    slug: "medellin-doesnt-hold-up-the-reality",
    title: "Medellín Doesn't Hold Up to the Reality",
    excerpt: "Medellín sells a compelling storyline: a city reborn, an innovation hub, 'eternal spring,' and a lifestyle destination. A different operating reality has become difficult to ignore.",
    date: "Jan 4, 2026",
    readTime: "10 min read",
    image: article2,
    category: "City Review",
    youtubeId: "0WlPJYIiXys",
    content: [
      "Medellín sells a compelling storyline: a city reborn, an innovation hub, 'eternal spring,' and a lifestyle destination for global visitors.",
      "A different operating reality has become difficult to ignore: targeted predation against foreigners (especially men) linked to dating-app meetups and nightlife, normalized victim-blaming ('no dar papaya'), a stratified social order (estratos) that hardens separation, and an innovation narrative that looks increasingly contested.",
      "When trust is weak, daily life becomes more guarded, business becomes more expensive, and the city's brand becomes a shield rather than a signal.",
      "Medellín is a high-friction base for long-term living if you value peace of mind, predictable social trust, and low-risk daily movement.",
      "## What This Article Is and Is Not",
      "- **Is:** a risk-and-reality memo for expats, remote workers, and operators considering Medellín as a base.",
      "- **Is not:** a comprehensive criminology study, nor a tourism guide.",
      "The objective is to connect well-documented patterns to practical implications: safety exposure, decision quality, and operating costs.",
      "## The Medellín Story People Buy",
      "The city's external spring narrative emphasizes transformation, modern urbanism, creative energy, and entrepreneurship—an exportable identity that attracts large numbers of visitors and short-term residents. That narrative matters because it shapes who arrives and what they expect.",
      "## The Predation Economy: Dating Apps, Druggings, Robberies",
      "A recurring pattern described in institutional alerts and major reporting is consistent:",
      "1. Contact via dating apps or nightlife",
      "2. Movement to semi-controlled spaces (bars, apartments, hotels)",
      "3. Drugging with sedatives",
      "4. Robbery and account draining",
      "5. In some cases, death",
      "This is not a claim that all dating or nightlife is unsafe. The point is that a repeatable and incentive-compatible pipeline exists, and newcomers unfamiliar with local risk norms can become predictable targets.",
      "## 'No Dar Papaya': When Safety Advice Becomes Victim-Blaming",
      "'No dar papaya' is often presented as pragmatic caution: do not make it easy for someone to take advantage. In practice, it can become a moral reflex: harm is interpreted as the victim's failure to follow local rules.",
      "That shift matters because victim-blaming is an anti-trust mechanism:",
      "- It normalizes predation as 'how the city works'",
      "- It discourages reporting",
      "- It reduces pressure for enforcement",
      "For expats, this creates a secondary cost: isolation after harm, and a sense that institutions and community norms will not reliably support recovery or accountability.",
      "## Estratos: A Formal System That Functions Like a Social Boundary",
      "Colombia's estratos classification is often described as an administrative framework linked to public service pricing and subsidies. Regardless of policy intent, it functions socially as a visible status marker—shaping where people live, where they feel they belong, and how social mixing occurs.",
      "A UN envoy cited by Reuters described the system's lived effect as resembling a caste structure, reinforcing separation and inequality.",
      "For newcomers, the practical effect is a city of parallel realities: curated corridors that feel modern and safe, and broader conditions that carry more friction and risk.",
      "## The Innovation Narrative vs The Institutional Reality",
      "Ruta N is positioned as a centerpiece of Medellín's innovation identity. The critique is not that innovation efforts are meaningless, but that innovation districts can become 'islands'—physically and socially disconnected from surrounding communities.",
      "In HBR terms: innovation ecosystems are judged by retention, spillovers, and compounding capability—not by slogans."
    ]
  },
  {
    id: "3",
    slug: "returning-to-the-us-after-six-years-in-asia",
    title: "Returning to the U.S. After 6 Years in Asia",
    excerpt: "After living in Asia for six years, returning to the United States doesn't feel like coming home. It feels like entering a system you remember — but no longer move naturally within.",
    date: "Dec 30, 2025",
    readTime: "6 min read",
    image: article3,
    category: "Expat Life",
    youtubeId: "7cNTdj0Hg40",
    content: [
      "After living in Asia for six years, returning to the United States doesn't feel like coming home. It feels like entering a system you remember — but no longer move naturally within.",
      "This isn't a critique of America. It's an observation of contrast.",
      "For men over 50 who have spent time abroad — or are considering it — reentry becomes a powerful diagnostic. You don't just see what changed. You feel what costs more energy than it used to.",
      "## Momentum and the Fragmented Day",
      "In much of Asia, daily life flows. Errands stack. Transit connects. Tasks compress.",
      "Back in the U.S., the day fragments. Driving isolates activities. Simple errands require separate trips. Time expands — but not in a relaxing way.",
      "The issue isn't productivity. It's momentum.",
      "> When a day loses continuity, it quietly becomes more exhausting.",
      "## Efficiency Without Connection",
      "America remains efficient. Systems work. Processes are optimized.",
      "But efficiency often comes without human texture. Interactions are transactional. Silence replaces small talk. Movement feels solitary.",
      "In Asia, efficiency often includes presence. Someone notices. Someone helps without instruction. Someone bridges gaps.",
      "Over time, that difference shapes emotional baseline.",
      "## Apartment Hunting and Economic Reality",
      "Apartment tours in the U.S. reveal more than square footage. They reveal trade-offs.",
      "Prices are high. Amenities are separated. Walkability is rare.",
      "What once felt normal now feels conditional. Comfort is available — but it's tiered.",
      "- Location vs affordability",
      "- Space vs convenience",
      "- Privacy vs access",
      "Living abroad resets expectations. Returning exposes how much margin disappeared.",
      "## When Wellness Becomes a Premium Line Item",
      "In Asia, wellness is ambient. Walking is normal. Massage is accessible. Healthy food is integrated.",
      "In the U.S., wellness is packaged. Memberships. Appointments. Subscriptions.",
      "Nothing is impossible — but everything is priced.",
      "> When wellness requires planning and payment, it becomes optional instead of habitual.",
      "## The Bottom Line",
      "Returning to the U.S. doesn't mean rejecting it. But it does mean seeing it clearly.",
      "For those who have lived abroad long enough to reset their baseline, America becomes a choice with real trade-offs — not just a default."
    ]
  },
  {
    id: "4",
    slug: "10-ways-usa-is-exceptional",
    title: "After Traveling the World: 10 Ways the U.S.A. Is Exceptional",
    excerpt: "Despite the costs, America still offers unique advantages no other country can match. Here's what stands out after years abroad.",
    date: "Nov 30, 2025",
    readTime: "18 min read",
    image: article4,
    category: "Expat Life",
    content: [
      "After years of living abroad and visiting dozens of countries, returning to America brings perspective that's impossible to gain while living here full-time.",
      "This isn't about nationalism or criticism. It's about observation. What does America actually do differently — and often better — than anywhere else?",
      "## 1. Scale of Opportunity",
      "The U.S. market is massive and relatively unified. One language, one currency, one legal framework across 330 million people. Starting a business here means immediate access to the world's largest consumer economy.",
      "No other country offers this combination of scale and accessibility.",
      "## 2. Innovation Infrastructure",
      "Silicon Valley, research universities, venture capital networks — America's innovation ecosystem remains unmatched. Other countries have pieces, but not the complete system.",
      "## 3. Consumer Choice",
      "The sheer variety of products, services, and options available to American consumers is staggering. From grocery stores to healthcare providers to investment platforms.",
      "## 4. Geographic Diversity",
      "Within one country: deserts, mountains, beaches, forests, plains. Climate zones from tropical to arctic. No passport required to experience it all.",
      "## 5. Higher Education",
      "American universities dominate global rankings. The combination of research output, funding, and talent attraction has no equal.",
      "## 6. Career Mobility",
      "Changing jobs, industries, or locations is culturally normal. The stigma of reinvention is lower here than almost anywhere else.",
      "## 7. Entrepreneurial Culture",
      "Failure is accepted. Risk is encouraged. Starting something new is celebrated rather than questioned.",
      "## 8. Infrastructure for Cars",
      "Love it or hate it, America is built for driving. Roads are maintained. Parking exists. Long-distance travel is convenient.",
      "## 9. Customer Service Standards",
      "The expectation of good service creates a culture where it's delivered. Returns are accepted. Problems get solved.",
      "## 10. Optimism as Default",
      "Americans generally believe tomorrow can be better than today. That cultural orientation shapes everything from business decisions to personal relationships.",
      "## The Trade-off",
      "None of this erases America's challenges: healthcare costs, social fragmentation, political division. But it does explain why people keep coming — and why leaving is harder than it looks."
    ]
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter(article => article.id !== currentId).slice(0, limit);
};

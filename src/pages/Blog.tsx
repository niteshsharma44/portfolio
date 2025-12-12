import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
};

const posts: BlogPost[] = [
  {
    title: "Designing Interfaces That Feel Tailored",
    excerpt:
      "How I map research insights into component systems that feel custom without reinventing the wheel.",
    date: "Jan 12, 2024",
    readTime: "7 min",
    tags: ["UX Strategy", "Design Systems", "Process"],
    category: "Process",
  },
  {
    title: "Micro-interactions That Guide Without Noise",
    excerpt:
      "Balancing delight and clarity with motion, sound, and feedback in product moments that matter.",
    date: "Dec 04, 2023",
    readTime: "5 min",
    tags: ["UI Motion", "Accessibility"],
    category: "UI Craft",
  },
  {
    title: "From Wireframe to Prototype in Two Days",
    excerpt:
      "My sprint-ready toolkit for moving fast—component libraries, templates, and validation loops.",
    date: "Nov 18, 2023",
    readTime: "6 min",
    tags: ["Prototyping", "Figma", "Collaboration"],
    category: "Workflow",
  },
  {
    title: "Accessible Color Systems for Dark UIs",
    excerpt:
      "Choosing contrasts, states, and elevation cues that stay legible across brand gradients.",
    date: "Oct 30, 2023",
    readTime: "4 min",
    tags: ["Accessibility", "Color", "Dark Mode"],
    category: "Foundations",
  },
  {
    title: "Shipping High-Fidelity Web Animations",
    excerpt:
      "Practical steps for bringing Lottie, SVG, and CSS animation into production without bloat.",
    date: "Oct 12, 2023",
    readTime: "8 min",
    tags: ["Animation", "Frontend"],
    category: "Engineering",
  },
  {
    title: "Portfolio Redesign: Behind the Scenes",
    excerpt:
      "Breaking down decisions, constraints, and experiments from this site’s latest refresh.",
    date: "Sep 28, 2023",
    readTime: "5 min",
    tags: ["Case Study", "Personal"],
    category: "Case Study",
  },
];

const Blog = () => {
  const navigate = useNavigate();
  const featured = posts[0];

  const goToContact = () => navigate("/", { state: { scrollTo: "contact" } });
  const goHome = () => navigate("/");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 space-y-6 animate-fade-in-up">
              <p className="text-primary font-medium">Journal</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Shaping digital experiences with{" "}
                <span className="gradient-text">clarity</span> and{" "}
                <span className="gradient-text">care</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Notes on UI/UX craft, design systems, and the experiments that
                make products feel personal. Every post is grounded in real
                projects—what worked, what didn&apos;t, and the playbook I use to
                ship fast.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={goToContact}
                  size="lg"
                >
                  Start a project
                </Button>
                <Button
                  variant="outline"
                  onClick={goHome}
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Back to portfolio
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary opacity-70 blur-[1px]" />
                <div>
                  <p className="font-semibold text-foreground">Weekly drops</p>
                  <p>Process walkthroughs, UI patterns, and practical handoffs</p>
                </div>
              </div>
            </div>

            <div className="relative glass-card rounded-2xl p-8 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent blur-3xl" />
              <div className="relative space-y-4">
                <Badge variant="secondary" className="w-fit">Latest drop</Badge>
                <h3 className="text-2xl font-semibold">
                  The ritual I use before kicking off any redesign
                </h3>
                <p className="text-muted-foreground">
                  A repeatable preflight to align stakeholders, map constraints,
                  and set a design system baseline—so the build goes smoother.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Discovery</Badge>
                  <Badge variant="outline">Systems</Badge>
                  <Badge variant="outline">Workflows</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <span>Jan 2024</span>
                  <span>Guide • 6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <p className="text-primary font-medium">Featured</p>
              <h2 className="text-3xl font-bold">Spotlight article</h2>
              <p className="text-muted-foreground">
                A deeper look at the systems thinking behind recent launches.
              </p>
            </div>
            <Button variant="ghost" onClick={goHome}>
              Return home
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <article className="lg:col-span-2 relative overflow-hidden rounded-2xl glass-card p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/20 to-transparent" />
              <div className="relative space-y-4">
                <Badge className="w-fit">Featured</Badge>
                <h3 className="text-3xl font-bold">{featured.title}</h3>
                <p className="text-muted-foreground text-lg">{featured.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {featured.tags.map((tag) => (
                    <Badge variant="outline" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime} read</span>
                  <span>•</span>
                  <span>{featured.category}</span>
                </div>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="glass-card rounded-xl p-5 space-y-2">
                <p className="text-sm text-primary">Toolkit</p>
                <h4 className="text-xl font-semibold">UI/UX stack</h4>
                <p className="text-muted-foreground">
                  Figma libraries, Framer motion, and a production-ready React +
                  Tailwind + shadcn UI setup for fast iteration.
                </p>
              </div>
              <div className="glass-card rounded-xl p-5 space-y-2">
                <p className="text-sm text-primary">Collaboration</p>
                <h4 className="text-xl font-semibold">Handoff clarity</h4>
                <p className="text-muted-foreground">
                  Spec-first documentation, tokenized design systems, and Loom
                  walkthroughs to keep teams aligned.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <h2 className="text-3xl font-bold">Latest writing</h2>
            <p className="text-muted-foreground">
              Curated notes on product craft, systems, and shipped work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="glass-card rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.readTime} read</span>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read note
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">Newsletter</p>
              <h3 className="text-2xl font-bold">Stay ahead of the next drop</h3>
              <p className="text-muted-foreground">
                A short, tactical email when a new article goes live. No spam—just
                useful UI/UX tactics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get the update
              </Button>
              <Button variant="outline" onClick={goToContact}>
                Collaborate on an idea
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;


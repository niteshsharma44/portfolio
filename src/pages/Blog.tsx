import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  detail: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
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
    detail:
      "A repeatable approach for translating research into modular, scalable interface systems without sacrificing personality.",
    htmlCode: `<section class="hero">
  <h1 class="title">Tailored Interfaces</h1>
  <p class="lede">Modular, human, focused on outcomes.</p>
</section>`,
    cssCode: `.hero {
  padding: 3rem;
  background: linear-gradient(135deg, #1f2937, #111827);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
}
.title { font-size: 2.5rem; color: #e5e7eb; }
.lede { color: #9ca3af; max-width: 48ch; }`,
    jsCode: `const sections = document.querySelectorAll(".hero");
sections.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    section.classList.add("is-active");
  });
  section.addEventListener("mouseleave", () => {
    section.classList.remove("is-active");
  });
});`,
  },
  {
    title: "Micro-interactions That Guide Without Noise",
    excerpt:
      "Balancing delight and clarity with motion, sound, and feedback in product moments that matter.",
    date: "Dec 04, 2023",
    readTime: "5 min",
    tags: ["UI Motion", "Accessibility"],
    category: "UI Craft",
    detail:
      "Micro-interactions should clarify intent. Here’s a minimal pattern for hover and press states that stay accessible.",
    htmlCode: `<button class="ghost">Hover me</button>`,
    cssCode: `.ghost {
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  background: #111827;
  color: #e5e7eb;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 180ms ease;
}
.ghost:hover { border-color: #60a5fa; transform: translateY(-1px); }
.ghost:active { transform: translateY(0); border-color: #7c3aed; }`,
    jsCode: `document.querySelectorAll(".ghost").forEach((btn) => {
  btn.addEventListener("click", () => btn.classList.toggle("is-pressed"));
});`,
  },
  {
    title: "From Wireframe to Prototype in Two Days",
    excerpt:
      "My sprint-ready toolkit for moving fast—component libraries, templates, and validation loops.",
    date: "Nov 18, 2023",
    readTime: "6 min",
    tags: ["Prototyping", "Figma", "Collaboration"],
    category: "Workflow",
    detail:
      "A two-day sprint recipe: day one for flows and tokens, day two for interactive prototype and stakeholder alignment.",
    htmlCode: `<ol class="steps">
  <li>Outline flows</li>
  <li>Tokenize styles</li>
  <li>Prototype core path</li>
</ol>`,
    cssCode: `.steps { list-style: decimal; color: #e5e7eb; gap: 0.4rem; }
.steps li { margin-bottom: 0.4rem; }
.steps li::marker { color: #7c3aed; }`,
    jsCode: `const steps = Array.from(document.querySelectorAll(".steps li"));
steps.forEach((step, index) => {
  step.dataset.order = index + 1;
});`,
  },
  {
    title: "Accessible Color Systems for Dark UIs",
    excerpt:
      "Choosing contrasts, states, and elevation cues that stay legible across brand gradients.",
    date: "Oct 30, 2023",
    readTime: "4 min",
    tags: ["Accessibility", "Color", "Dark Mode"],
    category: "Foundations",
    detail:
      "Contrast, elevation, and state colors that hold up in dark mode without fighting brand gradients.",
    htmlCode: `<div class="chip success">Success</div>
<div class="chip warning">Warning</div>`,
    cssCode: `.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  color: #0b1021;
  font-weight: 600;
}
.success { background: #34d399; }
.warning { background: #fbbf24; }`,
    jsCode: `// Tokens for states you can export to CSS-in-JS or design tokens
export const stateTokens = {
  success: { bg: "#34d399", fg: "#0b1021" },
  warning: { bg: "#fbbf24", fg: "#0b1021" },
};`,
  },
  {
    title: "Shipping High-Fidelity Web Animations",
    excerpt:
      "Practical steps for bringing Lottie, SVG, and CSS animation into production without bloat.",
    date: "Oct 12, 2023",
    readTime: "8 min",
    tags: ["Animation", "Frontend"],
    category: "Engineering",
    detail:
      "How to ship animations with SVG, Lottie, and CSS without hurting performance—plus a perf budget checklist.",
    htmlCode: `<svg class="pulse" width="32" height="32">
  <circle cx="16" cy="16" r="10" />
</svg>`,
    cssCode: `.pulse circle {
  fill: none;
  stroke: #7c3aed;
  stroke-width: 2;
  stroke-linecap: round;
  animation: dash 1.8s ease-in-out infinite;
}
@keyframes dash {
  0% { stroke-dasharray: 0 120; }
  50% { stroke-dasharray: 60 120; }
  100% { stroke-dasharray: 0 120; }
}`,
    jsCode: `const svg = document.querySelector(".pulse");
svg?.addEventListener("mouseenter", () => svg.classList.add("active"));
svg?.addEventListener("mouseleave", () => svg.classList.remove("active"));`,
  },
  {
    title: "Portfolio Redesign: Behind the Scenes",
    excerpt:
      "Breaking down decisions, constraints, and experiments from this site’s latest refresh.",
    date: "Sep 28, 2023",
    readTime: "5 min",
    tags: ["Case Study", "Personal"],
    category: "Case Study",
    detail:
      "A breakdown of the latest portfolio refresh: goals, constraints, and what changed in the system tokens.",
    htmlCode: `<section class="metrics">
  <article>
    <p class="label">Bounce rate</p>
    <p class="value">-18%</p>
  </article>
  <article>
    <p class="label">Time on page</p>
    <p class="value">+26%</p>
  </article>
</section>`,
    cssCode: `.metrics {
  display: grid;
  gap: 1rem;
  background: #0b1021;
  padding: 1.25rem;
  border-radius: 16px;
}
.label { color: #9ca3af; }
.value { color: #e5e7eb; font-size: 1.5rem; font-weight: 700; }`,
    jsCode: `const metrics = document.querySelectorAll(".metrics .value");
metrics.forEach((metric) => metric.classList.add("animate-float"));`,
  },
  {
    title: "Electric Border Animated Card UI – Creating a High-Impact Visual Component",
    excerpt:
      "The Electric Border animated card is a modern UI component that uses glowing, animated edges to draw attention to important content. It adds visual emphasis and a futuristic feel while maintaining clarity and usability.",
    date: "Dec 13, 2025",
    readTime: "2 min",
    tags: ["Animated UI", "Electric Border", "CSS Animation"],
    category: "UI/UX Design / Frontend Development",
    detail:
      "The Electric Border Animated Card is designed to highlight key content through subtle, glowing border animations. The electric effect creates a sense of energy and importance, making the card stand out without distracting the user.",
    htmlCode: `<main class="main-container">
    <svg class="svg-container">
      <defs>
        <filter
          id="turbulent-displace"
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="10"
            result="noise1"
            seed="1"
          />
          <feOffset in="noise1"
            dx="0" dy="0" result="offsetNoise1">
            <animate
              attributeName="dy"
              values="700; 0"
              dur="6s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </feOffset>
  
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="10"
            result="noise2"
            seed="1"
          />
          <feOffset in="noise2" dx="0"
           dy="0" result="offsetNoise2">
            <animate
              attributeName="dy"
              values="0; -700"
              dur="6s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </feOffset>
  
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="10"
            result="noise1"
            seed="2"
          />
          <feOffset in="noise1" dx="0"
           dy="0" result="offsetNoise3">
            <animate
              attributeName="dx"
              values="490; 0"
              dur="6s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </feOffset>
  
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="10"
            result="noise2"
            seed="2"
          />
          <feOffset in="noise2" dx="0"
           dy="0" result="offsetNoise4">
            <animate
              attributeName="dx"
              values="0; -490"
              dur="6s"
              repeatCount="indefinite"
              calcMode="linear"
            />
          </feOffset>
  
          <feComposite in="offsetNoise1
          " in2="offsetNoise2" result="part1" />
          <feComposite in="offsetNoise3"
            in2="offsetNoise4" result="part2" />
          <feBlend
            in="part1"
            in2="part2"
            mode="color-dodge"
            result="combinedNoise"
          />
  
          <feDisplacementMap
            in="SourceGraphic"
            in2="combinedNoise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  
    <div class="card-container">
      <div class="inner-container">
        <div class="border-outer">
          <div class="main-card"></div>
        </div>
        <div class="glow-layer-1"></div>
        <div class="glow-layer-2"></div>
      </div>
  
      <div class="overlay-1"></div>
      <div class="overlay-2"></div>
      <div class="background-glow">
      </div>
  
      <div class="content-container">
        <div class="content-top">
          <div class="scrollbar-glass"
          >Dramatic</div>
          <p class="title">
            Electric Border</p>
        </div>
        <hr class="divider" />
        <div class="content-bottom">
          <p class="description">
            In case you'd like to
              emphasize something
               very dramatically.
          </p>
        </div>
      </div>
    </div>
  </main>`,
    cssCode: `/* Reset and base styles */

    /* CSS Variables */
    :root {
      --electric-border-color: #00bfff;
      --electric-light-color:
       oklch(from var(--electric-border-color) 
       l c h);
      --gradient-color: oklch(
        from var(--electric-border-color) 
        0.3 calc(c / 2) h / 0.4
      );
      --color-neutral-900: oklch(0.185 0 0);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui,
       -apple-system, sans-serif;
      background-color: oklch(0.145 0 0);
      color: oklch(0.985 0 0);
      height: 100vh;
      overflow: hidden;
    }
    
    /* Main container */
    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    
    /* SVG positioning */
    .svg-container {
      position: absolute;
    }
    
    /* Card container */
    .card-container {
      padding: 2px;
      border-radius: 24px;
      position: relative;
      background: linear-gradient(
          -30deg,
          var(--gradient-color),
          transparent,
          var(--gradient-color)
        ),
        linear-gradient(
          to bottom,
          var(--color-neutral-900),
          var(--color-neutral-900)
        );
    }
    
    /* Inner container */
    .inner-container {
      position: relative;
    }
    
    /* Border layers */
    .border-outer {
      border: 2px solid
       rgba(221, 132, 72, 0.5);
      border-radius: 24px;
      padding-right: 4px;
      padding-bottom: 4px;
    }
    
    .main-card {
      width: 320px;
      height: 400px;
      border-radius: 24px;
      border: 2px solid
       var(--electric-border-color);
      margin-top: -4px;
      margin-left: -4px;
      filter: url(#turbulent-displace);
    }
    
    /* Glow effects */
    .glow-layer-1 {
      border: 2px solid
       rgba(221, 132, 72, 0.6);
      border-radius: 24px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      filter: blur(1px);
    }
    
    .glow-layer-2 {
      border: 2px solid 
      var(--electric-light-color);
      border-radius: 24px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      filter: blur(4px);
    }
    
    /* Overlay effects */
    .overlay-1 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 24px;
      opacity: 1;
      mix-blend-mode: overlay;
      transform: scale(1.1);
      filter: blur(16px);
      background: linear-gradient(
        -30deg,
        white,
        transparent 30%,
        transparent 70%,
        white
      );
    }
    
    .overlay-2 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 24px;
      opacity: 0.5;
      mix-blend-mode: overlay;
      transform: scale(1.1);
      filter: blur(16px);
      background: linear-gradient(
        -30deg,
        white,
        transparent 30%,
        transparent 70%,
        white
      );
    }
    
    /* Background glow */
    .background-glow {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 24px;
      filter: blur(32px);
      transform: scale(1.1);
      opacity: 0.3;
      z-index: -1;
      background: linear-gradient(
        -30deg,
        var(--electric-light-color),
        transparent,
        var(--electric-border-color)
      );
    }
    
    /* Content container */
    .content-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    /* Content sections */
    .content-top {
      display: flex;
      flex-direction: column;
      padding: 48px;
      padding-bottom: 16px;
      height: 100%;
    }
    
    .content-bottom {
      display: flex;
      flex-direction: column;
      padding: 48px;
      padding-top: 16px;
    }
    
    /* Scrollbar glass component */
    .scrollbar-glass {
      background: radial-gradient(
          47.2% 50% at 50.39% 88.37%,
          rgba(255, 255, 255, 0.12) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        rgba(255, 255, 255, 0.04);
      position: relative;
      transition: background 0.3s ease;
      border-radius: 14px;
      width: fit-content;
      height: fit-content;
      padding: 8px 16px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .scrollbar-glass:hover {
      background: radial-gradient(
          47.2% 50% at 50.39% 88.37%,
          rgba(255, 255, 255, 0.12) 0%,
          rgba(255, 255, 255, 0) 100%
        ),
        rgba(255, 255, 255, 0.08);
    }
    
    .scrollbar-glass::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1px;
      background: linear-gradient(
        150deg,
        rgba(255, 255, 255, 0.48) 16.73%,
        rgba(255, 255, 255, 0.08) 30.2%,
        rgba(255, 255, 255, 0.08) 68.2%,
        rgba(255, 255, 255, 0.6) 81.89%
      );
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0)
       content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask-composite: xor;
      pointer-events: none;
    }
    
    /* Typography */
    .title {
      font-size: 36px;
      font-weight: 500;
      margin-top: auto;
    }
    
    .description {
      opacity: 0.5;
    }
    
    /* Divider */
    .divider {
      margin-top: auto;
      border: none;
      height: 1px;
      background-color: currentColor;
      opacity: 0.1;
      mask-image: 
      linear-gradient(to right, transparent,
       black, transparent);
      -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black,
        transparent
      );
    }
    `,
    jsCode: ` NO JS code Required for this project.`,
  },
];

const Blog = () => {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const featured = posts[0];

  const goToContact = () => navigate("/", { state: { scrollTo: "contact" } });
  const goToInstagram = () => window.open("https://instagram.com/niteshsharma.uiux", "_blank");
  const goHome = () => navigate("/");
  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main style={{paddingInline:"20px"}} className="pt-24 pb-16">
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
          <div style={{marginBottom:"30px"}} className="flex items-center justify-between flex-wrap gap-4 mb-6">
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
                <Button
                  variant="secondary"
                  className="mt-2"
                  onClick={() => openPost(featured)}
                >
                  Read note
                </Button>
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
          <div style={{marginBottom:"30px"}} className="flex items-center justify-between flex-wrap gap-3 mb-4">
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
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary"
                      onClick={() => openPost(post)}
                    >
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
                Join instagram community for latest updates and tips.
                No spam—just
                useful UI/UX tricks and resources.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={goToInstagram} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Get the update
              </Button>
              <Button variant="outline" onClick={goToInstagram}>
                Collaborate on an idea
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl glass-card border border-white/10">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedPost.detail}
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>{selectedPost.category}</span>
              </div>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="css">CSS</TabsTrigger>
                  <TabsTrigger value="js">JS</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-3 text-muted-foreground">
                  <p>{selectedPost.excerpt}</p>
                  <div className="flex gap-2 flex-wrap">
                    {selectedPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="html">
                  <CodeBlock label="HTML" code={selectedPost.htmlCode} />
                </TabsContent>
                <TabsContent value="css">
                  <CodeBlock label="CSS" code={selectedPost.cssCode} />
                </TabsContent>
                <TabsContent value="js">
                  <CodeBlock label="JS" code={selectedPost.jsCode} />
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blog;

type CodeBlockProps = {
  label: string;
  code: string;
};

const CodeBlock = ({ label, code }: CodeBlockProps) => (
  <div className="space-y-2">
    <p className="text-sm text-primary font-medium">{label}</p>
    <p className="max-h-[320px] overflow-y-auto overflow-x-auto p-4 rounded-xl bg-muted text-sm border border-white/10 whitespace-pre-wrap">
      <code>{code}</code>
    </p>
  </div>
);


import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import scoopImg from "@/assets/scoop.jpg";
import chaiImg from "@/assets/chai.jpg";
import logo from "@/assets/hh-logo.png";
import { useEffect, useState } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halawa & Heat — Middle Eastern Ice Cream & Chai · Nashville, TN" },
      {
        name: "description",
        content:
          "A taste of home in every scoop and sip. Small-batch Middle Eastern inspired ice cream and spiced chai in Nashville, TN.",
      },
      { property: "og:title", content: "Halawa & Heat — Ice Cream & Chai" },
      {
        property: "og:description",
        content:
          "Pakistani & Egyptian roots, Nashville love. Knafeh, saffron rose, karak chai and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const flavors = [
  { name: "Knafeh", note: "Toasted kataifi, sweet cheese" },
  { name: "Dubai Chocolate", note: "Pistachio cream, crispy filo" },
  { name: "Saffron Rose", note: "Persian saffron, rose petals" },
  { name: "Cardamom", note: "Warm green cardamom" },
  { name: "Turkish Coffee", note: "Bold, finely-ground" },
  { name: "Mango Lassi", note: "Yogurt swirl, alphonso" },
  { name: "Date", note: "Caramelized medjool" },
  { name: "Biscoff", note: "Lotus cookie butter" },
  { name: "Chocolate", note: "Single-origin cocoa" },
  { name: "Vanilla Bean", note: "Madagascar pods" },
  { name: "Strawberry", note: "Fresh berry mash" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Flavors />
      <Drinks />
      <Visit />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <span className="font-display text-xl tracking-tight hidden sm:inline">Halawa &amp; Heat</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#story" className="hover:text-gold transition">Our Story</a>
          <a href="#flavors" className="hover:text-gold transition">Flavors</a>
          <a href="#drinks" className="hover:text-gold transition">Chai</a>
          <a href="#visit" className="hover:text-gold transition">Visit</a>
        </nav>
        <a
          href="#visit"
          className="inline-flex items-center rounded-full bg-navy text-cream px-4 py-2 text-sm font-medium hover:bg-navy/90 transition"
        >
          Find Us
        </a>
      </div>
    </header>
  );
}

function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Halawa & Heat"
      width={96}
      height={96}
      className={`${className} object-contain`}
    />
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 pt-12 pb-20 lg:py-24 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-navy/70 mb-6">
            <span>🇵🇰</span><span>🇪🇬</span>
            <span className="h-px w-10 bg-gold" />
            <span>Nashville, TN</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-navy">
            A taste of home,
            <span className="block italic text-gold">in every scoop &amp; sip.</span>
          </h1>
          <p className="mt-6 text-lg text-navy/75 max-w-lg">
            Small-batch ice cream and spiced chai born from family recipes —
            from the streets of the Middle East to the heart of Nashville.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#flavors" className="rounded-full bg-navy text-cream px-6 py-3 text-sm font-medium hover:bg-navy/90 transition">
              See the menu
            </a>
            <a href="#visit" className="rounded-full border border-navy/30 text-navy px-6 py-3 text-sm font-medium hover:bg-navy/5 transition">
              360 Wallace Rd →
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gold/20 rounded-[2rem] rotate-2" aria-hidden />
          <img
            src={heroImg}
            alt="Pistachio knafeh ice cream cone with steaming karak chai"
            width={1536}
            height={1536}
            className="relative rounded-[1.75rem] shadow-2xl object-cover aspect-square w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-cream border border-border rounded-2xl px-5 py-4 shadow-lg hidden sm:block">
            <p className="font-display text-2xl text-navy leading-none">Knafeh</p>
            <p className="text-xs text-navy/60 mt-1">house favorite · est. Nashville</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-navy text-cream py-24">
      <div className="container-x grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our story</p>
          <h2 className="font-display text-4xl sm:text-5xl">Heritage, served cold &amp; warm.</h2>
        </div>
        <div className="lg:col-span-2 space-y-6 text-cream/80 text-lg leading-relaxed">
          <p>
            Halawa &amp; Heat is a Middle Eastern inspired ice cream and chai brand
            bringing the warmth of heritage to Nashville — born from family flavor
            and the comfort of home.
          </p>
          <p>
            We craft small-batch ice cream and spiced chai, blending tradition with
            a touch of modern heat. Every scoop and sip is made to be shared.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-cream/15">
            {[
              ["Small batch", "Churned in-house, daily"],
              ["Heritage flavors", "Pakistani × Egyptian roots"],
              ["Made to share", "Family recipes, Nashville love"],
            ].map(([t, s]) => (
              <div key={t}>
                <p className="font-display text-2xl text-gold">{t}</p>
                <p className="text-sm text-cream/70 mt-1">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section id="flavors" className="py-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">The menu</p>
            <h2 className="font-display text-5xl text-navy">Scoops</h2>
          </div>
          <div className="flex gap-6 text-navy">
            <Price label="1 scoop" price="5.99" />
            <Price label="2 scoops" price="7.99" />
            <Price label="3 scoops" price="9.99" />
            <Price label="+1 add'l" price="1.99" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {flavors.map((f) => (
            <div key={f.name} className="bg-card p-6 hover:bg-gold/10 transition group">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-navy">{f.name}</h3>
                <span className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition" />
              </div>
              <p className="text-sm text-navy/60 mt-1">{f.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img src={scoopImg} alt="Fresh scoop of strawberry ice cream" loading="lazy" width={1024} height={1280} className="rounded-2xl object-cover w-full h-64 md:h-80" />
          <div className="bg-gold/15 rounded-2xl p-8 flex flex-col justify-center">
            <p className="font-display text-3xl text-navy italic">"Made with heritage, shared with warmth, and served with love."</p>
            <p className="text-sm text-navy/60 mt-4">— from our family table to yours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Price({ label, price }: { label: string; price: string }) {
  return (
    <div className="text-right">
      <p className="text-[10px] uppercase tracking-widest text-navy/50">{label}</p>
      <p className="font-display text-xl">${price}</p>
    </div>
  );
}

function Drinks() {
  return (
    <section id="drinks" className="bg-cream py-24 border-y border-border">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Sip</p>
          <h2 className="font-display text-5xl text-navy mb-8">Chai, three ways.</h2>

          <div className="space-y-8">
            <DrinkRow
              name="Karak Chai"
              desc="Strong, milky, cardamom-forward"
              sizes={[["S", "5.99"], ["M", "6.99"], ["L", "8.99"]]}
            />
            <DrinkRow
              name="Persian Chai"
              desc="Delicate black tea, lightly spiced"
              sizes={[["S", "4.99"], ["M", "5.99"], ["L", "6.99"]]}
            />
            <div className="rounded-2xl bg-navy text-cream p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-gold">Chai Float</h3>
                <span className="font-display text-xl">$9.99</span>
              </div>
              <p className="text-sm text-cream/75 mt-2">
                Any ice cream flavor + any chai. Served with a scoop and a chai shot.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-navy/10 rounded-[2rem] -rotate-2" aria-hidden />
          <img src={chaiImg} alt="Steaming glass of karak chai" loading="lazy" width={1024} height={1280} className="relative rounded-[1.75rem] object-cover w-full aspect-[4/5] shadow-xl" />
        </div>
      </div>
    </section>
  );
}

function DrinkRow({
  name,
  desc,
  sizes,
}: {
  name: string;
  desc: string;
  sizes: [string, string][];
}) {
  return (
    <div className="border-b border-border pb-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-3xl text-navy">{name}</h3>
        <div className="flex gap-4 text-sm">
          {sizes.map(([s, p]) => (
            <div key={s} className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-navy/50">{s}</p>
              <p className="font-display text-lg">${p}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-navy/60 mt-1">{desc}</p>
    </div>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-24 bg-navy text-cream">
      <div className="container-x grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Come say hi</p>
          <h2 className="font-display text-5xl mb-6">Visit the shop.</h2>
          <p className="text-cream/80 text-lg max-w-md">
            Pull up, grab a scoop, sip a chai. We'd love to share a little
            piece of home with you.
          </p>
          <div className="mt-8 space-y-2 text-lg">
            <p className="font-display text-2xl text-gold">360 Wallace Rd</p>
            <p>Nashville, TN 37211</p>
          </div>
          <a
            href="https://maps.google.com/?q=360+Wallace+Rd+Nashville+TN+37211"
            target="_blank"
            rel="noopener"
            className="inline-flex mt-8 rounded-full bg-gold text-navy px-6 py-3 text-sm font-medium hover:bg-gold/90 transition"
          >
            Get directions →
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-cream/15 aspect-[4/3]">
          <iframe
            title="Halawa & Heat location"
            src="https://www.google.com/maps?q=360+Wallace+Rd+Nashville+TN+37211&output=embed"
            className="w-full h-full grayscale-[20%]"
            loading="lazy"
            tabIndex={-1}
          />
        </div>
      </div>
    </section>
  );
}

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/halawa_heat/", Icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@halawa.heat", Icon: Music2 },
];

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy hover:bg-gold hover:text-navy hover:border-gold transition"
        >
          <Icon size={18} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}

interface BeholdPost {
  id: string;
  mediaUrl: string;
  permalink: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnailUrl?: string; // for videos
}

const BEHOLD_FEED_ID = "z67nUKYaKPOGt0h30bqo";

function InstagramFeed() {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://feeds.behold.so/${BEHOLD_FEED_ID}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 6)); // show 6 posts
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const imgSrc = (post: BeholdPost) =>
    post.mediaType === "VIDEO" ? post.thumbnailUrl! : post.mediaUrl;
  
  return (
    <section id="instagram" className="container-x py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-gold uppercase tracking-[0.2em] text-xs mb-3">Follow along</p>
          <h2 className="font-display text-4xl md:text-5xl text-navy">@halawa_heat</h2>
          <p className="mt-3 text-navy/70 max-w-lg">
            Fresh scoops, steaming karak, and behind-the-counter moments — straight from our Nashville shop.
          </p>
        </div>
        
          href="https://www.instagram.com/halawa_heat/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-navy text-cream px-6 py-3 text-sm font-medium hover:bg-navy/90 transition self-start"
        >
          <Instagram size={18} /> Follow on Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-cream animate-pulse"
              />
            ))
          : posts.map((post) => (
              
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-cream"
              >
                <img
                  src={imgSrc(post)}
                  alt={post.caption?.slice(0, 80) ?? "Halawa & Heat on Instagram"}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition flex items-center justify-center">
                  <Instagram
                    className="text-cream opacity-0 group-hover:opacity-100 transition"
                    size={28}
                  />
                </div>
              </a>
            ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container-x flex flex-col md:flex-row justify-between gap-6 items-center text-sm text-navy/60">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="font-display text-lg text-navy">Halawa &amp; Heat</p>
            <p className="text-xs">A taste of home. In every scoop and sip.</p>
          </div>
        </div>
        <SocialIcons />
        <p>© {new Date().getFullYear()} Halawa &amp; Heat · Nashville, TN</p>
      </div>
    </footer>
  );
}

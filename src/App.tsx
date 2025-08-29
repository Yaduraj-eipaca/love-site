import React, { useState } from "react";

/**
 * 💝 Zero-dependency React site (no Tailwind install, no shadcn)
 *
 * This version works even if Tailwind CLI/npm is acting up.
 * We'll use the Tailwind CDN (a single <script> in index.html),
 * so you can edit & test immediately in VS Code.
 *
 * Setup checklist (do these once):
 * 1) In your project folder, open index.html and add this line inside <head>:
 *    <script src="https://cdn.tailwindcss.com"></script>
 * 2) Put your photos in /public/photos/ (create the folder if needed).
 * 3) Start the dev server: npm run dev → open the local URL shown.
 */

// === CUSTOMIZE ME ===
const YOUR_NAME = "Yaduraj";
const HER_NAME = "Adithi";
const TAGLINE = "Every day with you is my favorite adventure.";
const IMPORTANT_DATE = "2025-07-13"; // YYYY-MM-DD
const PRIMARY_HASHTAG = "";

// Photos in public/photos/
const initialPhotos: { url: string; alt: string }[] = [
  { url: "/photos/airport.jpeg", alt: "Smiling together" },
  { url: "/photos/car.jpeg", alt: "Sunset walk" },
  { url: "/photos/us.jpeg", alt: "Coffee date" },
  { url: "/photos/us2.jpeg", alt: "City lights" },
];

const timeline: { date: string; title: string; note?: string }[] = [
  { date: "early sep 2025", title: "We first started talking", note: "I called you when you were with liya and watching something" },
  { date: "2025/07/13", title: "First trip", note: "Best trip of my life" },
  { date: "2025/07/16", title: "Our first date", note: "I ordered way too much for us, we laughed liked crazy and we went on that silly cruise." },
  { date: "2026/07/13", title: "Our One Year", note: "will mark our 365 days of choosing each other." },
];

const notes = [
  "You make ordinary moments feel like magic.",
  "I love the way you laugh at my worst jokes.",
  "With you, every sunrise makes sense.",
  "Thank you for being my favorite hello.",
];

// Lightweight UI primitives (no external libs)
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-white/80 shadow-sm">{children}</div>
  );
}
function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b border-rose-100">{children}</div>;
}
function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold">{children}</h3>;
}
function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
function Button(
  { children, onClick, variant = "solid", type = "button" }:
  { children: React.ReactNode; onClick?: () => void; variant?: "solid" | "outline"; type?: "button" | "submit" }
) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition shadow-sm";
  const solid = "bg-pink-600 text-white hover:bg-pink-700";
  const outline = "border border-pink-300 text-pink-700 hover:bg-pink-50";
  return (
    <button type={type} onClick={onClick} className={`${base} ${variant === "solid" ? solid : outline}`}>
      {children}
    </button>
  );
}

export default function LoveSite() {
  const [photos] = useState(initialPhotos);
  const [noteIdx, setNoteIdx] = useState(0);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-rose-50 to-pink-50 text-gray-800">
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-rose-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <span className="h-5 w-5 inline-block rounded-full bg-pink-500" />
            <span className="font-semibold">{YOUR_NAME} ♥ {HER_NAME}</span>
          </div>
          <div className="flex gap-3 text-sm">
            <a href="#home" className="hover:text-pink-600">Home</a>
            <a href="#story" className="hover:text-pink-600">Our Story</a>
            <a href="#gallery" className="hover:text-pink-600">Gallery</a>
            <a href="#notes" className="hover:text-pink-600">Love Notes</a>
            <a href="#contact" className="hover:text-pink-600">Message</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-rose-600 text-sm font-medium bg-rose-50 border border-rose-100 rounded-full px-3 py-1">
               Since {new Date(IMPORTANT_DATE).toLocaleDateString()}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Hi {HER_NAME},<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-fuchsia-600">I made this for you</span>
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">{TAGLINE}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => setNoteIdx((noteIdx + 1) % notes.length)}>Play Our Song</Button>
              <a href="#story"><Button variant="outline">Our Story</Button></a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-1 bg-gradient-to-tr from-pink-500 via-rose-500 to-fuchsia-500 shadow-xl">
              <div className="rounded-3xl bg-white p-4">
                <img src={photos[0]?.url} alt={photos[0]?.alt} className="rounded-2xl object-cover w-full h-72 md:h-96" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            I still remember the first time I saw you — everything else got quiet.
            Here's a little scrapbook of us so far, and a promise of everything to come.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {timeline.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center justify-between">
                    <span>{item.title}</span>
                    <span className="text-sm text-rose-500">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="#gallery" className="inline-flex items-center gap-2 text-pink-600 hover:text-fuchsia-600 font-medium">
            See more memories
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="px-6 py-16 bg-white/70 border-y border-rose-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Photo Gallery</h2>
<div className="mt-8 flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-rose-300">
  {photos.map((p, i) => (
    <div key={i} className="flex-shrink-0 w-60 h-80 rounded-2xl overflow-hidden shadow-sm">
      <img
        src={p.url}
        alt={p.alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

        </div>
      </section>

      {/* LOVE NOTES */}
      <section id="notes" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Love Notes</h2>
          <p className="mt-2 text-gray-600">Little reminders for {HER_NAME}. Share one below or pick a random one.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Note</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg italic text-gray-700">{notes[noteIdx]}</blockquote>
              <div className="mt-4 flex gap-3">
                <Button onClick={() => setNoteIdx((noteIdx + 1) % notes.length)}>New Random</Button>
                <Button variant="outline">Plan a Surprise</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Write a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <input placeholder={`Dear ${HER_NAME}, ...`} className="w-full rounded-xl border border-rose-200 bg-white/60 p-3 focus:outline-none focus:ring-2 focus:ring-pink-300" />
                <Button type="submit">Save Note</Button>
              </form>
              <p className="mt-2 text-xs text-gray-500">(note to self "bhenchod firebase connection karna hai")</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="px-6 py-16 bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">For {HER_NAME}</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Tere saath kal ho ya na ho, aaj toh tera hoon,
            Mohabbat aisi hai meri, har lamha tere liye jeeta hoon.
          </p>
          <div className="mt-6">

          </div>
          <p className="mt-6 text-xs text-gray-500">{PRIMARY_HASHTAG} · Made with ❤️ by {YOUR_NAME}</p>
        </div>
      </section>
    </div>
  );
}

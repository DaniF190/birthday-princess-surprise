import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

// ✏️ Change these two lines to personalise the card.
const HER_NAME = "Anna";
const SIGNATURE = "With all my love";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday Princess ${HER_NAME}` },
      {
        name: "description",
        content: `A little 3D pop-up birthday card made with love for ${HER_NAME} — open the card to find a rose inside.`,
      },
      { property: "og:title", content: `Happy Birthday Princess ${HER_NAME}` },
      {
        property: "og:description",
        content: `A little 3D pop-up birthday card made with love for ${HER_NAME}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Tiara() {
  return (
    <svg viewBox="0 0 240 150" className="tiara-float h-40 w-64" aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.66 0.11 72)" />
          <stop offset="45%" stopColor="oklch(0.9 0.13 90)" />
          <stop offset="70%" stopColor="oklch(0.98 0.06 95)" />
          <stop offset="100%" stopColor="oklch(0.66 0.11 72)" />
        </linearGradient>
      </defs>
      <path
        d="M20 118 C34 66 46 54 58 52 L82 92 L108 34 C114 24 126 24 132 34 L158 92 L182 52 C194 54 206 66 220 118 Z"
        fill="url(#goldGrad)"
        stroke="oklch(0.55 0.1 70)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        x="16"
        y="114"
        width="208"
        height="18"
        rx="9"
        fill="url(#goldGrad)"
        stroke="oklch(0.55 0.1 70)"
        strokeWidth="3"
      />
      <circle cx="120" cy="26" r="10" fill="oklch(0.72 0.16 12)" stroke="oklch(0.5 0.14 14)" strokeWidth="2.5" />
      <circle cx="58" cy="48" r="7" fill="oklch(0.78 0.11 200)" stroke="oklch(0.55 0.1 210)" strokeWidth="2.5" />
      <circle cx="182" cy="48" r="7" fill="oklch(0.78 0.11 200)" stroke="oklch(0.55 0.1 210)" strokeWidth="2.5" />
      <circle cx="70" cy="123" r="5" fill="oklch(0.75 0.15 12)" />
      <circle cx="120" cy="123" r="5" fill="oklch(0.78 0.11 200)" />
      <circle cx="170" cy="123" r="5" fill="oklch(0.75 0.15 12)" />
      <path d="M46 104 C58 78 70 68 78 66" stroke="oklch(0.99 0.03 95)" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function Rose() {
  const rings = [
    { count: 8, size: 108, radius: 44, tilt: 62, z: 0, opacity: 1 },
    { count: 7, size: 88, radius: 32, tilt: 48, z: 14, opacity: 1 },
    { count: 6, size: 66, radius: 21, tilt: 34, z: 26, opacity: 1 },
    { count: 5, size: 46, radius: 12, tilt: 20, z: 36, opacity: 1 },
  ];

  return (
    <div className="rose-stage preserve-3d relative flex h-full w-full items-end justify-center pb-10">
      <div className="rose-sway preserve-3d relative">
        {/* stem */}
        <div className="relative mx-auto h-44 w-3 rounded-full bg-[linear-gradient(90deg,oklch(0.42_0.09_150),oklch(0.58_0.12_145),oklch(0.36_0.08_150))]">
          <div className="absolute left-3 top-10 h-8 w-20 rotate-[-18deg] rounded-[100%_0_100%_0] bg-[linear-gradient(120deg,oklch(0.55_0.13_145),oklch(0.38_0.09_150))]" />
          <div className="absolute right-3 top-24 h-8 w-20 rotate-[18deg] rounded-[0_100%_0_100%] bg-[linear-gradient(240deg,oklch(0.55_0.13_145),oklch(0.38_0.09_150))]" />
        </div>

        {/* bloom */}
        <div className="preserve-3d absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2">
          {rings.map((ring, ri) =>
            Array.from({ length: ring.count }).map((_, i) => {
              const angle = (360 / ring.count) * i + ri * 14;
              return (
                <span
                  key={`${ri}-${i}`}
                  className="petal"
                  style={{
                    width: ring.size,
                    height: ring.size * 1.1,
                    marginLeft: -ring.size / 2,
                    marginTop: -ring.size * 0.62,
                    transform: `rotateZ(${angle}deg) translateY(-${ring.radius}px) translateZ(${ring.z}px) rotateX(${ring.tilt}deg)`,
                  }}
                />
              );
            }),
          )}
          <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.17_18),oklch(0.34_0.13_18))]" />
        </div>
      </div>
      <div className="absolute bottom-6 h-4 w-48 rounded-[100%] bg-[oklch(0.4_0.06_20/0.25)] blur-md" />
    </div>
  );
}

function GoldFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${flip ? "rotate-180" : ""}`}>
      <span className="rule-gold h-px w-16 opacity-70" />
      <svg viewBox="0 0 120 24" className="h-5 w-32" aria-hidden="true">
        <path
          d="M2 12 C22 12 26 2 38 2 C50 2 52 12 60 12 C68 12 70 2 82 2 C94 2 98 12 118 12"
          fill="none"
          stroke="oklch(0.72 0.12 80)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="12" r="3.5" fill="oklch(0.82 0.13 87)" />
      </svg>
      <span className="rule-gold h-px w-16 opacity-70" />
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  const sparkles = Array.from({ length: 26 }).map((_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 61) % 100}%`,
    size: 2 + ((i * 7) % 4),
    delay: `${(i % 8) * 0.5}s`,
  }));

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-14">
      <div className="pointer-events-none absolute inset-0">
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay }}
          />
        ))}
      </div>

      <h1 className="sr-only">Happy birthday princess {HER_NAME}</h1>

      <div className="scene relative w-full max-w-4xl">
        <div className={`card-shell preserve-3d relative mx-auto ${open ? "is-open" : ""}`}>
          <div className="preserve-3d relative mx-auto flex w-full max-w-[760px] justify-end">
            {/* Spine-left area (empty when closed) */}
            <div className="preserve-3d relative h-[520px] w-1/2">
              <div className="card-cover preserve-3d absolute inset-0 left-full">
                {/* Cover page */}
                <div className="face paper flex flex-col items-center justify-center gap-6 border border-[oklch(0.85_0.07_80)] px-8 text-center">
                  <div className="pointer-events-none absolute inset-3 rounded-[0.4rem] border border-[oklch(0.8_0.1_85/0.6)]" />
                  <Tiara />
                  <p className="font-display text-sm uppercase tracking-[0.45em] text-[var(--gold-deep)]">
                    Happy Birthday
                  </p>
                  <p className="font-script text-5xl leading-tight text-gold-shine">Princess {HER_NAME}</p>
                  <button
                    onClick={() => setOpen(true)}
                    className="mt-2 rounded-full border border-[var(--gold-deep)] px-5 py-2 font-display text-xs uppercase tracking-[0.3em] text-[var(--gold-deep)] transition-colors hover:bg-[oklch(0.9_0.08_88/0.5)]"
                  >
                    Open the card
                  </button>
                </div>

                {/* First page (back of the cover) — the pop-up rose */}
                <div className="face face-back paper border border-[oklch(0.85_0.07_80)]">
                  <div className="pointer-events-none absolute inset-3 rounded-[0.4rem] border border-[oklch(0.8_0.1_85/0.6)]" />
                  <div className="preserve-3d absolute inset-0 pt-6">
                    <Rose />
                  </div>
                  <p className="page-reveal absolute bottom-6 w-full text-center font-script text-2xl text-[var(--rose-deep)]">
                    just for you
                  </p>
                </div>
              </div>
            </div>

            {/* Right half: second page */}
            <div className="paper relative h-[520px] w-1/2 rounded-r-[0.9rem] border border-[oklch(0.85_0.07_80)]">

              <div className="pointer-events-none absolute inset-3 rounded-[0.4rem] border border-[oklch(0.8_0.1_85/0.6)]" />
              <div className="page-reveal flex h-full flex-col justify-between px-9 py-10 text-center text-[var(--card-foreground)]">
                <GoldFlourish />
                <div className="flex flex-col gap-4 font-display text-lg leading-relaxed">
                  <p>Write your first line here.</p>
                  <p>And another sweet paragraph here.</p>
                  <p className="font-script text-3xl text-[var(--rose-deep)]">{SIGNATURE}</p>
                </div>
                <GoldFlourish flip />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative mt-12 rounded-full border border-[var(--gold)] px-6 py-2 font-display text-xs uppercase tracking-[0.35em] text-[var(--gold)] transition-colors hover:bg-[oklch(0.84_0.12_87/0.15)]"
      >
        {open ? "Close the card" : "Open the card"}
      </button>
    </main>
  );
}

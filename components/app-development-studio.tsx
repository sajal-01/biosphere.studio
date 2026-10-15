import Link from "next/link"
import { ArrowUpRight, Check, Code2, Gamepad2, Smartphone } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    eyebrow: "PRODUCT DESIGN",
    title: "Apps people keep using",
    description: "From the first wireframe to polished Play Store listing, we build Android experiences that feel clear, fast, and dependable.",
  },
  {
    icon: Gamepad2,
    eyebrow: "GAMES & EXPERIENCES",
    title: "Playful, memorable products",
    description: "We turn ambitious ideas into engaging mobile games and interactive experiences designed for discovery and retention.",
  },
  {
    icon: Code2,
    eyebrow: "LAUNCH & GROWTH",
    title: "Built for the Play Store",
    description: "Quality checks, release strategy, analytics, and iteration keep your app ready for launch and prepared to grow.",
  },
]

const milestones = ["Product strategy", "Android development", "Play Store publishing", "Post-launch growth"]

export function AppDevelopmentStudio() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white text-slate-950" aria-labelledby="app-studio-title">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4285f4] via-[#34a853] to-[#fbbc04]" />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="grid size-9 place-items-center rounded-xl bg-[#e8f0fe] text-[#1a73e8]">
                <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                  <path fill="#34a853" d="M3.5 3.9 14.8 12 3.5 20.1c-.3-.3-.5-.8-.5-1.4V5.3c0-.6.2-1.1.5-1.4Z" />
                  <path fill="#fbbc04" d="m15.8 12.7 2.9-2.1 2.2 1.2c.8.4.8 1.6 0 2l-2.2 1.2-2.9-2.1v-.2Z" />
                  <path fill="#4285f4" d="M3.9 3.5c.4-.2.9-.2 1.4.1l13.4 7.7-3 2.1L3.9 3.5Z" />
                  <path fill="#ea4335" d="m3.9 20.5 11.8-9.9 3 2.1-13.4 7.7c-.5.3-1 .3-1.4.1Z" />
                </svg>
              </span>
              <span>App Development Studio Division</span>
            </div>
            <h2 id="app-studio-title" className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Great ideas deserve a place in Google Play.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We design, develop, and publish Android apps and games from concept to launch, pairing thoughtful product work with a Play Store-ready release process.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#1a73e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1557b0]">
                Start an app project <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Link>
              <Link href="#app-studio-services" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50">
                Explore our process
              </Link>
            </div>
          </div>

          <div className="relative rounded-[2rem] bg-[#e8f0fe] p-5 sm:p-8">
            <div className="absolute right-6 top-6 size-20 rounded-full bg-[#34a853]/20 blur-2xl" />
            <div className="relative rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(26,115,232,0.12)] sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="text-sm font-semibold text-slate-900">Launch checklist</span>
                <span className="rounded-full bg-[#e6f4ea] px-3 py-1 text-xs font-semibold text-[#137333]">Play ready</span>
              </div>
              <div className="flex flex-col gap-4 pt-6">
                {milestones.map((milestone) => (
                  <div key={milestone} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="grid size-7 place-items-center rounded-full bg-[#e6f4ea] text-[#137333]"><Check className="size-4" /></span>
                    {milestone}
                  </div>
                ))}
              </div>
              <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#4285f4] to-[#34a853]" /></div>
              <p className="mt-3 text-xs text-slate-500">A clear path from prototype to published product.</p>
            </div>
          </div>
        </div>

        <div id="app-studio-services" className="mt-20 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, eyebrow, title, description }) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className="mb-8 grid size-12 place-items-center rounded-2xl bg-white text-[#1a73e8] shadow-sm"><Icon className="size-6" /></div>
              <p className="text-xs font-bold tracking-[0.16em] text-[#1a73e8]">{eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AppDevelopmentStudio


import { ArrowRight, BarChart3, FileText, PhoneCall, Search, Target } from "lucide-react";

export default function ClinicPatientGrowthWebsite() {
  const sections = [
    { id: 'opportunity', label: 'Opportunity' },
    { id: 'system', label: 'System' },
    { id: 'results', label: 'Results' },
    { id: 'deliverables', label: 'Deliverables' },
    { id: 'plan', label: '90-Day Plan' },
    { id: 'contact', label: 'Contact' },
  ];

  const pillars = [
    {
      title: 'Content',
      badge: 'Trust + credibility',
      icon: <FileText className="h-5 w-5" />,
      text:
        'We create before/after visuals, educational posts, testimonials, and clean branded content that makes your clinic feel premium, active, and credible.',
    },
    {
      title: 'Google Ads',
      badge: 'High-intent traffic',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M12.9 3.2a3.6 3.6 0 0 1 6.2 0l3.6 6.3a3.6 3.6 0 0 1 0 3.6l-3.6 6.3a3.6 3.6 0 0 1-6.2 0l-3.6-6.3a3.6 3.6 0 0 1 0-3.6l3.6-6.3Z" fill="#4285F4" opacity=".95"/>
          <circle cx="6.2" cy="18.1" r="3.2" fill="#34A853"/>
          <path d="M10.7 6.4 7.1 12.6l-3.4 5.9" stroke="#FBBC05" strokeWidth="3.2" strokeLinecap="round"/>
        </svg>
      ),
      text:
        'We capture local searches from people already looking for a dentist, orthodontist, or optometrist nearby.',
    },
    {
      title: 'Meta Ads',
      badge: 'Demand + retargeting',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M4 16.2c0-4.8 1.9-8.7 4.2-8.7 2 0 3.6 3.3 4.4 5 .8-1.7 2.5-5 4.5-5 2.2 0 3.9 3.9 3.9 8.7" stroke="#0866FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text:
        'We keep your clinic visible on Instagram and Facebook, create demand, retarget interested people, and turn attention into bookings.',
    },
  ];

  const deliverables = [
    'We manage Google and Meta ads with a bookings-first approach.',
    'We set up tracking and retargeting systems to recover lost leads.',
    'We guide content that builds trust and improves conversions.',
    'We provide monthly reporting with clear performance insights.',
  ];

  const stats = [
    { value: '15+', label: 'Brands scaled' },
    { value: '6M', label: 'Average views per 90 days' },
    { value: '6 mo', label: 'Campaign experience' },
  ];

  const pains = [
    {
      title: 'Low Patient Flow',
      text: 'Most clinics still rely heavily on referrals and walk-ins, making bookings inconsistent and difficult to predict.',
    },
    {
      title: 'Weak Online Presence',
      text: 'Patients compare clinics on Google, Instagram, and reviews before booking. If your brand looks inactive or outdated, trust drops fast.',
    },
    {
      title: 'No Lead System',
      text: 'Interested patients often do not convert because there is no follow-up, retargeting, or clear booking path.',
    },
    {
      title: 'Competitors Running Ads',
      text: 'Other clinics show up first, stay top-of-mind, and capture more high-intent patients.',
    },
  ];

  const plan = [
    {
      month: 'Month 1',
      title: 'Set the foundation',
      items: ['Audit online presence', 'Launch ads', 'Set up tracking', 'Refine offer positioning'],
    },
    {
      month: 'Month 2',
      title: 'Optimize & build trust',
      items: ['Retarget leads', 'Refine creatives', 'Improve conversions', 'Focus on best-performing services'],
    },
    {
      month: 'Month 3',
      title: 'Scale what works',
      items: ['Increase winning spend', 'Expand local reach', 'Build consistency', 'Increase bookings'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-sky-700">AISER</div>
            <div className="text-sm text-slate-500">Patient Booking Systems</div>
          </div>
          <nav className="hidden gap-6 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-slate-600 transition hover:text-sky-700"
              >
                {section.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
          >
            Book a chat
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden scroll-mt-28" id="top">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-slate-50" />
          <div className="absolute -right-20 top-12 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-sky-700">
                Dentists · Orthodontists · Optometrists
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                We Help Clinics Get More Patient Bookings
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                AISER builds clean, credible booking systems using content, Google Ads, and Meta Ads to turn local attention into consistent patient inquiries.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#system"
                  className="rounded-full bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02]"
                >
                  View the system
                </a>
                <a
                  href="#results"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
                >
                  Expected results
                </a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-sky-100 bg-white/90 p-5 shadow-sm">
                    <div className="text-2xl font-semibold text-sky-800">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-xl shadow-sky-100/40">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                    alt="Clean, modern clinic interior"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/35 via-transparent to-white/10" />
                </div>
                <div className="p-7">
                  <div className="mb-5">
                    <div className="text-sm font-medium text-slate-500">Quick snapshot</div>
                    <div className="text-xl font-semibold text-slate-900">What strong clinics do differently</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Show up when patients search locally',
                      'Look active, premium, and trustworthy online',
                      'Use before/after, educational content, and social proof',
                      'Retarget interested people who did not book yet',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <p className="text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl bg-sky-700 p-5 text-white">
                    <p className="text-sm uppercase tracking-[0.18em] text-sky-100">Core promise</p>
                    <p className="mt-2 text-lg font-medium leading-8">
                      More patient bookings consistently, not just more views, likes, or random activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl scroll-mt-28 px-6 py-18 lg:px-8" id="opportunity">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">The opportunity</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Patients choose clinics online first
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Before booking, people compare reviews, social proof, before-and-afters, and local visibility. The clinic that feels active and trustworthy usually wins.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pains.map((pain) => (
              <div key={pain.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-slate-900">{pain.title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{pain.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white scroll-mt-28" id="system">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">The booking system</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Three pillars working together
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[2rem] border border-sky-100 bg-gradient-to-b from-white to-sky-50/60 p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      {pillar.icon}
                    </div>
                    <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
                      {pillar.badge}
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl scroll-mt-28 px-6 py-18 lg:px-8" id="results">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">Expected results</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">What strong execution can lead to</h2>
              <ul className="mt-8 space-y-4">
                {[
                  '+15–30 new patient inquiries per month',
                  '+10–25% increase in bookings',
                  'Higher visibility for premium services like whitening, Invisalign, braces, implants, eye tests, or eyewear',
                  'More trust through repeated exposure and consistent messaging',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-sky-800 p-8 text-white shadow-lg shadow-sky-100/50">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-100">Positioning note</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">This is about bookings, not vanity metrics</h3>
              <p className="mt-5 text-sm leading-7 text-sky-50/90">
                Exact outcomes depend on offer quality, budget, landing pages, admin follow-up, and response speed. The goal is simple: turn digital visibility into patient flow.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Google Search', 'Captures intent'],
                  ['Meta Retargeting', 'Brings warm prospects back'],
                  ['Content', 'Builds credibility'],
                  ['Follow-up', 'Converts interest into bookings'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-medium">{title}</div>
                    <div className="mt-1 text-sm text-sky-50/80">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white scroll-mt-28" id="deliverables">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">Monthly deliverables</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  What we handle for your clinic
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  A lean, bookings-first model designed to help clinics look stronger online and convert more local attention into revenue.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item, index) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-sm font-medium text-sky-700">0{index + 1}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl scroll-mt-28 px-6 py-18 lg:px-8" id="plan">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-700">30-60-90 day plan</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Start lean, optimize fast, scale what works
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plan.map((phase) => (
              <div key={phase.month} className="rounded-[2rem] border border-sky-100 bg-white p-7 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-sky-700">{phase.month}</div>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{phase.title}</h3>
                <ul className="mt-5 space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-sky-900 scroll-mt-28" id="contact">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-100">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build a system that brings in more patient bookings consistently
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-sky-50/85">
                  AISER is built to help dentists, orthodontists, and optometrists turn clean branding, strategic content, and paid traffic into real inquiries.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-white backdrop-blur-sm">
                <div className="space-y-5 text-sm">
                  <div>
                    <div className="text-sky-200">Email</div>
                    <div className="mt-1 text-base font-medium">aisergrowth@gmail.com</div>
                  </div>
                  <div>
                    <div className="text-sky-200">Instagram</div>
                    <div className="mt-1 text-base font-medium">@aiser</div>
                  </div>
                  <div>
                    <div className="text-sky-200">Phone</div>
                    <div className="mt-1 text-base font-medium">+27 69 950 9532</div>
                  </div>
                </div>
                <a
                  href="mailto:aisergrowth@gmail.com"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-sky-900 transition hover:scale-[1.02]"
                >
                  Contact AISER <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

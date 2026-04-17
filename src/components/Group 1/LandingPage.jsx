import React, { useEffect, useRef } from 'react';

/* ====================== DATA ====================== */

const people = [
  { color: '#2d6b58', height: '64px' },
  { color: '#1e3d32', height: '52px' },
  { color: '#c17a6a', height: '60px' },
  { color: '#d4aa88', height: '50px' },
  { color: '#4a7a68', height: '66px' },
  { color: '#d4874a', height: '48px' },
];

const pillars = [
  {
    title: 'Technical Support',
    desc: 'Bridge the digital divide. Seniors getting tech-help from digital natives, fostering intergenerational bonds.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Food Security',
    desc: 'Meal sharing, community gardens, and emergency pantry networks.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4M12 18v4M8 6h8M6 10h12M8 14h8" />
      </svg>
    ),
  },
  {
    title: 'Education',
    desc: 'Skill-swaps, homework help, and local language exchange programs.',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

const stats = [
  { num: '12k+', label: 'Acts of Care' },
  { num: '98%', label: 'Safety Rating' },
  { num: '45', label: 'Active Cities' },
  { num: 'Instant', label: 'Help Matching', small: true },
];

/* ====================== MAIN COMPONENT ====================== */

const LandingPage = () => {
  const rootRef = useRef(null);

  // Scroll fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = rootRef.current?.querySelectorAll('.fade-up');
    fadeElements?.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white text-[#111918] overflow-x-hidden"
    >
      {/* Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700;1,800&family=Inter:wght@400;500;600&display=swap');
          .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        `}
      </style>

      {/* ── NAVIGATION ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white border-b border-[#dde8e3] px-12 h-[58px]">
        <span className="font-jakarta font-semibold text-base tracking-tight text-[#111918]">
          The Commons
        </span>

        <ul className="flex gap-7 list-none text-sm text-[#3d4f49]">
          <li className="font-jakarta font-semibold text-[#111918] border-b-2 border-[#2d7a63] pb-0.5 cursor-pointer">
            Landing
          </li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">About</li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">Services</li>
          <li className="cursor-pointer hover:text-[#111918] transition-colors">Contact</li>
        </ul>

        <div className="flex items-center gap-5">
          <button className="text-sm text-[#3d4f49] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors">
            Sign In
          </button>
          <button className="bg-[#1d4d3c] text-white text-sm font-medium rounded-full px-5 py-2 border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="flex items-start justify-between gap-10 px-12 pt-16 pb-20 bg-white min-h-[520px]">
        {/* Left Content */}
        <div className="fade-up max-w-[430px] pt-1">
          <p className="text-[10.5px] tracking-[0.14em] uppercase text-[#6b7f78] font-medium mb-6">
            A Digital Sanctuary for Care
          </p>
          <h1 className="font-jakarta text-[60px] leading-[1.03] font-extrabold text-[#111918] tracking-[-1.5px] mb-5">
            The strength of<br />
            <span className="text-[#2d7a63] italic">community</span><br />
            in your pocket.
          </h1>
          <p className="text-[14.5px] leading-relaxed text-[#6b7f78] mb-8 max-w-[340px]">
            A high-end editorial space for local mutual aid. Connect with neighbors for tech support, shared meals, education, and essential errands.
          </p>

          <div className="flex items-center gap-5">
            <button className="bg-[#1d4d3c] text-white rounded-full px-6 py-3 text-[14.5px] font-medium border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
              Start your journey
            </button>
            <button className="flex items-center gap-2 text-[14.5px] text-[#3d4f49] bg-transparent border-none cursor-pointer hover:text-[#111918] transition-colors">
              <span className="w-7 h-7 rounded-full border border-[#3d4f49] flex items-center justify-center text-[9px] pl-[2px] flex-shrink-0">
                ▶
              </span>
              How it works
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="fade-up relative flex-shrink-0 w-[370px]" style={{ transitionDelay: '0.1s' }}>
          <div
            className="w-[370px] h-[320px] rounded-2xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(160deg, #7a5240 0%, #4a2e1e 50%, #3a2010 100%)',
            }}
          >
            {/* Brick Texture */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent, transparent 26px, rgba(0,0,0,0.07) 26px, rgba(0,0,0,0.07) 28px)',
              }}
            />

            {/* Sign */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#3d9b84] text-white font-jakarta font-bold text-[11.5px] tracking-wide text-center leading-6 px-5 py-2.5 rounded-sm whitespace-nowrap">
              COMMUNITY<br />· SAFE · WORK
            </div>

            {/* Lamp */}
            <div className="absolute left-14 top-5 w-1 h-24 bg-[#c8a882] rounded-sm">
              <div
                className="absolute -bottom-1 -left-3.5 w-8 h-8 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,232,150,0.7) 0%, rgba(244,192,80,0.3) 50%, transparent 70%)',
                }}
              />
            </div>

            {/* Table */}
            <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-[270px] h-[18px] bg-[#c49a62] rounded" />

            {/* People Illustration */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 items-end">
              {people.map((person, index) => (
                <div
                  key={index}
                  className="w-[30px] rounded-t-full rounded-b-sm relative"
                  style={{ backgroundColor: person.color, height: person.height }}
                >
                  <div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full"
                    style={{ backgroundColor: person.color, filter: 'brightness(1.15)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Live Activity Chip */}
          <div
            className="absolute -bottom-3.5 left-4 bg-white rounded-xl px-4 py-3 w-[205px]"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.13)' }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-[7px] h-[7px] bg-green-500 rounded-full flex-shrink-0" />
              <span className="text-[11px] text-[#6b7f78] font-medium">Live Activity</span>
            </div>
            <p className="text-[12.5px] text-[#111918] leading-snug">
              "Sarah just shared a fresh loaf of sourdough in Sector 4"
            </p>
          </div>
        </div>
      </section>

      {/* ── PILLARS SECTION ── */}
      <section className="px-12 py-20 bg-[#eef3f1]">
        {/* Section Header */}
        <div className="fade-up flex items-start justify-between mb-9">
          <div>
            <h2 className="font-jakarta text-[42px] font-extrabold text-[#111918] leading-tight tracking-[-1px] mb-2.5">
              Pillars of the Commons.
            </h2>
            <p className="text-sm text-[#6b7f78] leading-relaxed max-w-[360px]">
              We've organized community care into focus areas that matter most to your daily life.
            </p>
          </div>
          <button className="text-sm text-[#1c5c47] font-semibold bg-transparent border-none cursor-pointer mt-1 whitespace-nowrap hover:underline">
            Explore all categories →
          </button>
        </div>

        {/* Pillar Cards */}
        <div
          className="fade-up grid gap-3.5 mb-3.5"
          style={{ gridTemplateColumns: '1.4fr 1fr 1fr', transitionDelay: '0.08s' }}
        >
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-7 border border-[#dde8e3]">
              <div className="w-[42px] h-[42px] bg-[#e4eee9] rounded-xl flex items-center justify-center mb-5 text-[#1c5c47]">
                {pillar.icon}
              </div>
              <h3 className="font-jakarta text-base font-bold text-[#111918] mb-2">{pillar.title}</h3>
              <p className="text-[13.5px] text-[#6b7f78] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Daily Errands Wide Card */}
        <div
          className="fade-up flex bg-white rounded-2xl border border-[#dde8e3] overflow-hidden"
          style={{ transitionDelay: '0.16s' }}
        >
          {/* Illustration */}
          <div
            className="w-[240px] flex-shrink-0 flex items-center justify-center"
            style={{ background: 'linear-gradient(140deg, #4e7040 0%, #2e4a26 100%)' }}
          >
            <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
              <circle cx="32" cy="76" r="24" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" fill="none" />
              <circle cx="118" cy="76" r="24" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" fill="none" />
              <line x1="32" y1="76" x2="75" y2="34" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" />
              <line x1="75" y1="34" x2="118" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" />
              <line x1="75" y1="34" x2="75" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3" />
              <line x1="32" y1="76" x2="75" y2="76" stroke="rgba(255,255,255,0.85)" strokeWidth="3" />
              <line x1="64" y1="25" x2="86" y2="25" stroke="rgba(255,255,255,0.85)" strokeWidth="3.5" strokeLinecap="round" />
              <ellipse cx="96" cy="42" rx="7" ry="9" fill="rgba(255,255,255,0.72)" />
              <line x1="96" y1="51" x2="103" y2="76" stroke="rgba(255,255,255,0.72)" strokeWidth="3" />
              <line x1="96" y1="51" x2="75" y2="34" stroke="rgba(255,255,255,0.72)" strokeWidth="3" />
              <line x1="92" y1="62" x2="108" y2="57" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 px-8 py-7 relative flex flex-col justify-center">
            <span className="inline-block bg-[#c6ece0] text-[#1a5c40] text-[10.5px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2.5 w-fit">
              Vital Care
            </span>
            <h3 className="font-jakarta text-xl font-bold text-[#111918] mb-2">Daily Errands & Support</h3>
            <p className="text-[13.5px] text-[#6b7f78] leading-relaxed max-w-[440px]">
              From pharmacy runs for the homebound to furniture assembly or walking a neighbor's dog. We make the small things easier for everyone.
            </p>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1d4d3c] text-white border-none text-2xl flex items-center justify-center cursor-pointer leading-none hover:bg-[#2a6b54] transition-colors">
              +
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL + STATS ── */}
      <section className="px-12 py-20 bg-white grid grid-cols-2 gap-20 items-center">
        {/* Testimonial */}
        <div className="fade-up">
          <p className="font-jakarta text-[27px] font-bold text-[#111918] leading-[1.45] tracking-[-0.5px] mb-8">
            The Commons isn't just an app. It's the digital infrastructure for the kindness that already exists in our streets. It made asking for help feel safe and honorable.
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-lg overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #c8906a, #a06040)' }}
            >
              👩
            </div>
            <div>
              <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#111918] mb-0.5">
                Julianna Rivers
                <span className="bg-[#e4f0ea] text-[#1c5c47] text-[9.5px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full">
                  Trusted Member
                </span>
              </div>
              <div className="text-[13px] text-[#6b7f78]">Community Lead, Portland</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-up grid grid-cols-2 gap-2.5" style={{ transitionDelay: '0.1s' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#dde8e3] rounded-2xl px-6 py-7">
              <div
                className={`font-jakarta font-extrabold text-[#1c5c47] leading-none mb-1.5 tracking-tight ${
                  stat.small ? 'text-[28px]' : 'text-[40px]'
                }`}
              >
                {stat.num}
              </div>
              <div className="text-[10.5px] tracking-widest uppercase text-[#6b7f78] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-20 pb-20 bg-white">
        <div className="fade-up bg-[#1c5c47] rounded-[20px] px-12 py-16 text-center">
          <h2 className="font-jakarta text-[46px] font-extrabold text-white mb-4 leading-[1.12] tracking-[-1px]">
            Ready to rebuild<br />the neighborhood?
          </h2>
          <p className="text-[14.5px] text-white/70 mb-9 max-w-[400px] mx-auto">
            Join thousands of others who are reclaiming the commons. Your first act of care is just a click away.
          </p>
          <div className="flex items-center justify-center gap-3.5">
            <button className="bg-white text-[#1c5c47] rounded-full px-7 py-3.5 text-[14.5px] font-semibold border-none cursor-pointer hover:bg-gray-100 transition-colors">
              Create Account
            </button>
            <button className="bg-transparent text-white border border-white/40 rounded-full px-7 py-3.5 text-[14.5px] font-medium cursor-pointer hover:border-white transition-colors">
              Talk to an Ambassador
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#eef3f1] px-12 pt-14 pb-7 border-t border-[#dde8e3]">
        <div className="grid gap-11 mb-12" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr' }}>
          {/* Brand */}
          <div>
            <span className="font-jakarta font-semibold text-[15px] text-[#111918] block mb-3">
              The Commons
            </span>
            <p className="text-[13px] text-[#6b7f78] leading-relaxed max-w-[200px] mb-4">
              A dignified platform for mutual aid, built on the values of the public library and the town square.
            </p>
            <div className="flex gap-2">
              {['🌐', '💬'].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-full border border-[#dde8e3] bg-white flex items-center justify-center text-sm cursor-pointer hover:border-[#2d7a63] transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">
              Platform
            </h4>
            <ul className="list-none space-y-2.5">
              {['Safety & Trust', 'How it works', 'Case Studies', 'Pricing for Orgs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13.5px] text-[#3d4f49] no-underline hover:text-[#1c5c47] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">
              Community
            </h4>
            <ul className="list-none space-y-2.5">
              {['Ambassadors', 'Events', 'Grants', 'Code of Conduct'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13.5px] text-[#3d4f49] no-underline hover:text-[#1c5c47] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10.5px] tracking-[0.12em] uppercase text-[#6b7f78] font-semibold mb-3.5">
              Join the Fold
            </h4>
            <p className="text-[13px] text-[#6b7f78] mb-3.5 leading-relaxed">
              Our weekly dispatch on community care.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3.5 py-2.5 border border-[#dde8e3] border-r-0 rounded-l-lg text-[13.5px] outline-none bg-white text-[#111918] focus:border-[#2d7a63]"
              />
              <button className="bg-[#1d4d3c] text-white px-3.5 rounded-r-lg text-base border-none cursor-pointer hover:bg-[#2a6b54] transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between border-t border-[#dde8e3] pt-5">
          <p className="text-[12.5px] text-[#6b7f78]">
            © 2024 The Commons Community Platform. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['PRIVACY', 'TERMS', 'ACCESSIBILITY'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12.5px] text-[#6b7f78] no-underline tracking-wide hover:text-[#1c5c47] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
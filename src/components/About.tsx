import React from 'react';
import { motion } from 'motion/react';
import { Target, Telescope, Sparkle } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Load',
        desc: 'Operator loads cargo onto the ATM platform. Rated for up to 500 kg.',
    },
    {
        num: '02',
        title: 'Navigate',
        desc: 'Vehicle moves at controlled speed via joystick or autonomous lane-follow.',
    },
    {
        num: '03',
        title: 'Deliver',
        desc: 'Precision delivery to the target station — no manual effort required.',
    },
    {
        num: '04',
        title: 'Repeat',
        desc: 'ATMs cycle continuously. Recharge on the go with swappable batteries.',
    },
];

const testimonials = [
    {
        stars: 5,
        text: '"The HyTork ATM 120 cut our internal logistics time by 40%. Operators used to spend 3 hours per shift just moving parts — now it\'s fully automated."',
        name: 'Arjun M.',
        role: 'Operations Head, Tier-1 Auto Supplier',
        initials: 'AM',
    },
    {
        stars: 5,
        text: '"We run the i-ATM autonomously through our warehouse aisles. Zero collisions, consistent throughput, minimal supervision. Remarkable engineering."',
        name: 'Priya S.',
        role: 'Supply Chain Director, E-commerce Hub',
        initials: 'PS',
    },
    {
        stars: 5,
        text: '"Cylion battery integration into our e-bike fleet was seamless. Thermal stability in our humid facility is excellent — well beyond competitors."',
        name: 'Ravi K.',
        role: 'Fleet Manager, Campus Mobility',
        initials: 'RK',
    },
];

const About: React.FC = () => {
    return (
        <>
            {/* ════════════════════════════════════════════════
                HOW IT WORKS
            ════════════════════════════════════════════════ */}
            <section id="how-it-works" style={{ background: 'white', padding: '96px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="label-tag">Process</span>
                        <h2>
                            How it{' '}
                            <span style={{ color: 'var(--green-dark)' }}>works</span>
                            {' '}in your facility
                        </h2>
                        <p>Four simple steps that run continuously — with minimal supervision required.</p>
                    </div>

                    {/* Step cards */}
                    <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                className="how-step"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{ padding: '0 16px' }}
                            >
                                {/* Connector line */}
                                {i < steps.length - 1 && (
                                    <div className="how-step-connector" />
                                )}
                                <div className="how-step-num">{step.num}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sub note */}
                    <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 14, color: 'var(--ink-muted)', marginTop: 48 }}>
                        Designed for repeatable cycles — 24 hours a day, 7 days a week.
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                OUR STORY
            ════════════════════════════════════════════════ */}
            <section id="about" style={{ background: 'var(--paper)', padding: '96px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
                        {/* Left: image */}
                        <motion.div
                            className="story-img-wrap"
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src="https://raw.githubusercontent.com/Hyt-1020/HyTork/main/public/atom.JPG"
                                alt="HyTork engineering team"
                                crossOrigin="anonymous"
                                referrerPolicy="no-referrer"
                            />
                            {/* Floating badge */}
                            <div className="story-img-badge">
                                <div className="story-img-badge-val">Est. 2025</div>
                                <div className="story-img-badge-label">VIT Chennai</div>
                            </div>
                        </motion.div>

                        {/* Right: text */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            <span className="label-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Our Story</span>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    color: 'var(--ink)',
                                    marginBottom: 20,
                                    marginTop: 12,
                                }}
                            >
                                Engineering-led,<br />
                                <span style={{ color: 'var(--green-dark)' }}>mobility-focused</span>
                            </h2>
                            <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.75, marginBottom: 14 }}>
                                HyTork Motors was founded at VIT Chennai by engineers frustrated with the state of industrial logistics. We watched warehouses still using hand trolleys in 2025 — so we built something better.
                            </p>
                            <p style={{ fontSize: 15, color: 'var(--ink-muted)', lineHeight: 1.75, marginBottom: 32 }}>
                                Our electric ATM vehicles combine precision differential drives, high-density NMC batteries, and optional autonomous navigation into a single platform that pays for itself within months of deployment.
                            </p>

                            {/* Mission / Vision */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}>
                                <div className="mv-card mv-card-green">
                                    <div className="mv-icon mv-icon-green">
                                        <Target size={18} />
                                    </div>
                                    <div>
                                        <div className="mv-title" style={{ color: 'rgba(255,255,255,0.6)' }}>Mission</div>
                                        <div className="mv-desc" style={{ color: 'white' }}>Efficient & Reliable Industrial Movement</div>
                                    </div>
                                </div>
                                <div className="mv-card mv-card-light">
                                    <div className="mv-icon mv-icon-light">
                                        <Telescope size={18} />
                                    </div>
                                    <div>
                                        <div className="mv-title" style={{ color: 'var(--ink-muted)' }}>Vision</div>
                                        <div className="mv-desc" style={{ color: 'var(--ink)' }}>Autonomous Industrial Mobility By 2030</div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3,1fr)',
                                gap: 20,
                                padding: '24px 0',
                                borderTop: '1px solid var(--border)',
                                marginBottom: 28,
                            }}>
                                {[
                                    { val: '6+', label: 'Products' },
                                    { val: '100%', label: 'Electric' },
                                    { val: '34%', label: 'Efficiency ↑' },
                                ].map(s => (
                                    <div key={s.label}>
                                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--green-dark)', lineHeight: 1 }}>{s.val}</div>
                                        <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-muted)', marginTop: 4 }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>

                            <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                                Request a Demo
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                TESTIMONIALS
            ════════════════════════════════════════════════ */}
            <section style={{ background: 'white', padding: '80px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="label-tag">Social Proof</span>
                        <h2>Trusted by operations<br />teams across India</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.1 }}
                            >
                                <div className="stars">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <span key={j} className="star">★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.initials}</div>
                                    <div>
                                        <div className="author-name">{t.name}</div>
                                        <div className="author-role">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                MARQUEE STRIP
            ════════════════════════════════════════════════ */}
            <div style={{ background: 'var(--surface)', padding: '20px 0', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div className="marquee-track" style={{ gap: 0 }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <React.Fragment key={i}>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.2em', whiteSpace: 'nowrap', padding: '0 32px' }}>
                                Zero Emissions
                            </span>
                            <span style={{ color: 'var(--green)', fontSize: 12, flexShrink: 0 }}><Sparkle size={10} fill="currentColor" /></span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.2em', whiteSpace: 'nowrap', padding: '0 32px' }}>
                                500 kg Payload
                            </span>
                            <span style={{ color: 'var(--green)', fontSize: 12, flexShrink: 0 }}><Sparkle size={10} fill="currentColor" /></span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.2em', whiteSpace: 'nowrap', padding: '0 32px' }}>
                                Autonomous Ready
                            </span>
                            <span style={{ color: 'var(--green)', fontSize: 12, flexShrink: 0 }}><Sparkle size={10} fill="currentColor" /></span>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.2em', whiteSpace: 'nowrap', padding: '0 32px' }}>
                                Made in India
                            </span>
                            <span style={{ color: 'var(--green)', fontSize: 12, flexShrink: 0 }}>✦</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Package, Zap, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const imgY = useTransform(scrollY, [0, 600], [0, 80]);
    const textY = useTransform(scrollY, [0, 600], [0, -40]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

    return (
        <section
            id="home"
            ref={ref}
            style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
        >
            {/* ── Dark gradient background ── */}
            <div className="hero-bg" />
            <div className="hero-grid-overlay" />
            <div className="hero-noise" />

            {/* ── Ambient glows ── */}
            <div
                className="hero-glow"
                style={{ width: 600, height: 600, background: 'rgba(34,197,94,0.12)', top: -100, right: -80 }}
            />
            <div
                className="hero-glow"
                style={{ width: 400, height: 400, background: 'rgba(34,197,94,0.06)', bottom: 0, left: 100 }}
            />

            {/* ── Main Content ── */}
            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: 120, paddingBottom: 80 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
                    className="grid-hero"
                >
                    {/* ─── LEFT COLUMN ─── */}
                    <motion.div
                        style={{ y: textY, opacity }}
                        initial={{ opacity: 0, x: -48 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Badge */}
                        <div style={{ marginBottom: 28 }}>
                            <span className="hero-badge">
                                <span className="hero-badge-dot" />
                                Electric Industrial Vehicles
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                                fontWeight: 800,
                                color: 'white',
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                                marginBottom: 24,
                            }}
                        >
                            Moving materials<br />
                            should{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #22c55e, #86efac)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                never
                            </span>
                            <br />
                            slow you down.
                        </h1>

                        {/* Sub text */}
                        <p
                            style={{
                                fontSize: 16,
                                color: 'rgba(255,255,255,0.62)',
                                lineHeight: 1.7,
                                maxWidth: 440,
                                marginBottom: 32,
                            }}
                        >
                            HyTork engineers electric ATVs for warehouses & factory floors — purpose-built for continuous cycles, zero emissions, and minimal downtime.
                        </p>

                        {/* Checklist */}
                        <ul className="hero-checklist" style={{ marginBottom: 40 }}>
                            {[
                                'Up to 500 kg payload capacity',
                                'Vision-based autonomous navigation',
                                'Maintenance-free belt drive system',
                                'NMC battery — 110–180 km range',
                            ].map(item => (
                                <li key={item}>
                                    <span className="hero-checklist-icon">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                            <a href="#products" className="btn-primary">
                                Explore Solutions
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </a>
                            <a href="#how-it-works" className="btn-ghost">
                                How it Works
                            </a>
                        </div>
                    </motion.div>

                    {/* ─── RIGHT COLUMN: Vehicle image + annotations ─── */}
                    <motion.div
                        style={{ y: imgY }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden-mobile"
                        id="hero-right"
                    >
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            {/* Glowing ring behind image */}
                            <div style={{
                                position: 'absolute',
                                inset: -24,
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
                            }} />

                            {/* Main vehicle image — card style */}
                            <div style={{
                                borderRadius: 20,
                                overflow: 'hidden',
                                border: '1px solid rgba(34,197,94,0.18)',
                                background: 'rgba(255,255,255,0.04)',
                                backdropFilter: 'blur(4px)',
                                width: '100%',
                                aspectRatio: '4/3',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 32,
                                position: 'relative',
                            }}>
                                <motion.img
                                    src="https://raw.githubusercontent.com/Hyt-1020/HyTork/main/public/atom_xl.jpg"
                                    alt="HyTork ATM 120 Industrial Vehicle"
                                    crossOrigin="anonymous"
                                    referrerPolicy="no-referrer"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                />

                                {/* Corner accents */}
                                <div style={{ position: 'absolute', top: 14, left: 14, width: 20, height: 20, borderTop: '2px solid rgba(34,197,94,0.5)', borderLeft: '2px solid rgba(34,197,94,0.5)', borderRadius: '2px 0 0 0' }} />
                                <div style={{ position: 'absolute', top: 14, right: 14, width: 20, height: 20, borderTop: '2px solid rgba(34,197,94,0.5)', borderRight: '2px solid rgba(34,197,94,0.5)', borderRadius: '0 2px 0 0' }} />
                                <div style={{ position: 'absolute', bottom: 14, left: 14, width: 20, height: 20, borderBottom: '2px solid rgba(34,197,94,0.5)', borderLeft: '2px solid rgba(34,197,94,0.5)', borderRadius: '0 0 0 2px' }} />
                                <div style={{ position: 'absolute', bottom: 14, right: 14, width: 20, height: 20, borderBottom: '2px solid rgba(34,197,94,0.5)', borderRight: '2px solid rgba(34,197,94,0.5)', borderRadius: '0 0 2px 0' }} />
                            </div>

                            {/* ── Floating Callout Badges ── */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    top: -16,
                                    right: -16,
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.14)',
                                    borderRadius: 10,
                                    padding: '10px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                }}
                            >
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>
                                    <Package size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>500 kg</div>
                                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>MAX PAYLOAD</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: -16,
                                    left: -16,
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.14)',
                                    borderRadius: 10,
                                    padding: '10px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                }}
                            >
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>
                                    <Zap size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 800, color: 'white', fontFamily: 'var(--font-display)' }}>180 km</div>
                                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>RANGE / CHARGE</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    top: '40%',
                                    right: -20,
                                    background: 'rgba(34,197,94,0.15)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(34,197,94,0.3)',
                                    borderRadius: 10,
                                    padding: '10px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                }}
                            >
                                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(34,197,94,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#86efac' }}>
                                    <Cpu size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 800, color: '#86efac', fontFamily: 'var(--font-display)' }}>Autonomous</div>
                                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>READY</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Scrolling Logos / Trust Strip ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    style={{
                        marginTop: 72,
                        paddingTop: 36,
                        borderTop: '1px solid rgba(255,255,255,0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 40,
                        flexWrap: 'wrap',
                    }}
                >
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                        Proven in
                    </span>
                    {['Warehouses', 'Factory Floors', 'Distribution Hubs', 'Auto Plants', 'Cold Storage'].map(env => (
                        <span
                            key={env}
                            style={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: 'rgba(255,255,255,0.4)',
                                letterSpacing: '0.03em',
                                padding: '6px 16px',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 100,
                            }}
                        >
                            {env}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                }}
            >
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(34,197,94,0.6), transparent)' }}
                />
            </motion.div>

            <style>{`
                @media (max-width: 900px) {
                    .grid-hero { grid-template-columns: 1fr !important; }
                    .hidden-mobile { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;

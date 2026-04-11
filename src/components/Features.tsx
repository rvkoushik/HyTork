import React from 'react';
import { motion } from 'motion/react';
import { Clock, Zap, Wrench, Cloud, BarChart3, AlertTriangle } from 'lucide-react';

const painPoints = [
    { icon: <Clock size={16} />, title: 'Manual Handling Delays', desc: 'Human-powered carts slow operations and tire workers across long distances.' },
    { icon: <Zap size={16} />, title: 'Inconsistent Throughput', desc: 'Variable human speeds create bottlenecks in logistics and distribution.' },
    { icon: <Wrench size={16} />, title: 'High Maintenance Costs', desc: 'Traditional equipment fails frequently, driving unplanned downtime and costs.' },
    { icon: <Cloud size={16} />, title: 'Carbon & Compliance', desc: 'Diesel-powered equipment drives emissions and regulatory exposure.' },
    { icon: <BarChart3 size={16} />, title: 'No Operational Data', desc: 'Paper logs and guesswork leave logistics managers in the dark.' },
    { icon: <AlertTriangle size={16} />, title: 'Operational Fatigue', desc: 'Repetitive handling tasks lead to injuries, sick days and high turnover.' },
];

const capabilities = [
    {
        label: 'Maximum Efficiency',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><polygon points="24,4 28,20 44,20 31,30 36,46 24,36 12,46 17,30 4,20 20,20" strokeLinejoin="round" /></svg>,
    },
    {
        label: 'Adaptive Durability',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><path d="M24 4L4 14v10c0 12.8 8.6 24.8 20 28 11.4-3.2 20-15.2 20-28V14L24 4z" strokeLinejoin="round" /></svg>,
    },
    {
        label: 'Modular Architecture',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><rect x="6" y="6" width="16" height="16" rx="3" /><rect x="26" y="6" width="16" height="16" rx="3" /><rect x="6" y="26" width="16" height="16" rx="3" /><rect x="26" y="26" width="16" height="16" rx="3" /></svg>,
    },
    {
        label: 'Precision Engineering',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><circle cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="6" /><line x1="24" y1="6" x2="24" y2="14" /><line x1="24" y1="34" x2="24" y2="42" /><line x1="6" y1="24" x2="14" y2="24" /><line x1="34" y1="24" x2="42" y2="24" /></svg>,
    },
    {
        label: 'IoT Integration',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><circle cx="24" cy="24" r="4" /><path d="M14 14a14 14 0 0 0 0 20M34 14a14 14 0 0 1 0 20" strokeLinecap="round" /><path d="M8 8a22 22 0 0 0 0 32M40 8a22 22 0 0 1 0 32" strokeLinecap="round" /></svg>,
    },
    {
        label: 'High Performance',
        svg: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" width={26} height={26}><circle cx="24" cy="24" r="18" /><path d="M16 32 L22 20 L28 26 L34 18" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
];

const Features: React.FC = () => {
    return (
        <>
            {/* ════════════════════════════════════════════════
                STATS BAR
            ════════════════════════════════════════════════ */}
            <div className="stats-bar">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
                        {[
                            { val: '500', unit: 'kg', label: 'Max Payload' },
                            { val: '180', unit: 'km', label: 'Per Charge' },
                            { val: '100', unit: '%', label: 'Electric Fleet' },
                            { val: '34', unit: '%', label: 'Efficiency Gain' },
                            { val: '5', unit: 'km/h', label: 'Operation Speed' },
                        ].map((stat, i, arr) => (
                            <React.Fragment key={stat.label}>
                                <motion.div
                                    className="stat-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '0 20px',
                                        borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none'
                                    }}
                                >
                                    <div className="stat-value" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                        {stat.val}<span style={{ fontSize: '0.5em', opacity: 0.8, fontWeight: 600 }}>{stat.unit}</span>
                                    </div>
                                    <div className="stat-label" style={{ marginTop: 4, fontSize: 10 }}>{stat.label}</div>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════════════
                PROBLEM SECTION
            ════════════════════════════════════════════════ */}
            <section id="problems" style={{ background: 'white', padding: '96px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
                        {/* Left column */}
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="label-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>The Problem</span>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                                    fontWeight: 800,
                                    color: 'var(--ink)',
                                    lineHeight: 1.1,
                                    marginBottom: 20,
                                    marginTop: 12,
                                }}
                            >
                                Where industrial<br />
                                <span style={{ color: 'var(--green-dark)' }}>movement</span> breaks
                            </h2>
                            <p style={{ fontSize: 16, color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                                Across warehouses, factories and distribution centers, the same six problems cost teams time, money, and competitive edge every single day.
                            </p>

                            {/* Warehouse image */}
                            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border)' }}>
                                <img
                                    src="https://raw.githubusercontent.com/Hyt-1020/HyTork/main/public/atom_ixl.jpg"
                                    alt="HyTork ATM in warehouse"
                                    crossOrigin="anonymous"
                                    referrerPolicy="no-referrer"
                                    style={{ width: '100%', height: 260, objectFit: 'cover' }}
                                />
                                <div style={{ padding: '16px 20px', background: 'var(--paper)', borderTop: '1px solid var(--border)' }}>
                                    <p style={{ fontSize: 13, color: 'var(--ink-muted)', fontStyle: 'italic' }}>
                                        HyTork i-ATM operating autonomously in a controlled warehouse aisle.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column: pain point cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.12 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                        >
                            {painPoints.map((pt, i) => (
                                <motion.div
                                    key={pt.title}
                                    className="pain-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.07 }}
                                >
                                    <div className="pain-icon-wrap" style={{ color: '#ef4444' }}>{pt.icon}</div>
                                    <div>
                                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>{pt.title}</div>
                                        <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{pt.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                CAPABILITIES
            ════════════════════════════════════════════════ */}
            <section id="features" style={{ background: 'var(--paper)', padding: '80px 0' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="label-tag">Core Technology</span>
                        <h2>Our Capabilities</h2>
                        <p>Every HyTork vehicle integrates six core engineering pillars — refined through real industrial use.</p>
                    </div>

                    <div className="cap-grid">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={cap.label}
                                className="cap-cell"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <div className="cap-cell-icon">
                                    {cap.svg}
                                </div>
                                <span>{cap.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;

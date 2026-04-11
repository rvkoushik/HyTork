import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => (
    <section id="contact" style={{ background: 'var(--paper)', padding: '96px 0' }}>
        <div className="container">
            {/* Header */}
            <div className="section-header">
                <span className="label-tag">Get in Touch</span>
                <h2>Ready to transform<br />your operations?</h2>
                <p>Talk to our team — we'll design a solution that fits your floor, payload, and cycle time.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48, alignItems: 'start' }}>
                {/* ── Left: info ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 48 }}>
                        {[
                            {
                                icon: <MapPin size={18} />,
                                label: 'Headquarters',
                                content: 'VIT Chennai Campus\nVandalur-Kelambakkam Road\nChennai, Tamil Nadu 600127',
                                href: undefined,
                            },
                            {
                                icon: <Mail size={18} />,
                                label: 'Email',
                                content: 'contact@hytork.com',
                                href: 'mailto:contact@hytork.com',
                            },
                            {
                                icon: <Phone size={18} />,
                                label: 'Phone',
                                content: '+91 123 456 7890',
                                href: 'tel:+911234567890',
                            },
                        ].map(item => (
                            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: 10,
                                    background: 'var(--green-soft)',
                                    border: '1px solid #bbf7d0',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--green-dark)', flexShrink: 0,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 4 }}>{item.label}</div>
                                    {item.href ? (
                                        <a href={item.href} style={{ fontSize: 14, fontWeight: 600, color: 'var(--green-dark)' }}>{item.content}</a>
                                    ) : (
                                        <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.content}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </motion.div>

                {/* ── Right: form ── */}
                <motion.div
                    className="contact-form-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--ink)', marginBottom: 28 }}>
                        Request a Quote
                    </h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={e => e.preventDefault()}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            {['First Name', 'Last Name'].map(label => (
                                <div key={label}>
                                    <label className="form-label">{label}</label>
                                    <input type="text" className="form-input" placeholder={label} />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="form-label">Company / Organisation</label>
                            <input type="text" className="form-input" placeholder="Acme Logistics Pvt. Ltd." />
                        </div>

                        <div>
                            <label className="form-label">Work Email</label>
                            <input type="email" className="form-input" placeholder="you@company.com" />
                        </div>

                        <div>
                            <label className="form-label">Interested Product</label>
                            <select className="form-input">
                                <option>ATM 80 — Compact Mobility</option>
                                <option>ATM 120 — Heavy-Duty</option>
                                <option>i-ATM — Autonomous</option>
                                <option>Cylion Battery Pack</option>
                                <option>Belt Drive System</option>
                                <option>Universal Belt Tool</option>
                                <option>Custom Enquiry</option>
                            </select>
                        </div>

                        <div>
                            <label className="form-label">Payload Requirement (kg)</label>
                            <input type="number" className="form-input" placeholder="e.g. 350" />
                        </div>

                        <div>
                            <label className="form-label">Message</label>
                            <textarea
                                rows={4}
                                className="form-input"
                                placeholder="Tell us about your facility, daily cycles, and any specific requirements..."
                                style={{ resize: 'vertical' }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: '100%', justifyContent: 'center', fontSize: 15 }}
                        >
                            Send Message
                            <ArrowRight size={16} />
                        </button>

                        <p style={{ fontSize: 12, color: 'var(--ink-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                            We typically respond within 1 business day. No spam, ever.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
);

export default Contact;

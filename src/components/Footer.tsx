import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: 'var(--surface)', color: 'white', paddingTop: 72, paddingBottom: 0 }}>
            <div className="container" style={{ paddingBottom: 56 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <img
                                src="https://raw.githubusercontent.com/Hyt-1020/HyTork/main/public/logotm.png"
                                alt="HyTork Brand"
                                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
                            Electric industrial vehicles built for continuous warehouse and factory operations. Made in India.
                        </p>
                        {/* Social pills */}
                        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                            {[
                                { label: 'LinkedIn', url: '#' },
                                { label: 'Twitter', url: '#' },
                                { label: 'YouTube', url: '#' },
                            ].map(s => (
                                <a key={s.label} href={s.url} className="footer-link" style={{
                                    padding: '6px 14px',
                                    borderRadius: 100,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    fontSize: 12, fontWeight: 600,
                                    letterSpacing: '0.04em',
                                    transition: 'all 0.18s',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--green)'; (e.currentTarget as HTMLElement).style.color = 'var(--green)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Solutions</h4>
                        <ul style={{ list: 'none', display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0 }}>
                            {['ATM 80', 'ATM 120', 'i-ATM (Autonomous)', 'Cylion Battery', 'Belt Drive'].map(item => (
                                <li key={item}><a href="#products" className="footer-link">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0 }}>
                            {[
                                { label: 'Our Story', href: '#about' },
                                { label: 'Capabilities', href: '#features' },
                                { label: 'Contact', href: '#contact' },
                                { label: 'Careers', href: '#' },
                            ].map(item => (
                                <li key={item.label}><a href={item.href} className="footer-link">{item.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact mini */}
                    <div>
                        <h4 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>Email</div>
                                <a href="mailto:contact@hytork.com" className="footer-link" style={{ fontSize: 14, fontWeight: 600 }}>contact@hytork.com</a>
                            </div>
                            <div>
                                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', marginBottom: 4 }}>Location</div>
                                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>VIT Chennai,<br />Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="container" style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-mono)' }}>
                        © {year} HyTork Motors Pvt. Ltd. — All rights reserved.
                    </span>
                    <div style={{ display: 'flex', gap: 24 }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(label => (
                            <a key={label} href="#" className="footer-link" style={{ fontSize: 12, fontFamily: 'var(--font-mono)' }}>{label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

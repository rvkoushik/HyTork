import React from 'react';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: 'var(--surface)', color: 'white', paddingTop: 72, paddingBottom: 0 }}>
            <div className="container" style={{ paddingBottom: 56 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid-main">
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <img
                                src="/logotm.png"
                                alt="HyTork Brand"
                                style={{ height: 48, width: 'auto', objectFit: 'contain' }}
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <div className="footer-copy">
                            <strong>HyTork</strong><br />
                            Electric industrial mobility designed for real environments.<br /><br />
                            Built with ❤️ by <a href="https://www.enwithai.com" target="_blank" rel="noopener noreferrer">EnWithAI</a> using the CLEAR™ Engine
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Solutions</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
                            {['ATM 80', 'ATM 120', 'i-ATM', 'Cylion Battery', 'Belt Drive'].map(item => (
                                <li key={item}><a href="#products" className="footer-link">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0 }}>
                            {[
                                { label: 'Build Your Vehicle', href: '#build' },
                                { label: 'Capabilities', href: '#features' },
                                { label: 'Applications', href: '#applications' },
                                { label: 'Contact', href: '#contact' },
                            ].map(item => (
                                <li key={item.label}><a href={item.href} className="footer-link">{item.label}</a></li>
                            ))}
                        </ul>
                    </div>

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
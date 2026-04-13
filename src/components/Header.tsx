import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Why HyTork', href: '#problems' },
        { label: 'Build Your Vehicle', href: '#build' },
        { label: 'Capabilities', href: '#features' },
        { label: 'Solutions', href: '#products' },
        { label: 'Applications', href: '#applications' },
        { label: 'Our Story', href: '#about' },
    ];

    return (
        <header
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
                background: 'white',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
                padding: '12px 0',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/logotm.png"
                        alt="HyTork Brand"
                        style={{
                            height: 42,
                            width: 'auto',
                            objectFit: 'contain',
                            filter: 'brightness(0)'
                        }}
                        referrerPolicy="no-referrer"
                    />
                </a>

                <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hidden md:flex">
                    {links.map(l => (
                        <a
                            key={l.label}
                            href={l.href}
                            style={{
                                fontSize: 12.5,
                                fontWeight: 700,
                                color: 'black',
                                letterSpacing: '0.02em',
                                textTransform: 'uppercase',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--green-dark)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'black')}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#build"
                        className="btn-primary"
                        style={{ fontSize: 11, padding: '10px 20px', borderRadius: 8, fontWeight: 800 }}
                    >
                        Build Your Vehicle
                    </a>
                </nav>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                    style={{ background: 'none', border: 'none', color: 'black', padding: 4 }}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'white', borderBottom: '1px solid var(--border)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.08)', overflow: 'hidden',
                        }}
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', padding: '12px 32px 20px' }}>
                            {[...links, { label: 'Contact Us', href: '#contact' }].map(l => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        padding: '13px 0',
                                        borderBottom: '1px solid var(--border)',
                                        fontSize: 14, fontWeight: 700, color: 'black',
                                        letterSpacing: '0.02em',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
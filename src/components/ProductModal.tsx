import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { X, Check, ChevronRight } from 'lucide-react';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div
            style={{
                position: 'fixed', inset: 0, zIndex: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '16px',
            }}
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{ position: 'absolute', inset: 0, background: 'rgba(10,14,18,0.88)', backdropFilter: 'blur(10px)' }}
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 1020,
                    maxHeight: '90vh',
                    background: 'var(--paper)',
                    borderRadius: 20,
                    boxShadow: '0 0 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'hidden',
                }}
            >
                {/* ── LEFT: Image Panel ── */}
                <div
                    style={{
                        width: 340,
                        flexShrink: 0,
                        background: 'var(--surface)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px 32px',
                        position: 'relative',
                        borderRight: '1px solid rgba(255,255,255,0.04)',
                    }}
                >
                    {/* Ambient glow */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(circle at center, rgba(34,197,94,0.07) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />
                    <img
                        src={product.image}
                        alt={product.title}
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                        style={{
                            width: '100%',
                            maxHeight: 320,
                            objectFit: 'contain',
                            position: 'relative',
                            zIndex: 1,
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                            transition: 'transform 0.5s ease',
                        }}
                    />
                </div>

                {/* ── RIGHT: Content Panel ── */}
                <div
                    style={{
                        flex: 1,
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    {/* Header row: badge + title + close */}
                    <div
                        style={{
                            padding: '28px 28px 0 28px',
                            flexShrink: 0,
                        }}
                    >
                        {/* Top row: badge + close button */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 10,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.14em',
                                color: 'var(--green-dark)',
                                background: 'var(--green-soft)',
                                padding: '5px 12px',
                                borderRadius: 6,
                                border: '1px solid #bbf7d0',
                            }}>
                                {product.modalCategory}
                            </span>
                            <button
                                onClick={onClose}
                                style={{
                                    width: 36, height: 36,
                                    borderRadius: '50%',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    background: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    flexShrink: 0,
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'var(--ink)';
                                    (e.currentTarget as HTMLElement).style.color = 'white';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'white';
                                    (e.currentTarget as HTMLElement).style.color = '';
                                }}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Title */}
                        <h2 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.01em',
                            lineHeight: 1,
                            color: 'var(--ink)',
                            marginBottom: 10,
                        }}>
                            {product.title}
                        </h2>

                        {/* Description */}
                        <p style={{
                            fontSize: 13,
                            color: 'var(--ink-muted)',
                            lineHeight: 1.7,
                            marginBottom: 0,
                            paddingBottom: 20,
                            borderBottom: '1px solid var(--border)',
                        }}>
                            {product.longDescription}
                        </p>
                    </div>

                    {/* Scrollable body */}
                    <div
                        className="hide-scrollbar"
                        style={{ flex: 1, overflowY: 'auto', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 24 }}
                    >
                        {/* Features */}
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 10,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--ink-muted)',
                                marginBottom: 14,
                            }}>
                                Key Features
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {product.features.map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                        <div style={{
                                            width: 20, height: 20, borderRadius: 6,
                                            background: 'var(--green-soft)',
                                            border: '1px solid #bbf7d0',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0,
                                            color: 'var(--green-dark)',
                                            marginTop: 1,
                                        }}>
                                            <Check size={11} strokeWidth={2.5} />
                                        </div>
                                        <span style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.5 }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specs */}
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: 10,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: 'var(--ink-muted)',
                                marginBottom: 14,
                            }}>
                                Technical Specifications
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1px',
                                background: 'var(--border)',
                                border: '1px solid var(--border)',
                                borderRadius: 10,
                                overflow: 'hidden',
                            }}>
                                {product.specs.map((spec, idx) => {
                                    const [label, value] = spec.split(':');
                                    return (
                                        <div key={idx} style={{
                                            background: 'white',
                                            padding: '12px 14px',
                                        }}>
                                            <div style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: 9,
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                color: 'var(--ink-muted)',
                                                marginBottom: 4,
                                            }}>
                                                {label}
                                            </div>
                                            <div style={{
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: 'var(--ink)',
                                                fontFamily: 'var(--font-mono)',
                                            }}>
                                                {value}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Sticky CTA */}
                    <div style={{
                        padding: '16px 28px',
                        borderTop: '1px solid var(--border)',
                        background: 'rgba(255,255,255,0.96)',
                        backdropFilter: 'blur(8px)',
                        flexShrink: 0,
                    }}>
                        <a
                            href="#contact"
                            onClick={onClose}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                                padding: '14px 24px',
                                background: 'var(--ink)',
                                color: 'white',
                                borderRadius: 10,
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 700,
                                fontSize: 11,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                textDecoration: 'none',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.background = 'var(--green-dark)';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(34,197,94,0.25)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.background = 'var(--ink)';
                                (e.currentTarget as HTMLElement).style.transform = '';
                                (e.currentTarget as HTMLElement).style.boxShadow = '';
                            }}
                        >
                            Request Commercial Pilot
                            <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductModal;

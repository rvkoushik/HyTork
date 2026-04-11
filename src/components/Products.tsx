import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Truck, Battery, Settings, Wrench } from 'lucide-react';
import { productsData, Product } from '../data/products';

interface ProductsProps {
    onProductClick: (product: Product) => void;
}

// Map category to badge class & quick specs
const categoryConfig: Record<string, { badgeClass: string; icon: React.ReactNode }> = {
    MOBILITY:         { badgeClass: 'badge-mobility',  icon: <Truck size={14} /> },
    'POWER SYSTEMS':  { badgeClass: 'badge-power',     icon: <Battery size={14} /> },
    'DRIVE SYSTEMS':  { badgeClass: 'badge-drive',     icon: <Settings size={14} /> },
    TOOLS:            { badgeClass: 'badge-tools',     icon: <Wrench size={14} /> },
};

// Extract first 2 specs from a product for the preview chips
const getPreviewSpecs = (specs: string[]) =>
    specs
        .slice(0, 3)
        .map(s => s.split(':')[1]?.trim())
        .filter(Boolean);

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
    const [activeCategory, setActiveCategory] = React.useState('ALL');
    const categories = ['ALL', ...Array.from(new Set(productsData.map(p => p.category)))];

    const filtered = activeCategory === 'ALL'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <section id="products" style={{ background: 'var(--paper)', paddingTop: 96, paddingBottom: 96 }}>
            <div className="container">
                {/* ── Section Header ── */}
                <div className="section-header">
                    <span className="label-tag">Our Solutions</span>
                    <h2>
                        Built for<br />
                        <span style={{ color: 'var(--green-dark)' }}>every operation</span>
                    </h2>
                    <p>
                        From compact micro-mobility to fully autonomous material handling — choose the HyTork solution that fits your floor.
                    </p>
                </div>

                {/* ── Category Filter ── */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48, flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            {categoryConfig[cat]?.icon} {cat}
                        </button>
                    ))}
                </div>

                {/* ── Product Grid ── */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        className="product-grid"
                        layout
                    >
                        {filtered.map((product, i) => {
                            const cfg = categoryConfig[product.category] ?? { badgeClass: '', emoji: '' };
                            const chips = getPreviewSpecs(product.specs);
                            return (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.37, delay: i * 0.06 }}
                                    className="prod-card"
                                    onClick={() => onProductClick(product)}
                                >
                                    {/* Image */}
                                    <div className="prod-card-img">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            crossOrigin="anonymous"
                                            referrerPolicy="no-referrer"
                                        />
                                        <span className={`prod-cat-badge ${cfg.badgeClass}`}>
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="prod-card-body">
                                        <h3>{product.title}</h3>
                                        <p>{product.shortDescription}</p>

                                        {/* Quick spec chips */}
                                        {chips.length > 0 && (
                                            <div className="prod-card-specs">
                                                {chips.map(chip => (
                                                    <span key={chip} className="spec-chip">{chip}</span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="prod-card-action">
                                            <span className="prod-card-action-link">View Specifications</span>
                                            <div className="prod-card-arrow">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* ── CTA below grid ── */}
                <div style={{ textAlign: 'center', marginTop: 52 }}>
                    <p style={{ fontSize: 15, color: 'var(--ink-muted)', marginBottom: 20 }}>
                        Need a custom configuration? We engineer to your specs.
                    </p>
                    <a href="#contact" className="btn-green-outline">Request a Custom Build →</a>
                </div>
            </div>
        </section>
    );
};

export default Products;

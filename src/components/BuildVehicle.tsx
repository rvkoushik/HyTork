import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, SlidersHorizontal, Scale, FileText } from 'lucide-react';

const variants = [
    {
        title: 'ATM 80',
        subtitle: 'Compact movement for lighter internal transport.',
        tag: 'Best for compact movement',
    },
    {
        title: 'ATM 120',
        subtitle: 'Higher payload for warehouse and factory movement.',
        tag: 'Best for higher payload transport',
    },
    {
        title: 'I-ATM',
        subtitle: 'Autonomous movement for repeatable routes.',
        tag: 'Best for autonomous route operation',
    },
];

const quickActions = [
    { label: 'Compare Variants', icon: <Scale size={16} /> },
    { label: 'Build Your Vehicle', icon: <SlidersHorizontal size={16} /> },
    { label: 'Request a Quote', icon: <FileText size={16} /> },
];

const BuildVehicle: React.FC = () => {
    return (
        <section id="build" style={{ background: 'white', padding: '88px 0 72px' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: 40 }}>
                    <span className="label-tag">Build Your Vehicle</span>
                    <h2>
                        Choose the HyTork platform that{' '}
                        <span style={{ color: 'var(--green-dark)' }}>fits your floor</span>
                    </h2>
                    <p>
                        From compact electric carts to autonomous industrial movement, configure the right HyTork solution based on load, route, supervision level, and operating environment.
                    </p>
                </div>

                <div className="build-grid">
                    {variants.map((variant, index) => (
                        <motion.div
                            key={variant.title}
                            className="build-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            <div className="build-card-tag">{variant.tag}</div>
                            <h3>{variant.title}</h3>
                            <p>{variant.subtitle}</p>
                            <a href="#products" className="build-link">
                                Explore Variant <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="build-actions">
                    {quickActions.map(action => (
                        <div key={action.label} className="build-action-pill">
                            {action.icon}
                            <span>{action.label}</span>
                        </div>
                    ))}
                </div>

                <div className="custom-build-cta">
                    <p style={{ fontSize: 15, color: 'var(--ink-muted)', marginBottom: 18 }}>
                        Need a non-standard configuration? We engineer to your specs.
                    </p>
                    <a href="#contact" className="btn-primary">
                        Build Your Vehicle
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BuildVehicle;

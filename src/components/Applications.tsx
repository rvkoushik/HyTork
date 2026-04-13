import React from 'react';
import { Warehouse, Factory, Package, Building2 } from 'lucide-react';

const apps = [
    { icon: <Warehouse size={18} />, title: 'Warehouses', text: 'Move inventory efficiently across aisles and docks.' },
    { icon: <Factory size={18} />, title: 'Manufacturing Floors', text: 'Support line-side movement and internal logistics loops.' },
    { icon: <Package size={18} />, title: 'Distribution Hubs', text: 'Accelerate repetitive route transport with less manual effort.' },
    { icon: <Building2 size={18} />, title: 'Large Campuses', text: 'Enable silent, zero-emission transport inside industrial campuses.' },
];

const Applications: React.FC = () => {
    return (
        <section id="applications" style={{ background: 'white', padding: '84px 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="label-tag">Applications</span>
                    <h2>Where HyTork performs best</h2>
                    <p>Designed for industrial environments where repetitive movement impacts cost, safety, and throughput.</p>
                </div>
                <div className="build-grid">
                    {apps.map(app => (
                        <div key={app.title} className="build-card">
                            <div style={{ color: 'var(--green-dark)', marginBottom: 14 }}>{app.icon}</div>
                            <h3>{app.title}</h3>
                            <p>{app.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Applications;

import React from 'react';

const rows = [
    ['Payload Capacity', '350 kg', '500 kg', '350 kg'],
    ['Drive Mode', 'Manual Assisted', 'Manual Assisted', 'Autonomous'],
    ['Range', '110 km', '160 km', '180 km'],
    ['Best Use Case', 'Compact Indoor Mobility', 'Heavy Payload Logistics', 'Repeatable Autonomous Routes'],
];

const SpecsCompare: React.FC = () => {
    return (
        <section id="compare" style={{ background: 'var(--paper)', padding: '84px 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="label-tag">Compare Models</span>
                    <h2>Quick model comparison</h2>
                    <p>See the key operational differences at a glance before choosing your deployment fit.</p>
                </div>

                <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid var(--border)', background: 'white' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th className="spec-head">Specification</th>
                                <th className="spec-head">ATM 80</th>
                                <th className="spec-head">ATM 120</th>
                                <th className="spec-head">I-ATM</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row[0]}>
                                    {row.map((cell, idx) => (
                                        <td key={idx} className={idx === 0 ? 'spec-label' : 'spec-cell'}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SpecsCompare;

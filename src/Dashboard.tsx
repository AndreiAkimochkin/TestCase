import React from 'react';
import { graphs } from './graphConfig';

const Dashboard: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {graphs.sort((a, b) => a.position.order - b.position.order).map((graph) => (
                <div
                    key={graph.title}
                    style={{
                        width: `${graph.position.width * 100}px`,
                        height: `${graph.position.height * 100}px`,
                        border: '1px solid #ccc',
                        padding: '10px',
                        boxSizing: 'border-box',
                    }}
                >
                    <h3>{graph.title}</h3>
                    <p>Type: {graph.type}</p>
                    <p>Metrics: {graph.metrics.join(', ')}</p>
                    <p>Color Scheme: {graph.colorScheme.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;

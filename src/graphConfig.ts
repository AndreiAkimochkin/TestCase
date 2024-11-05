export interface GraphConfig {
    title: string;
    type: 'Linear' | 'Area' | 'Bar';
    colorScheme: string[];
    metrics: string[];
    position: {
        order: number; // Order of the graph on the dashboard
        width: number; // Width in columns
        height: number; // Height in rows
    };
}

export const graphs: GraphConfig[] = [
    {
        title: 'Sales Over Time',
        type: 'Linear',
        colorScheme: ['#FF5733', '#33FF57', '#3357FF'],
        metrics: ['sales'],
        position: {
            order: 1,
            width: 6,
            height: 4,
        },
    },
    {
        title: 'User Engagement',
        type: 'Bar',
        colorScheme: ['#FF33A1', '#33FFA1'],
        metrics: ['engagement'],
        position: {
            order: 2,
            width: 6,
            height: 4,
        },
    },
];

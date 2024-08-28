export const orgdatalocal = [
    {
        expanded: true,
        label: 'Sede',
        className: 'bg-indigo-500 text-white',
        style: { borderRadius: '12px' },
        children: [{
            expanded: true,
            type: 'person',
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                image: '/pv/images/avatar/kuka.png',
                name: 'Lucas "Kuka" Paiva',
                title: 'Pastor Líder'
            },
            children: [
                {
                    label: 'Gestão (Conselho Sede Local)',
                    className: 'bg-teal-500 text-white',
                    style: { borderRadius: '12px' }
                },
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-purple-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: '/pv/images/avatar/jesse.png',
                        name: 'Jessé Medeiros',
                        title: 'Pastor Auxiliar'
                    },
                    children: [
                        {
                            expanded: true,
                            label: 'Pastores Auxiliares',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' },
                            children: [{
                                expanded: true,
                                type: 'person',
                                className: 'bg-purple-500 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    image: '/pv/images/avatar/matheushenrique.png',
                                    name: 'Matheus Henrique',
                                    title: 'Pastor'
                                }
                            }, {
                                expanded: true,
                                type: 'person',
                                className: 'bg-purple-500 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    image: '/pv/images/avatar/lucaskramer.png',
                                    name: 'Lucas Kramer',
                                    title: 'Pastor'
                                }
                            }, {
                                expanded: true,
                                type: 'person',
                                className: 'bg-purple-500 text-white',
                                style: { borderRadius: '12px' },
                                data: {
                                    image: '/pv/images/avatar/vh.png',
                                    name: 'Victor "VH" Hugo',
                                    title: 'Pastor'
                                }
                            }]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' },
                            data: {
                                image: '/pv/images/avatar/bianchy.png',
                                name: 'Bianchy Gomes',
                                title: 'Líder de Voluntários'
                            }
                        }
                    ]
                }
            ]
        }]
    }

];

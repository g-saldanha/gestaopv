export const orgdataliderescomunidade = [
    {
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
                        label: 'Pastores Auxiliares',
                        className: 'bg-purple-500 text-white',
                        style: { borderRadius: '12px' }
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
                        },
                        children: [
                            {
                                label: 'Líderes de Departamento',
                                className: 'bg-teal-500 text-white',
                                style: { borderRadius: '12px' }
                            },
                            {
                                label: 'Líderes de Comunidades',
                                className: 'bg-teal-500 text-white',
                                style: { borderRadius: '12px' }
                            },
                            {
                                expanded: true,
                                label: 'Líderes de Culto',
                                className: 'bg-teal-500 text-white',
                                style: { borderRadius: '12px' },
                                children: [
                                    {
                                        expanded: true,
                                        label: 'Culto de Quarta',
                                        className: 'bg-teal-500 text-white',
                                        style: { borderRadius: '12px' },
                                        children: [
                                            {
                                                expanded: true,
                                                type: 'person',
                                                className: 'bg-indigo-500 text-white',
                                                style: { borderRadius: '12px' },
                                                data: {
                                                    image: '/pv/images/avatar/saldanha.png',
                                                    name: 'Gabriel Saldanha',
                                                    title: 'Líder de Culto'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        expanded: true,
                                        label: 'Culto de Domingo',
                                        className: 'bg-teal-500 text-white',
                                        style: { borderRadius: '12px' },
                                        children: [
                                            {
                                                label: 'Manhã',
                                                className: 'bg-teal-500 text-white',
                                                style: { borderRadius: '12px' }
                                            },
                                            {
                                                label: 'Noite',
                                                className: 'bg-teal-500 text-white',
                                                style: { borderRadius: '12px' }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

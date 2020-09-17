export default [
    {
        path: `/test`,
        name: 'test',
        meta: {
            title: 'test'
        },
        component: () => import('@/views/test')
    }
]

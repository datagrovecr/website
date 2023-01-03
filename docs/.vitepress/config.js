import { defineConfig } from 'vitepress'

export default defineConfig({
    description: 'Software That Does Good',
    title: 'Datagrove Costa Rica',
    base: '/',

    themeConfig: {
        // Type is `DefaultTheme.Config`
        logo: '/bright_green_circle.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about/' },
            { 
                text: 'Join Us', 
                items: [
                    { text: "Working for Datagrove Costa Rica", link: '/jobs/'},
                    { text: "Full-Time Positions", link: '/jobs/#full-time' },
                    { text: "Part-Time Positions", link: '/jobs/#part-time' },
                    // { text: "Application", link: '/jobs/#application'}
                ],
            },
        ],
        sidebar: [
        ]
    },
    // build: {
    //     rollupOptions: {
    //         external: []
    //     }
    // }

})
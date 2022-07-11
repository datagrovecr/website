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
                    { text: "Internships", link: '/jobs/' },
                    // { text: "Full-Time Positions", link: '/jobs/' }
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
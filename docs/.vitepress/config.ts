import { defineConfig } from 'vitepress'

export default defineConfig({

    title: 'Datagrove Costa Rica',
    base: '/',
    themeConfig: {
        // Type is `DefaultTheme.Config`
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About Us', link: '/about/' },
            { text: 'Internships', link: '/jobs/' },
        ],
        sidebar: [
        ]
    },
    build: {
        rollupOptions: {
            
        }
    }

})
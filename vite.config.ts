import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { tanstackRouter } from '@tanstack/router-plugin/vite'


// https://vite.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/api/leetcode': {
                target: 'https://leetcode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/leetcode/, '/graphql')
            },

            //'/api/github': {
            //    target: 'https://github-contributions-api.jogruber.de/v4/CollegeRideOut?',
            //    changeOrigin: true,
            //}
        }
    },
    plugins: [

        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react()

    ],
})

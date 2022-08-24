import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import AutoPrefixer from 'autoprefixer'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    plugins: [
        AutoImport({
            imports: [
                {
                    'axios': [
                        ['default', 'axios']
                    ],
                    'dayjs': [
                        ['default', 'dayjs']
                        ],
                    'js-cookie': [
                        ['default', 'jscookie']
                    ]
                }
            ]
        }),
        svelte({
            emitCss: false,
            compilerOptions: {
                dev: !production,
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [AutoPrefixer()]
        }
    },
    server: { 
        port: 2020,
    }
})

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import postcssPresetEnv from 'postcss-preset-env'

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
        svelte(),
    ],
    css: {
        postcss: {
            plugins: [postcssPresetEnv({stage: 2})]
        }
    },
    server: { 
        port: 2020,
    }
})

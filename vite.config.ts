import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    base: '/vue3-gh-workflow-example/',
    plugins: [vue()],
})

import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { resolve } from 'path'

export const resolvePath = (dir: string) => resolve(__dirname, '.', dir)

const config: UserConfig = {
  plugins: [vue(), ssr()],
  resolve: {
    alias: {
      '@': resolvePath('src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
}

export default config

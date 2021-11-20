import lessToJS from 'less-vars-to-js';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import { ViteAliases } from 'vite-aliases';
import Inspect from 'vite-plugin-inspect';
import reactJsx from 'vite-react-jsx';
import { resolve, join } from 'path';
import fs from 'fs';

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(
  fs.readFileSync(
    pathResolver(join(__dirname, 'config', 'variables.less')),
    'utf8',
  ),
);

export default defineConfig({
  base: './',
  plugins: [
    Inspect(),
    ViteAliases({}),
    reactJsx(),
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => {
            if (name === 'col' || name === 'row') {
              return 'antd/lib/style/css.js';
            }
            return `antd/es/${name}/style/css.js`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  server: {
    port: 8706,
    open: true,
  },
});

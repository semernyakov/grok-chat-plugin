import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    sourcemap: 'inline',
    format: 'cjs',
    exports: 'default',
  },
  external: ['obsidian', 'fs', 'path', 'electron'],
  plugins: [
    typescript(),
    nodeResolve({ browser: true }),
    commonjs(),
    postcss({
      extensions: ['.css'],
      extract: false,
      modules: false,
    }),
  ],
};

import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const isProd = process.env.BUILD === 'production';

export default {
    input: 'src/main.ts',
    output: {
        dir: 'dist',
        sourcemap: 'inline',
        format: 'cjs',
        exports: 'default'
    },
    external: ['obsidian'],
    plugins: [
        typescript(),
        nodeResolve({ 
            browser: true,
            preferBuiltins: true
        }),
        commonjs({
            include: 'node_modules/**',
            extensions: ['.js', '.ts']
        }),
        json()
    ]
}; 
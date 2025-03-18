const esbuild = require('esbuild');
const { copy } = require('esbuild-plugin-copy');
const process = require('process');

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
If you want to view the source, please visit the github repository of this plugin
https://github.com/semernyakov/groq-chat-plugin
*/
`;

const isProd = process.argv[2] === 'production';

const ctx = esbuild
  .build({
    banner: {
      js: banner,
    },
    entryPoints: ['src/main.ts'],
    bundle: true,
    external: ['obsidian', 'electron'],
    format: 'cjs',
    target: 'es2018',
    logLevel: 'info',
    sourcemap: isProd ? false : 'inline',
    minify: isProd,
    treeShaking: true,
    outfile: 'dist/main.js',
    plugins: [
      copy({
        assets: [
          { from: 'manifest.json', to: 'manifest.json' },
          { from: 'styles.css', to: 'styles.css' },
        ],
      }),
    ],
  })
  .catch(() => process.exit(1));

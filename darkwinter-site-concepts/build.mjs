import { build } from 'esbuild';
const C = process.argv[2];
await build({ entryPoints: [C + '/src/concepts.js'], outfile: C + '/concepts.js', bundle: true, format: 'esm', minify: true, target: 'es2022', legalComments: 'none', logLevel: 'warning' });
console.log('built');

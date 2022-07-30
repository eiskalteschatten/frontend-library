import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');
const tsconfg = require('./tsconfig.json');

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: tsconfg.compilerOptions.outDir,
        format: 'esm',
        sourcemap: true,
      },
    ],
    preserveModulesRoot: true,
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: [
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
  {
    input: './dist/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];

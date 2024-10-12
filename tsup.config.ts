import type { Options } from 'tsup';

export const tsup: Options = {
  splitting: false,
  clean: true,
  dts: true,
  format: [ 'esm', ],
  minify: false,
  bundle: false,
  skipNodeModulesBundle: true,
  target: 'esnext',
  outDir: 'dist',
  entry: [ 'src/**/*.ts', ],
};
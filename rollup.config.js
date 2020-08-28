import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [resolve()],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
  ],
};

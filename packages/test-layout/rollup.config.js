export default {
  input: './index.js',
  output: {
      file: 'dist/test-layout.js',
      format: 'es',
      sourcemap: true
  },
  external: ['react']
};
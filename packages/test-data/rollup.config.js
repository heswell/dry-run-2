export default {
  input: './index.js',
  output: {
      file: 'dist/test-data.js',
      format: 'es',
      sourcemap: true
  },
  external: ['react']
};
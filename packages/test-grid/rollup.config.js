export default {
  input: './index.js',
  output: {
      file: 'dist/test-grid.js', 
      format: 'es',
      sourcemap: true
  },
  external: ['react']
};
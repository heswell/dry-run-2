import postcss from 'rollup-plugin-postcss'

export default {
  input: 'generated/index.js',
  output: {
      file: 'dist/test-es6-component.js',
      format: 'es',
      sourcemap: true
  },
  external: ['react'],
  plugins : [
    postcss({
      sourceMap: true, // true, "inline" or false
      extract : 'dist/style.css'
    })
  ]
};
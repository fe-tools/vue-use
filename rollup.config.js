import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'lib',
      format: 'esm',
      chunkFileNames: '[name].js',
      globals: {
        '@vue/composition-api': 'vueCompositionApi'
      }
    }
  ],
  external: [ '@vue/composition-api' ],
  plugins: [
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser({
      sourcemap: false
    })
  ]
}

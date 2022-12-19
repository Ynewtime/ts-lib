import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // entries: ['./src/index'],
  clean: true,
  rollup: {
    // emitCJS: true,
    // inlineDependencies: true,
    // esbuild: {
    //   minify: true,
    // },
  },
  // failOnWarn: false, // for testing
})

import preserveDirectives from "rollup-plugin-preserve-directives";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
      preserveModules: true,
    },
  ],
  plugins: [typescript(), preserveDirectives()],
  external: ["react", "react-dom"],
};

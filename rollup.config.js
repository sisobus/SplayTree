import { uglify } from "rollup-plugin-uglify";
import { eslint } from "rollup-plugin-eslint";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "index.js",
    output: {
      file: pkg.main,
      format: "cjs",
      name: "splaytree"
    },
    plugins: [
      eslint(),
      babel(),
      uglify()
    ]
  },
  {
    input: "index.js",
    output: {
      file: pkg.browser,
      format: "iife",
      name: "splaytree"
    },
    plugins: [
      eslint(),
      babel(),
      uglify()
    ]
  }
];
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import addShebang from "rollup-plugin-add-shebang";
import globals from "rollup-plugin-node-globals";
import json from "@rollup/plugin-json";

import glob from "glob";
import path from "node:path";

function getInputsFromGlob(pattern) {
  return glob.sync(pattern).reduce((inputs, file) => {
    const name = path.basename(file, path.extname(file));
    inputs[name] = file;
    return inputs;
  }, {});
}

const tsFilesInLib = getInputsFromGlob("src/lib/*.ts");

const basePlugins = [
  typescript({ outputToFilesystem: false, downlevelIteration: true }),
  commonjs(),
  json(),
  peerDepsExternal(),
  // builtins(),
  globals(),
  resolve(),
  terser(),
];
const baseExternal = [
  "fs",
  "path",
  "child_process",
  "node:module",
  "dotenv",
  "axios",
];

export default [
  {
    input: tsFilesInLib,
    output: {
      dir: "../../dist/tokens",
      format: "es",
    },
    plugins: [
      ...basePlugins,
      addShebang({
        include: "../../dist/lib/sync_figma_to_tokens.js",
      }),
      addShebang({
        include: "../../dist/lib/sync_tokens_to_figma.js",
      }),
    ],
    external: baseExternal,
  },
];

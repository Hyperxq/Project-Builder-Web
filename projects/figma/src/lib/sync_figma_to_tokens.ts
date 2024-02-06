#!/usr/bin/env node
import 'dotenv/config';

import FigmaApi from './figma_api';

import {green} from './utils';
import {tokenFilesFromLocalVariables} from './token_export';
import * as fs from 'fs';

/**
 * Usage:
 *
 * // Defaults to writing to the tokens_new directory
 * npm run sync-figma-to-tokens
 *
 * // Writes to the specified directory
 * npm run sync-figma-to-tokens -- --output directory_name
 */

async function main() {
  if (!process.env.PERSONAL_ACCESS_TOKEN || !process.env.FILE_KEY) {
    throw new Error(
      'PERSONAL_ACCESS_TOKEN and FILE_KEY environment variables are required',
    );
  }
  const fileKey = process.env.FILE_KEY;

  const api = new FigmaApi(process.env.PERSONAL_ACCESS_TOKEN);
  const localVariables = await api.getLocalVariables(fileKey);

  const tokensFiles = tokenFilesFromLocalVariables(localVariables);

  let outputDir = 'tokens_new';
  const outputArgIdx = process.argv.indexOf('--output');
  if (outputArgIdx !== -1) {
    outputDir = process.argv[outputArgIdx + 1];
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  console.log('hello world!');

  Object.entries(tokensFiles).forEach(([fileName, fileContent]) => {
    fs.writeFileSync(
      `${outputDir}/${fileName}`,
      JSON.stringify(fileContent, null, 2),
    );
    console.log(`Wrote ${fileName}`);
  });

  console.log(
    green(`✅ Tokens files have been written to the ${outputDir} directory`),
  );
}

main();

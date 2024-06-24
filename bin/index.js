#! /usr/bin/env node 

import {Command} from "commander";
import { createExpressApp } from "./create/createExpress.js";

const program = new Command();

program.name("express-cli")
    .description("An express CLI utility")
    .version("0.0.1");

program.command("create")
    .description("Create a express template server")
    .option('-p, --port <char>', 'your server port','3001')
    .option('-m, --esm','Initialize your node project with Ecmascript modules')
    .action(async (options) => {
        await createExpressApp(options)
    })


program.parse();
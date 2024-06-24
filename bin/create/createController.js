import * as fs from 'node:fs/promises';
import ora from "ora";

export async function createController() {
    const spinner = ora("Creating controller folder").start();
    await fs.mkdir('src/controllers');
    spinner.succeed("Controller folder successfuly created").succeed();
}
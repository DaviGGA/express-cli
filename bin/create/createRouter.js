import * as fs from 'node:fs/promises';
import ora from "ora";

export async function createRouter() {
    const spinner = ora("Creating routes folder...").start();
    await fs.mkdir("src/routes")
    spinner.succeed("Routes folder successfuly created");
}
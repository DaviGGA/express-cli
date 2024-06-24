import * as fs from 'node:fs/promises';
import ora from "ora";


export async function createService() {
    const spinner = ora("Creating service folder").start();
    await fs.mkdir("src/services");
    spinner.succeed("Services folder succcessfully created");
}
import * as fs from 'node:fs/promises';
import ora from 'ora';


export async function createSource() {
    const spinner = ora("Creating source folder").start();
    try {
        await fs.mkdir("src")
        spinner.succeed("Source folder successfully created");
        return true  
    } catch (error) {
        if(error.code == "EEXIST") {
            spinner.fail("Creating source folder failed: Directory source alrealdy exists.")
        } else {
            spinner.fail("Creating source folder failed: An unexpected error has occurred.");
        }
        return false
    }
}
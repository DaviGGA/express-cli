import {exec} from 'node:child_process'
import util from "node:util"
import ora from 'ora';

export function installExpress(esm) {
    const npmInitSpinner = ora("Initializing a node project..").start()
    return new Promise( async (resolve) => {
         exec(`npm init ${esm ? "es6" : ""} -y`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            npmInitSpinner.succeed("Node project initialized.");
            
            const expressSpinner = ora("Installing express..").start()
            
            exec('npm i express', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }

                expressSpinner.succeed("Express successfully installed");
            })
         })

     })
 }
import { cwd } from 'node:process';
import path from 'node:path';

export function getPath(pathName) {
    if (pathName.charAt(0) == '/') {
        pathName = pathName.replace('/', '');
    }

    return cwd().toString().split(path.sep).join('/') + `/${pathName}`;
}
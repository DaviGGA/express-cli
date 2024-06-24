import { createIndex } from "./createIndex.js";
import { createSource } from "./createSource.js";
import { createController } from "./createController.js";
import { createRouter } from "./createRouter.js";
import { createService } from "./createService.js";
import { installExpress } from "./installExpress.js";

export async function createExpressApp(options) {
    const sourceCreated = await createSource();
    if(!sourceCreated) return;
    
    await createIndex(options);
    await createController();
    await createRouter();
    await createService();     
    await installExpress(options.esm);
}


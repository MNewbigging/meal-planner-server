import { Application } from "./imports.ts";
import { oakCors } from "./imports.ts";

import router from "./routes.ts";

const app = new Application();
app.use(oakCors()); // Enables CORS for all routes
app.use(router.routes());

console.log("listening on port 3030");
await app.listen({ port: 3030 });

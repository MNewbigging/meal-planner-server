import { Application, oakCors, PORT } from "./imports.ts";

import router from "./routes.ts";

const app = new Application();
app.use(oakCors()); // Enables CORS for all routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`listening on port ${PORT}`);
await app.listen({ port: PORT });

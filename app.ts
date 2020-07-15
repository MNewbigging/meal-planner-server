import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import router from "./routes.ts";

const app = new Application();
app.use(oakCors()); // Enables CORS for all routes
app.use(router.routes());

console.log("listening on port 3030");
await app.listen({ port: 3030 });

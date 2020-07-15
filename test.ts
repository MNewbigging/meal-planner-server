import { serve } from "https://deno.land/std@0.61.0/http/server.ts";

const server = serve({ port: 3000 });
console.log("listening on port 3000");

for await (const req of server) {
  req.respond({
    body: "Oh herro!",
  });
}

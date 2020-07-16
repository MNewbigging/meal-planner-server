import { Application, Router } from "https://deno.land/x/oak/mod.ts";
export { Application, Router };

import { oakCors } from "https://deno.land/x/cors/mod.ts";
export { oakCors };

import { MongoClient, init } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
export { MongoClient, init };

// This should really be in a 'constants' file
const PORT: number = 3030;
export { PORT };

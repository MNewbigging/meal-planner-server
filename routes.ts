import { Router } from "./imports.ts";

const router = new Router();
router.post("/", (ctx) => {
  ctx.response.body = "oh herro";
});

export default router;

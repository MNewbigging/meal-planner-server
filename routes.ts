import { Router, send } from "https://deno.land/x/oak/mod.ts";
import { getLogin } from "./loginController.ts";

const router = new Router();
router.post("/", (ctx) => {
  ctx.response.body = "oh herro";
});

export default router;

import { Router } from "./imports.ts";
import { login } from "./controllers/login.ts";
import { viewAllUsers } from "./controllers/viewAllData.ts";

const router = new Router();
router.post("/", (ctx) => {
  ctx.response.body = "oh herro";
});

router.post("/viewAllUsers", viewAllUsers);

router.post("/login", login);

export default router;

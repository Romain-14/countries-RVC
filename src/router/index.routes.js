import { Router } from "express";
import { home_view, country_view, admin_view, admin_add_country_view } from "../controllers/views.js";

const router = Router();

router.get("/", home_view);
router.get("/country/:id", country_view);

router.get("/admin", admin_view);
router.get("/admin/add", admin_add_country_view);

export default router;

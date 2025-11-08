import { pool } from "../config/pool.js";
import { Router } from "express";
import { ProductoController } from "../controllers/productoController.js";
import { ServicesProducto } from "../services/productoService.js";
import { ProductoRepository } from "../repositories/productoRepo.js";
import { requireRole } from "../middleware/authRol.js";
import { authGuard } from "../middleware/authGuard.js";
import { jwtService } from "../security/index.js";
const router = Router();
const productoRepo = new ProductoRepository(pool);
const productoService = new ServicesProducto(productoRepo);
const productoController = new ProductoController(productoService);

const ROLES = { ADMIN: 1, USER: 2 };

//se crea el middleware real pasasndo la instancia configurada
const guard = authGuard(jwtService);

//redes publicas producto protegidas
router.get("/", guard, productoController.list);
router.get("/:id", guard, productoController.getById);

/**
 * Rutas protegidas (solo ADMIN)
 * POST /productos
 * PATCH /productos/:id
 * DELETE /productos/:id
 */
router.post("/", guard, requireRole(ROLES.ADMIN), productoController.create);
router.patch("/:id", guard, requireRole(ROLES.ADMIN), productoController.update);
router.delete("/:id", guard, requireRole(ROLES.ADMIN), productoController.remove);

export const productoRouter = router;

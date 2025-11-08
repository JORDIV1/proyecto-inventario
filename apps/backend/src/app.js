import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./routes/auth.routes.js";
import "dotenv/config";
import { productoRouter } from "./routes/producto.routes.js";
import { categoriaRouter } from "./routes/categoria.routes.js";
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:5173",
    credentials: true, //permite envio de cookies cross-site
  }),
);
app.use("/auth", authRouter);
app.use("/productos", productoRouter);
app.use("/categorias", categoriaRouter);
export default app;

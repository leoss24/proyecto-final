import { Router } from "express";
import { auhRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", auhRequired, getTasks);

router.get("/tasks/:id", auhRequired, getTask);

router.post("/tasks", auhRequired, createTask);

router.delete("/tasks", auhRequired, deleteTask);

router.put("/tasks/:id", auhRequired, updateTask);

export default router;

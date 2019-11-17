import { Router } from "express";
import expenseController from "./controller/expenseController";

const routes = Router();

routes.get("/", function(req, res) {
  res.status(200).send("server status: online");
});

routes.get("/despesa/:area", expenseController.getTotalExpenses);

export default routes;

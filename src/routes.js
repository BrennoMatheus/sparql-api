import { Router } from "express";
import DespesaController from "./controller/DespesaController";

const routes = Router();

routes.get("/", function(req, res) {
  res.status(200).send("server status: online");
});

routes.get("/despesa", DespesaController.index);

export default routes;

import express, { Express } from "express";
import { SimulationService } from "./services/simulationService";

export function createApp() {
  const simulationService = new SimulationService();

  const app: Express = express();
  app.use(express.json());
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return { app };
}

import express, { Express } from "express";
import { SimulationService } from "./services/simulationService";
import { EventService } from "./services/eventService";

export function createApp() {
  const simulationService = new SimulationService();
  const eventService = new EventService(simulationService);

  const app: Express = express();
  app.use(express.json());
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return { app, eventService };
}

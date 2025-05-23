import express, { Express } from "express";
import { SimulationService } from "./services/simulationService";
import { EventService } from "./services/eventService";
import { EventController } from "./controllers/clientStateController";

export function createApp() {
  const simulationService = new SimulationService();
  const eventService = new EventService(simulationService);
  const eventController = new EventController(eventService);

  const app: Express = express();
  app.use(express.json());
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });
  app.get("/client/state", eventController.getState.bind(eventController));

  return { app, eventService };
}

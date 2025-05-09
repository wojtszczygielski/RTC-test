import express, { Express } from "express";

export function createApp() {
  const app: Express = express();
  app.use(express.json());
  app.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  return { app };
}

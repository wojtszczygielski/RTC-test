import { createApp } from "./app";
import { getConfig } from "./config";
import dotenv from "dotenv";
import { logger } from "./utils/logger";

dotenv.config();

const config = getConfig();
const { app, eventService } = createApp();

const server = app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
  eventService.startPolling();
});

const gracefulShutdown = (signal: string) => {
  logger.info(`${signal} received, shutting down gracefully`);
  eventService.stopPolling();
  server.close(() => {
    logger.info("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

export default server;

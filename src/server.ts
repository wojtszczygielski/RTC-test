import { createApp } from "./app";
import { getConfig } from "./config";
import dotenv from "dotenv";

dotenv.config();

const config = getConfig();
const { app, eventService } = createApp();

const server = app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
  eventService.startPolling();
});

export default server;

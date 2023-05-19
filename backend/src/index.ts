import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import {
  handleCommonHttpError,
  handleRequestValidationError,
  handleRouteNotFound,
  handleServerException,
} from "./common/errors/index";
import { passportConfiguration } from "./common/lib/passports";
import passport from "passport";
import SocketServer from "./socketServer";
import routes from "./routes";
import { Server } from "socket.io";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
passportConfiguration(passport);
app.use(() => {
  passport.initialize();
});

const handleError = (app) => {
  app.use(handleRouteNotFound);
  app.use(handleRequestValidationError);
  app.use(handleCommonHttpError);
  app.use(handleServerException);
};
handleError(app);

const http = require("http").createServer(app);

const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  SocketServer(socket);
});

const port = 4044;
http.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

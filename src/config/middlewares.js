import { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

export const addMiddlewares = (app) => {
  app.use(helmet());
  app.use(json());
  app.use(cors());
  app.use(morgan("combined"));
};

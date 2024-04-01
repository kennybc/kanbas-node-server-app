import "dotenv/config";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);

UserRoutes(app);

app.listen(4000);

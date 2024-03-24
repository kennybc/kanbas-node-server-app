import express from "express";
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

const app = express();
app.use(cors());
app.use(express.json());

Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);

app.listen(4000);

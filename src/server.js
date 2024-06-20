import express from "express";
import cors from "cors";
import pino from "pino-http";
import env from "./utils/env.js";
import contactRouter from "./routers/contacts.js";
import notFoundHandler from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const port = env("PORT", "3000");

const setupServer = ()=> {
    const app = express();

    const logger = pino({
        transport: {
            target: "pino-pretty"
        }
    });

    app.use(logger);
    app.use(cors());
    
    app.use("/contacts", contactRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);
    app.listen(port, () => console.log(`Server running on ${port} PORT`));
};

export default setupServer;

import express from "express";
import cors from "cors";
import pino from "pino-http";
import env from "./utils/env.js";
import { getContact, getContactById } from "./services/contact-service.js";

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
    
    app.get('/contacts', async(req, res) => {
        const data = await getContact();
        res.json({
            status: 200,
            message: "Successfully found contacts!",
            data,
        });
    });
    
    app.get("/contacts/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const data = await getContactById(id);

            if (!data) {
                return res.status(404).json({
                    message: `Contact with id=${id} not found`
                });
            }
            res.json({
                status: 200,
                message: `Successfully found contact id=${id}!`,
                data,
            });  
        } catch (error) {
            if (error.message.includes("Cast to ObjectID failed")) {
                error.status = 404;
            }
            const { status = 500 } = error;
            res.status(status).json({
                message: error.message
            });
        }
    });

    app.use((req, res) => {
        res.status(404).json({
            message: "Not Found"
        });
    });

    app.listen(port, () => console.log(`Server running on ${port} PORT`));
};

export default setupServer;
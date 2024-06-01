import { Hono } from 'hono'
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { showRoutes } from "hono/dev"

import { summarize } from "./gemini"

const app = new Hono()

app.use(cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT",],
    allowHeaders: ["*"],
    maxAge: 86400,
}))
app.use(logger())

app.post('/smz', async (c) => {
    const { code } = await c.req.json();

    const summary = await summarize(code, c.env.GEMINI_API_KEY);

    return c.json({ summary });
})

showRoutes(app)

export default app
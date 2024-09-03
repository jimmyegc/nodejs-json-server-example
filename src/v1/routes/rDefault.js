import { Router } from 'express'

const routes = Router()

routes.get("/", (req, res) => res.send({ status: "OK", message: "Hello!" }));
routes.get("*", (req, res) => { res.send({ message: "404 not found" }) });

export default routes 
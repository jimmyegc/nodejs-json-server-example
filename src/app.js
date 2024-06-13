import { router, create, defaults } from "json-server";

const server = create();
const router = router("./data/db.json");
const middlewares = defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.port(port);




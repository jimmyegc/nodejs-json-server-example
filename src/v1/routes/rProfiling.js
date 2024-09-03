import { Router } from 'express'
import cProfiling from '../../controllers/cProfiling.js'

const routes = Router()

routes  
  .get("/", cProfiling.getAll)
  .get("/:id", cProfiling.getOne)
  .post("/", cProfiling.create)
  .put("/:id", cProfiling.update)
  .delete("/:id", cProfiling.delete);
  
  export default routes;
  
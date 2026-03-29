import express from "express"
import * as controller from "../controllers/treeContoller.js"

const router = express.Router()

router.get("/tree", controller.getTree)
router.post("/tree", controller.createTree)

export default router

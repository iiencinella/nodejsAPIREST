import { Router } from "express"
import { getPong } from "../controllers/index.controllers.js"

const router = Router()

router.get('/ping', getPong)

export default router
import express from "express"
import usersController from "../controllers/users.controller.js" 

const router = express.Router()

router.get("/users", usersController.getAllUsers)
router.post("/users", usersController.postUsers)
router.patch("/users/update/:id", usersController.patchUsers)

export default router
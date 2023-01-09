import { Router } from "express";
import { getUsersPublicController, getUserPublicController } from "../../controllers/user";

export const userRouterPublic = Router();

userRouterPublic.get("/", getUsersPublicController);
userRouterPublic.get("/:id_user", getUserPublicController);

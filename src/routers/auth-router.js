import { Router } from "express";

import ctrlWrapper from "../utils/ctrlWrapper.js";
import validateBody from "../utils/validateBody.js";

import {userSignupSchema, userSigninSchema} from "../validation/user-schemas.js";

import { signupController, signinController, refreshController, signoutController } from "../controllers/auth-controllers.js";

import { requestResetEmailSchema, resetPasswordSchema } from "../validation/auth.js";
import { requestResetEmailController, resetPasswordController } from "../controllers/auth-controllers.js";

const authRouter = Router();

authRouter.post("/register", validateBody(userSignupSchema), ctrlWrapper(signupController));

authRouter.post("/login", validateBody(userSigninSchema), ctrlWrapper(signinController));

authRouter.post("/refresh", ctrlWrapper(refreshController));

authRouter.post("/logout", ctrlWrapper(signoutController));

authRouter.post("/send-reset-email",validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

authRouter.post(
  "/reset-password", validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default authRouter;  
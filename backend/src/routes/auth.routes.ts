import { Router } from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller";
import { body } from "express-validator";
import { protect } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
  ],
  validate,
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty(),
  ],
  validate,
  loginUser
);

router.get("/me", protect, (req, res) => {
  res.json({
    id: req.user?.id,
    role: req.user?.role,
  });
});


export default router;



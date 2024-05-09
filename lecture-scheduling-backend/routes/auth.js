import { Router } from "express";
import { findOne, create } from "../models/User";
const router = Router();
import { genSalt, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser";
import { body, validationResult } from "express-validator";
import { useId } from "react";

const JWT_SECRET = "%This%is%USed%For%Security%"; // { signture }for verifying signture

//--{ ROUTER }------1------------------------creating a user using POST "/api/auth/createuser"   Doesn't required Authentication--------------------------------------------------
router.post(
  "/createuser",
  [
    body("name", "enter valid name").isLength({ min: 3 }),
    body("email", "enter valid email ID").isEmail(),
    body("password", "password must be aleast 5 charaters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success=false
    //If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //check whether there is any user with same email is exits already ?????
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,error: "Sorry a user with this email is already exits" });
      }
      const salt = await genSalt(10);
      secPass = await hash(req.body.password, salt);

      //for creating a user
      user = await create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //creting authentication token
      const data = {
        user: {
          id: user.id,
        },
      };
      success=true
      const authtoken = sign(data, JWT_SECRET);
      res.json({success, authtoken });

    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


export default router;

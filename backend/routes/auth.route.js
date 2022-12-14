const { Router } = require("express");
const UserModel = require("../models/Usermodel");
const { check, body, validationResult } = require("express-validator");

const authRouter = Router();

authRouter.post(
  "/signup",
  body("first_name")
    .exists()
    .withMessage("first name required")
    .isLength({ min: 1 })
    .withMessage("first name not valid")
    .isString()
    .withMessage("only string allowed"),
  body("last_name")
    .exists()
    .withMessage("last name required")
    .isLength({ min: 1 })
    .withMessage("last name not valid")
    .isString()
    .withMessage("only string allowed"),
  body("email")
    .exists()
    .withMessage("email required")
    .isLength({ min: 1 })
    .withMessage("email not valid")
    .isString()
    .withMessage("only string allowed"),
  body("password")
    .exists()
    .withMessage("password required")
    .isLength({ min: 1 })
    .withMessage("password not valid")
    .isString()
    .withMessage("only string allowed"),
  check("areYou", "areYou required")
    .notEmpty()
    .withMessage("only string allowed"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const user = await new UserModel(req.body);
      user.save((err, data) => {
        if (err) {
          res.status(404).send({ message: "Signup error" });
        } else {
          res.status(201).send({ message: "Signup successful", data });
        }
      });
    }
  }
);

authRouter.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const isUser = await UserModel.find(req.body);
    if (isUser.length >= 1) {
      let {
        first_name,
        last_name,
        email,
        password,
        areYou,
        status,
        isCreditScore,
        isVerified,
      } = isUser[0];

      let payload = {
        first_name,
        last_name,
        email,
        password,
        areYou,
        status,
        isCreditScore,
        isVerified,
        id: isUser[0]._id,
      };
      res.send({ message: "Login successful!", payload });
    } else {
      res.send({ message: "Wrong credentials" });
    }
  } else {
    res.send({ message: "Wrong credentials" });
  }
});

module.exports = authRouter;

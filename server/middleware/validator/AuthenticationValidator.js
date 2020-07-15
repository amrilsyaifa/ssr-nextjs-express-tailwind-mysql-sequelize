const { check, validationResult } = require("express-validator");

const validateAuthenticationWithEmail = [
  check("user")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("user must be email address"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  // .matches(/\d/)
  // .withMessage("must contain a number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).send({
        status: "error",
        messages: "error validation",
        data: errors.array(),
      });
    next();
  },
];

const validateAuthenticationWithPhone = [
  check("user")
    .not()
    .isEmpty()
    .isDecimal()
    .withMessage("user must be phone number")
    .isLength({ min: 11 })
    .withMessage("must be at least 11 number long"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).send({
        status: "error",
        messages: "error validation",
        data: errors.array(),
      });
    next();
  },
];

const validateAuthenticationWithUsername = [
  //   check("user").not().isEmpty(),
  check("user")
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).send({
        status: "error",
        messages: "error validation",
        data: errors.array(),
      });
    next();
  },
];

const validateAuthenticationRegister = [
  check("username")
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  check("email").not().isEmpty().isEmail().withMessage("must be email address"),
  check("phone_number")
    .not()
    .isEmpty()
    .isDecimal()
    .withMessage("must be phone number")
    .isLength({ min: 11 })
    .withMessage("must be at least 11 number long"),
  check("id_card_number")
    .isDecimal()
    .withMessage("must be number")
    .isLength({ min: 11 })
    .withMessage("must be at least 11 number long"),
  check("full_name")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  check("address")
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage("must be at least 8 chars long"),
  check("latitude").not().isEmpty(),
  check("longitude").not().isEmpty(),
  check("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).send({
        status: "error",
        messages: "error validation",
        data: errors.array(),
      });
    next();
  },
];

module.exports = {
  validateAuthenticationWithEmail,
  validateAuthenticationWithPhone,
  validateAuthenticationWithUsername,
  validateAuthenticationRegister,
};

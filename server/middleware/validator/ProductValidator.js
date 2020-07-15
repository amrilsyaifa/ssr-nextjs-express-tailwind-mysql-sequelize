const { check, validationResult } = require("express-validator");

const validateCreateProduct = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("name not be empty")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long"),
  check("product_code")
    .not()
    .isEmpty()
    .withMessage("product code not be empty")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars long"),
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

const validateUpdateProduct = [
  check("id")
    .not()
    .isEmpty()
    .withMessage("id not be empty")
    .isDecimal()
    .withMessage("must be number"),
  check("name")
    .not()
    .isEmpty()
    .withMessage("name not be empty")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long"),
  check("product_code")
    .not()
    .isEmpty()
    .withMessage("product code not be empty")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars long"),
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

const validateDeleteProduct = [
  check("id")
    .not()
    .isEmpty()
    .withMessage("id not be empty")
    .isDecimal()
    .withMessage("must be number"),
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
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
};

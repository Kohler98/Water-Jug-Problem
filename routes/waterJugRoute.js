const { Router } = require("express");
const waterJugResponse = require("../controllers/waterJugController");
const { fieldValid } = require("../middlewares/fieldValid");
const { check } = require("express-validator");

const router = Router()

router.post("/",[
    check('bucketX').isInt().withMessage('Must be an Integer'),
    check('bucketY').isInt().withMessage('Must be an Integer'),
    check('amountWantedZ').isInt().withMessage('Must be an Integer'),
    check('bucketX').isInt({ min: 1 }).withMessage('Must be greater than 0'),
    check('bucketY').isInt({ min: 1 }).withMessage('Must be greater than 0'),
    check('amountWantedZ').isInt({ min: 1 }).withMessage('Must be greater than 0'),
    fieldValid
],waterJugResponse);

module.exports = router
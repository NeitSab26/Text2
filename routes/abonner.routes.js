const abonner= require('../controllers/abonner.controller')
const router = require("express").Router();

router.get("/",abonner.getAboById);
router.post("/",abonner.postAboById);
router.delete("/",abonner.delAbo);

module.exports = router;
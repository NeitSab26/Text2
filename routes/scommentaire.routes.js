const scommentaire= require('../controllers/souscommentaire.controller')
const router = require("express").Router();

router.get("/",scommentaire.getSComByIdCom);
router.post("/",scommentaire.createSCommentaire);
router.delete("/",scommentaire.delSComm);
router.put("/",scommentaire.putSComm);

module.exports = router;
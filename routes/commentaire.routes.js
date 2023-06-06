const commentaire= require('../controllers/commentaire.controller')
const router = require("express").Router();

router.get("/",commentaire.getCommsByIdPost);
router.get("/all",commentaire.getCommsPost);
router.post("/",commentaire.createCommentaire);
router.delete("/",commentaire.delComm);
router.put("/",commentaire.putComm);

module.exports = router;
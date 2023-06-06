const liker= require('../controllers/like.controller')
const router = require("express").Router();

router.post("/",liker.createLike);
router.get("/",liker.getLike);

module.exports = router;
const post= require('../controllers/post.controller')
const router = require("express").Router();

router.get("/",post.getAllPost)
router.post("/",post.postPost)
router.get("/idUti",post.getAllPostByIdUti)
router.delete("/",post.delPost)
router.put("/",post.putPost)



module.exports = router;
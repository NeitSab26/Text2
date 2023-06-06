const message= require('../controllers/message.controller')
const router = require("express").Router();

router.get("/",message.getConversation)
router.post("/",message.postMessage)
router.delete("/",message.delMessage)
router.put("/",message.putMessage)



module.exports = router;
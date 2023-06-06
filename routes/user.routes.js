const userController = require("../controllers/user.controller");
const authController = require('../controllers/auth.controller');
const router = require("express").Router();


//authentification :
router.post("/login",authController.authUser);
router.post("/",authController.createUser);
router.get("/logout",authController.logoutUser);
router.post("/");
router.delete("/",authController.delUser);

//user
router.put("/",userController.putUser);
router.put("/pseudo",userController.putUserPseudo);
router.get("/", userController.getAllUsers);
router.get("/allPseudo", userController.getUsersPseudo);
router.get("/id",userController.getUserById);


module.exports = router;
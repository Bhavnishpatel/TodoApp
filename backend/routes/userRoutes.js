const router=require("express").Router();
const { signUp, login, checkAuth } = require("../controllers/userController");



router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/checkAuth").get(checkAuth);



module.exports=router;
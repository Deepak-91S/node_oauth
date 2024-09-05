const { Router } =  require('express');
const authController = require('../controller/auth-controller');


const router = Router();

router.get('/login', authController.login_get);
router.get('/logout', authController.logout_get);
router.get('/google', authController.google_login);


module.exports = router;
const { Router } =  require('express');
const profileController = require('../controller/profile-controller');
const { checkUser } = require('../middleware/auth-middleware');



const router = Router();


router.get('/', checkUser, profileController.user_profile);


module.exports = router;
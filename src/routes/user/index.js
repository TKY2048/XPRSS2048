import express from 'express';
import {signUpController} from './user.controllers.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', signUpController);

export default router;


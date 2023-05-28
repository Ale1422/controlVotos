import {Router} from 'express';
import {getUser, loginUser, registerUser, setUserAdmin} from '../controllers/user.controller'
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { LoginSchema, RegisterSchema } from '../schemas/user.schema';

const router = Router();

router.post('', schemaValidation(RegisterSchema), registerUser);
router.post('/signin', schemaValidation(LoginSchema), loginUser);

export default router;
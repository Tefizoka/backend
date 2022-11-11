import { Router } from 'express';
import multer from 'multer';

// import user //
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';



// import category //

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

// import register //

import { CreateRegisterController } from './controllers/register/CreateRegisterController';
import { ListRegisterController } from './controllers/register/ListRegisterController';


import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// rotas user //


router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// rotas category //

router.post('/category', isAuthenticated, new CreateCategoryController ().handle )

router.get('/category', isAuthenticated, new ListCategoryController().handle  )


// rotas register //

router.post('/register', isAuthenticated, upload.single('file'), new CreateRegisterController().handle )

router.get('/register', isAuthenticated, new ListRegisterController().handle)







export { router };
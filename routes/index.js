import {Router} from 'express';
import { getHomePage, postResizeImages } from '../controllers/index.js';
import {uploadsMiddleware} from '../middlewares/uploads.js';

const router = Router();

router.get('/',getHomePage);
router.post('/resize-images',uploadsMiddleware,postResizeImages)

export default router;
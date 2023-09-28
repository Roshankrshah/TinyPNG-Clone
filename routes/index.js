import {Router} from 'express';
import { getHomePage, postResizeImages,getDownloadFileById } from '../controllers/index.js';
import {uploadsMiddleware} from '../middlewares/uploads.js';

const router = Router();

router.get('/',getHomePage);
router.post('/resize-images',uploadsMiddleware,postResizeImages);
router.get('/download/:fileId',getDownloadFileById);

export default router;
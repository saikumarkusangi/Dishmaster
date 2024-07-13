import express from 'express';
import { getDishes, togglePublishStatus } from '../controllers/dish.js';

const router = express.Router();

router.get('/dishes',getDishes);
router.patch('/dish/:id',togglePublishStatus);

export default router;
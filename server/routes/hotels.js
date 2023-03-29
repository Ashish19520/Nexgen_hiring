import express from 'express';
import { getHotels,createHotels} from '../conrollers/rooms.js';

const router=express.Router();

router.get('/getallhotels',getHotels);
router.post('/createhotels',createHotels);


export default router;
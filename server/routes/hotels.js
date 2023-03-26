import express from 'express';
import { getHotels,createHotels,getAvailableRooms} from '../conrollers/hotels.js';

const router=express.Router();

router.get('/getallhotels',getHotels);
router.get('/getavailablerooms',getAvailableRooms);
router.post('/createhotels',createHotels);
// router.patch('/:id',updatePost);
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost',likePost);
export default router;
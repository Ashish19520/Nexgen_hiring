import express from 'express';
import {createBooking} from '../conrollers/bookings.js';

const router=express.Router();


router.post('/createbooking',createBooking);

// router.patch('/:id',updatePost);
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost',likePost);
export default router;
import express from 'express';
import { getBookingsDetails,createBooking} from '../conrollers/bookings.js';

const router=express.Router();

router.get('/getallbooking',getBookingsDetails);
router.post('/createbooking',createBooking);
// router.patch('/:id',updatePost);
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost',likePost);
export default router;
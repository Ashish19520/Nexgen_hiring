import express from 'express';
import { getBookingsDetails,createBooking,getMyBookingDetails} from '../conrollers/bookings.js';

const router=express.Router();

router.get('/getallbooking',getBookingsDetails);
router.get('/getmybooking/:id',getBookingsDetails);
router.post('/createbooking/:id',createBooking);

// router.patch('/:id',updatePost);
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost',likePost);
export default router;
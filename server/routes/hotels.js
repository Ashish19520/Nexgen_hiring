import express from 'express';
import { getHotels,createHotels,getAvailableRooms,bookHotelRoom} from '../conrollers/hotels.js';

const router=express.Router();

router.get('/getallhotels',getHotels);
router.get('/getavailablerooms',getAvailableRooms);
router.post('/createhotels',createHotels);
router.put('/bookhotelroom/:id',bookHotelRoom);

export default router;
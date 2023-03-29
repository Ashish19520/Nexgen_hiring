import mongoose from "mongoose";
import Booking from "../models/bookings.js";
import Room from "../models/room.js"    ;
import User from "../models/user.js";

export const getHotels = async (req, res) => {
    const { startDate, endDate, type } = req.query;
        
    try {
       
        const rooms = await Room.find({type:type});
        const bookings = await Booking.find({
          room: { $in: rooms.map(room => room._id) },
          startDate: { $lt: endDate },
          endDate: { $gt: startDate }
        });
        const bookedRoomIds = bookings.map(booking => booking.room.toString());
        const availableRooms = rooms.filter(room => !bookedRoomIds.includes(room._id.toString()));
        res.json(availableRooms);
      } catch (error) {
        console.error(error);
        res.sendStatus(500);
      }
};

export const createHotels=async (req,res)=>{
    const body=req.body;
    const newHotel=new Room(body);
   try {
        await newHotel.save();
        res.status(200).json(newHotel);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}


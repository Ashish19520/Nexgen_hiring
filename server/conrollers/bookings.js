import mongoose from "mongoose";
import Book from "../models/bookings.js";
import Room from "../models/room.js";
import User from "../models/user.js";



export const createBooking=async (req,res)=>{
    try {
      const { userId, roomId, startDate, endDate } = req.body;
      const user = await User.findById({_id:userId});
      const room = await Room.findById({_id:roomId});
      const booking = new Book({ user, room, startDate, endDate });
      await booking.save();
      res.json(booking);
    } catch (error) {
      console.error(error);
      res.json({message:"some error occured"})
}}

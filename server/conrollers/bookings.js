import mongoose from "mongoose";
import BookingSchema from "../models/bookings.js";
import HotelsSchema from "../models/hotels.js";
import {bookHotelRoom} from "./hotels.js"

export const getBookingsDetails = async (req, res) => {
  try {
            const allBookings=await BookingSchema.find();
            res.status(200).json(allBookings);
  } catch (error) {
            res.status(404).json({message:error.message});
  }
};
export const getMyBookingDetails = async (req, res) => {
    const {id: _id}=req.params;
    try {
              const myBooking=await BookingSchema.find(_id);
              res.status(200).json(myBooking);
    } catch (error) {
              res.status(404).json({message:error.message});
    }
  };

export const createBooking=async (req,res)=>{
    const body=req.body;
    const {id: _id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Rooms Available');
    const newBooking=new BookingSchema(body);
   try {
        await newBooking.save();
        const updateHotel=await HotelsSchema.findByIdAndUpdate(_id,{status:"false"},{new:true});
        res.status(200).json({Message:"your hotel room is booked successfuly",newBooking,updateHotel});
    } catch (error) {
        res.status(409).json({message:"sorry hotel is booked already"});
    }
}

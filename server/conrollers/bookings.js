import mongoose from "mongoose";
import BookingSchema from "../models/bookings.js";
import HotelsSchema from "../models/hotels.js";

export const getBookingsDetails = async (req, res) => {
  try {
            const allBookings=await BookingSchema.find();
            res.status(200).json(allBookings);
  } catch (error) {
            res.status(404).json({message:error.message});
  }
};


export const createBooking=async (req,res)=>{
    const body=req.body;
   console.log(body);
   try {
        const newBooking=await new BookingSchema(body);
        const updatedHotel= await HotelsSchema.findOneAndUpdate({ roomnumber: req.body.roomnumber }, { status: false }, { new: true });
        res.status(200).json({message:"your hotel room is booked successfuly"});
    } catch (error) {
        res.status(409).json({message:"sorry hotel is booked already"});
    }
}

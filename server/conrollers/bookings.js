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
   try {
    // const updateHotel=await BookingSchema.find({$and:[{roomnumber:req.body.roomnumber, checkin:{ $gte: req.body.checkin},checkout:{ $lte: req.body.checkout}}]});
    const updateHotel= await BookingSchema.find({
      $and: [
        { roomnumber: req.body.roomnumber },
        {
          $or: [
            { checkin: { $lte: req.body.checkin }, checkout: { $gte: req.body.checkin } },
            { checkin: { $lte: req.body.checkout }, checkout: { $gte: req.body.checkout } },
            { checkin: { $gte: req.body.checkin }, checkout: { $lte: req.body.checkout } }
          ]
        }
      ]
    });
        if(updateHotel.length===0){
          const newBooking=new BookingSchema(req.body);
          await newBooking.save();
          res.status(200).json({message:"your hotel room is booked successfuly",newBooking});
        }else{
        res.status(409).json({message:"sorry room is booked already"});
        }
    }
    catch (error) {console.log(error);}
}

import mongoose from "mongoose";
import HotelsSchema from "../models/hotels.js";

export const getHotels = async (req, res) => {
  try {
            const allHotels=await HotelsSchema.find();
            res.status(200).json({allHotels});
  } catch (error) {
            res.status(404).json({message:error.message});
  }
};

export const createHotels=async (req,res)=>{
    const body=req.body;
    const newHotel=new HotelsSchema(body);
   try {
        await newHotel.save();
        res.status(200).json(newHotel);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const getAvailableRooms = async (req, res) => {
    try {
              const allHotels=await HotelsSchema.find({status:"true"});
              res.status(200).json(allHotels);
    } catch (error) {
              res.status(404).json({message:error.message});
    }
  };

  export const bookHotelRoom=async(req,res)=>{
    const {id: _id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Rooms Available');
    try {
        const updateHotel=await HotelsSchema.findByIdAndUpdate(_id,{status:"false"},{new:true});
        res.json({message:"hotel book Successfully",updateHotel});
    } catch (error) {
        console.log(error.message);
    }
}


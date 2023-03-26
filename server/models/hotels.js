import mongoose  from "mongoose";

const hotelSchema=mongoose.Schema({
    roomnumber:{ type: String, unique: true},
    roomtype:String,
    status:Boolean,
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const HotelsSchema=mongoose.model('Hotels',hotelSchema);
export default HotelsSchema;
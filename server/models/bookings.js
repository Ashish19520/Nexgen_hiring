import mongoose  from "mongoose";

const bookingSchema=mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    checkin:{
        type:Date,
    },
    checkout:{
        type:Date,
    },
    roomnumber: { type: String, required: true, unique: true },
    roomtype:String
})

const BookingSchema=mongoose.model('bookings',bookingSchema);


export default BookingSchema;
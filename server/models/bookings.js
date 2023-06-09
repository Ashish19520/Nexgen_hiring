import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  name:{
    type: String,
    required: true
  }, 
  email:{
    type: String,
    required: true
  }, 
  mobile:{
    type: String,
    required: true
  },
});

export const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;

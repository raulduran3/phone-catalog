import mongoose from "mongoose";

const phoneSchema = mongoose.Schema({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PhoneData = mongoose.model("PhoneData", phoneSchema);

export default PhoneData;

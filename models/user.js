import mongoose from "mongoose";

//Definind Schema
const userSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true },
  password: { type: String, require: true, trim: true },
  contact_number: { type: String, require: true, trim: true }
});

//Model
const UserModel = mongoose.model('agent', userSchema)

export default UserModel
import mongoose from 'mongoose';

 export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

 export const User = mongoose.model('users', UserSchema);

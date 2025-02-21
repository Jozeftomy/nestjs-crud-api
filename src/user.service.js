import { Injectable } from '@nestjs/common';
import { User } from './schemas/users.schema';
// import { Model } from 'mongoose';

@Injectable()
export class UserService { 

  // this portion doesn't supporting javascript

  // constructor(@InjectModel(User.name) userModel) {
  //   this.userModel = userModel;
  // }

  async create(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  async findAll() {
    return await User.find().exec();
  }

  async findOne(id) {
    return await User.findById(id).exec();
  }

  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id) {
    return await User.findByIdAndDelete(id).exec();
  }
}


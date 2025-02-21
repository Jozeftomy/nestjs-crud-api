import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://josephtomy02:ihu1tJAQBt1kOrAm@crud-api-cluster.z6ex7.mongodb.net/nestjs-crud-db?retryWrites=true&w=majority&appName=crud-api-cluster'),
  UserModule],

})
export class AppModule {}

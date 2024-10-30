import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CommentsModule,
    MongooseModule.forRoot(
      'mongodb+srv://wirekobrobbeyofficial:mrW1lar0IpJdclv3@cluster0.xrwoi.mongodb.net/threads?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

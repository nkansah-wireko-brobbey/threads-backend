import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment.name) private userModel: Model<Comment>) {}

  create(createCommentDto: CreateCommentDto) {
    const newComment = this.userModel.create({
      text: createCommentDto.text,
      parent: createCommentDto.parentId || null,
      user: createCommentDto.userId,
    });

    return newComment.then((doc) => {
      return doc.populate(['user', 'parent']);
    });
  }

  findAll() {
    return this.userModel.find().populate(['user', 'parent']).exec();
  }

  getTopLevelComment() {
    const topLevelComments = this.userModel.find({
      parent: null,
    });

    return topLevelComments;
  }

  getCommentsByParentId(parentId: string) {
    const comments = this.userModel.find({
      parent: parentId,
    });

    return comments;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}

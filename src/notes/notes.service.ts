import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { CreateNoteDto } from './dto/createNoteDto';
import { Note } from './interfaces/note.interface';
import { create } from 'domain';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel('Article') private readonly noteModel: Model<Note>,
  ) {}
  async createOne(createNoteDto: CreateNoteDto): Promise<Note> {
    const params = {
      _id: new Types.ObjectId(),
      ...createNoteDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    const note = new this.noteModel(params);
    return await note.save();
  }
  findAll(): Note[] {
    return this.noteModel.find().then(res => {
      return res.map(note => ({
        id: note._id,
        title: note.title,
        content: note.content,
        createTime: note.createAt,
      }));
    });
  }
}

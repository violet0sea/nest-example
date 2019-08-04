import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './schemas/note.schema';
import { NotesService } from './notes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: NoteSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}

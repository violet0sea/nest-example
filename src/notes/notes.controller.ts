import { Controller, Get, Put, Body, Post } from '@nestjs/common';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateNoteDto } from './dto/createNoteDto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Get()
  async findAll(): Promise<Note[]> {
    return await this.notesService.findAll();
  }
  @Post('create')
  async createOne(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
    return await this.notesService.createOne(createNoteDto);
  }
}

import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const NoteSchema = new Schema({
  _id: Schema.Types.ObjectId!,
  title: String!,
  content: String!,
  createdAt: Date!,
  updatedAt: Date!,
});

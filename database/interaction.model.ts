import { Schema, model, models, Document } from "mongoose";

export interface IInteraction extends Document {
  user: Schema.Types.ObjectId;
  action: string;
  question: Schema.Types.ObjectId;
  answer: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId;
  createdAt: Date;
}

const interactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  action: { type: String, require: true },
  question: { type: Schema.Types.ObjectId, ref: "Question" },
  answer: { type: Schema.Types.ObjectId, ref: "Answer" },
  tags: { type: Schema.Types.ObjectId, ref: "Tag" },
  createdAt: { type: Date, default: Date.now },
});

const Interaction =
  models.Interactioin || model("Interaction", interactionSchema);

export default Interaction;

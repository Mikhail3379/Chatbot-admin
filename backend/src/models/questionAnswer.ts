import mongoose, { Schema } from "mongoose";

interface IQuestionAnswer {
  id: string;
  answer: string;
  question: string;
}

interface questionAnswerModelInterface
  extends mongoose.Model<QuestionAnswerDoc> {
  build(attr: IQuestionAnswer): QuestionAnswerDoc;
}

interface QuestionAnswerDoc extends mongoose.Document {
  id: string;
  question: string;
  answer: string;
}

const questionAnswerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

questionAnswerSchema.statics.build = (attr: IQuestionAnswer) => {
  return new QuestionAnswer(attr);
};

const QuestionAnswer = mongoose.model<
  QuestionAnswerDoc,
  questionAnswerModelInterface
>("QuestionAnswer", questionAnswerSchema);

export { QuestionAnswer };

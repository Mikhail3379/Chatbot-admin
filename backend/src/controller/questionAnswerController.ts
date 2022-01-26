import { QuestionAnswer } from "../models/questionAnswer";
const { uuid } = require("uuidv4");
export function addQA(question: string, answer: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      let questionAnswer = QuestionAnswer.build({
        id: uuid(),
        question,
        answer,
      });
      await questionAnswer.save();
      resolve(questionAnswer);
    } catch (error) {
      reject(error);
    }
  });
}

export function getAllQA() {
  return new Promise(async (resolve, reject) => {
    resolve(await QuestionAnswer.find());
  });
}

export function deleteQA(id: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      await QuestionAnswer.deleteOne({ id });
      resolve("");
    } catch (error) {
      reject(error);
    }
  });
}

export function getQA(id: any): any {
  return new Promise(async (resolve, reject) => {
    resolve(await QuestionAnswer.find({ id }));
  });
}

export function updateQA(
  id: any,
  question: string,
  answer: string
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const elementArray = await getQA(id);
      if (!Array.isArray(elementArray) || elementArray.length < 1) {
        let err = new Error();
        err.message = "There is no question-answer with this id";
        throw err;
      }
      const element = elementArray[0];
      if (answer) element.answer = answer;
      if (question) element.question = question;
      await QuestionAnswer.findOneAndUpdate({ id }, element);
      resolve("");
    } catch (error) {
      reject(error);
    }
  });
}

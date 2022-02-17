import express, { Request, Response } from "express";
var getRawBody = require("raw-body");

import * as questionAnswerController from "../controller/questionAnswerController";
import { QuestionAnswer } from "../models/questionAnswer";

const router = express.Router();

router.post("/app/addQA", (req, res, next) => {
  const { question, answer } = req.body;
  return questionAnswerController
    .addQA(question, answer)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/app/allQA", (req, res, next) => {
  return questionAnswerController
    .getAllQA()
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});

router.delete("/app/deleteQA", (req, res, next) => {
  const { id } = req.query;
  return (
    questionAnswerController
      //@ts-ignore
      .deleteQA(id)
      .then((result: any) => {
        res.send();
      })
      .catch(next)
  );
});

router.put("/app/updateQA", (req, res, next) => {
  const { id } = req.query;
  const { answer, question } = req.body;

  return questionAnswerController
    .updateQA(id, question, answer)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});

router.get("/app/getQA", (req, res, next) => {
  return questionAnswerController
    .getQA(req.query.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});


export { router as questionAnswerRouter };

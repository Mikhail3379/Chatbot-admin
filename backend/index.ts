import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import cors from 'cors';
import { questionAnswerRouter } from "./src/routes/questionAnswer";
import { usersRouter } from "./src/routes/users";

const app = express();
const config = require("./src/config");
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(json());
app.use(questionAnswerRouter)
app.use(usersRouter)
const PORT=9000
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

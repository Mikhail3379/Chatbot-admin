import express, { Request, Response } from "express";
var getRawBody = require("raw-body");

import * as usersController from "../controller/usersController";
import { Users } from "../models/users";

const router = express.Router();

router.post("/app/addUser", (req, res, next) => {
  const { id, public_key } = req.body;
  return usersController
    .addUser(id, public_key)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/app/allUsers", (req, res, next) => {
  return usersController
    .getAllUsers()
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});

router.delete("/app/deleteUser", (req, res, next) => {
  const { id } = req.query;
  return (
    usersController
      //@ts-ignore
      .deleteUser(id)
      .then((result: any) => {
        res.send();
      })
      .catch(next)
  );
});

router.put("/app/updateUser", (req, res, next) => {
  const { id } = req.query;
  const { public_key } = req.body;

  return usersController
    .updateUser(id, public_key)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});

router.get("/app/getUser", (req, res, next) => {
  return usersController
    .getUser(req.query.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch(next);
});


export { router as usersRouter };

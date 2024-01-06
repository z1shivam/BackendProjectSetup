import { Router } from "express";

const testRouter = Router();

testRouter
  .route("/")
  .get((req, res) => {
    res.send("Response From Server");
  })
  .post((req, res) => {
    const { username, email } = req.body;
    res.json({ yourUsername: username, yourEmail: email });
  });

export { testRouter };

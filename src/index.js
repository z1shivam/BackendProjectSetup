import dotenv from "dotenv";
import mongoConnect from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

mongoConnect()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`Server is listening at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Failed To Connect: ${err}`);
  });

import {Schema, model} from "mongoose";

const testSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Test = model("Test", testSchema)

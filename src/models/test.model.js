import {Schema, model} from "mongoose";

const testSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  Age: {
    type: Number,
    required: false,
  },
  Date: {
    type: Date,
    required: false,
  },
});

const Test = model("Test", testSchema)

export default Test;

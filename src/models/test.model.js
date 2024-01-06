import {Schema, model} from "mongoose";

const testSchema = Schema({});

const Test = model("Test", testSchema)

import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv:endereço e senha"
);

let db = mongoose.connection;
export default db;

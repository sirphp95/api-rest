import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://sirphp:semsenha1@node.7ka6r3u.mongodb.net/node"
);

let db = mongoose.connection;
export default db;

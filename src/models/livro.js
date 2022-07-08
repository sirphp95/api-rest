import mongoose from "mongoose";

const livroschema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: number },
});


const livros = mongoose.model("livros", livroschema)

export default livros;
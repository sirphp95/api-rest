// const http = require("http");
import app from "./src/app.js";
const port = process.env.port || 3000;
// const rotas ={
//     "/": "curso de node",
//     "/livros": "entrei na pag de livros",
//     "/autores": "entrei na pagina de autores"
// }
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end(rotas[req.url]);
// });
app.listen(port, () => {
  console.log(`servidor escutando em http://localhost:${port}`);
});

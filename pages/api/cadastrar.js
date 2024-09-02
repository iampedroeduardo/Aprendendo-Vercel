import {sql} from "@vercel/postgres";

export default async function cadastrar(request,response){
    await sql `INSERT INTO livros(titulo,isbn,editora,autor,sinopse) VALUES ('${request.nome}','${request.isbn}','${request.editora}','${request.autor}','${request.descricao}')`;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.json({nome:request.nome});
}
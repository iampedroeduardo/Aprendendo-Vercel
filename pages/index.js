import {sql} from "@vercel/postgres";

export default function index(){
    return (<>Nome:<input id="nome" type="text"></input>
    Autor:<input id="autor" type="text"></input>
    Descrição:<input id="descricao" type="text"></input>
    Isbn:<input id="isbn" type="text"></input>
    Editora:<input id="editora" type="text"></input>
    <button onClick={cadastrar}>Cadastrar</button>
    <button>Mostrar</button></>);
}
async function cadastrar(){
    await sql `INSERT INTO livros(titulo,sinopse,isbn,autor,editora) VALUES ('${document.querySelector('#nome').value}','${document.querySelector("#descricao").value}','${document.querySelector("#isbn").value}','${document.querySelector("#autor").value}','${document.querySelector("#editora").value}')`;
}
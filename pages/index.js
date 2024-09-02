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
    let api = await fetch("https://localhost:3000/api/cadastrar",{
        "nome":document.querySelector('#nome').value,
        "descricao":document.querySelector('#descricao').value,
        "isbn":document.querySelector('#isbn').value,
        "editora":document.querySelector('#editora').value,
        "autor":document.querySelector('#autor').value
    });
}
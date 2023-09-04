
function ready() {
    const homeLink = document.getElementById('home');
    const contatoLink = document.getElementById('contato');
    const sobrenosLink = document.getElementById('sobrenos');
    const sessaoPrincipal = document.getElementById('sessaoPrincipal');

    homeLink.addEventListener('click', () => loadContent('home.html'));
    contatoLink.addEventListener('click', () => loadContent('contatos.html'));
    sobrenosLink.addEventListener('click', () => loadContent('sobrenos.html'));

    function loadContent(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                sessaoPrincipal.innerHTML = data;
            });
    }
}


function chamada() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let telefone = document.querySelector("#telefone").value;

    const dados = [
      {nomeCliente: nome, emailCliente: email, telefoneCliente: telefone}
    ];
    
    let resultado = document.querySelector("#resultado");
    console.log(dados);
    resultado.innerHTML = ` Seu nome é: ${dados[0].nomeCliente}, seu email é : ${dados[0].emailCliente} e seu telefone é : ${dados[0].telefoneCliente}`;
  }

  //trazendo  dados para lista de items

  let ul = document.querySelector("#items");

const dados = [
{nome: "João", idade: 30},{nome:"Gisele", idade: 26}, {nome: "Luiza", idade: 31}
]
const listaElementos = dados.map(dado => `<li> Nome: ${dado.nome}, Idade: ${dado.idade}</li>`);

ul.innerHTML = listaElementos.join('')


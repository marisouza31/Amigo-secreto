let listaDeAmigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaDeAmigos.push(nomeAmigo);
    inputAmigo.value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista

    for (let amigo of listaDeAmigos) {
        const item = `<li class="name-item">${amigo}</li>`;
        listaElement.innerHTML += item;
    }
}

function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");
    const buttonContainer = document.querySelector(".button-container");

    // Verifica se há amigos na lista
    if (listaDeAmigos.length === 0) {
        resultadoElement.innerHTML = `<p class="error-message">Nenhum amigo na lista para sortear.</p>`;
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Exibe o resultado
    resultadoElement.innerHTML = `<p class="result-message">O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;

    // Verifica se o botão "Novo Sorteio" já existe antes de criar
    if (!document.getElementById("novoSorteio")) {
        const novoSorteioButton = document.createElement("button");
        novoSorteioButton.id = "novoSorteio";
        novoSorteioButton.className = "button-new-draw";
        novoSorteioButton.innerText = "Novo Sorteio";
        novoSorteioButton.onclick = reiniciarProcesso;

        // Adiciona o botão na interface
        buttonContainer.appendChild(novoSorteioButton);
    }
}

function reiniciarProcesso() {
    // Limpa a lista de amigos e o resultado
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Remove o botão "Novo Sorteio"
    const novoSorteioButton = document.getElementById("novoSorteio");
    if (novoSorteioButton) {
        novoSorteioButton.remove();
    }
}

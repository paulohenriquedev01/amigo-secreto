// Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Verifica se já foi adicionado
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        input.value = "";
        return;
    }

    // Adiciona ao array
    amigos.push(nome);

    // Atualiza a lista no HTML
    atualizarLista();

    // Limpa o campo
    input.value = "";
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa antes de recriar

    amigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        // botão para remover amigo
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Função para remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    // Sorteio aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado foi: 🎉 ${sorteado} 🎉`;

    resultado.appendChild(li);
}



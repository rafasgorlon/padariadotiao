const topoBtn = document.getElementById("topoBtn");

window.onscroll = function () {
  topoBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- Informações básicas ----------
let nome = "Padaria do Tião";
let endereco = "Rua das Flores, 123";
let telefone = "(11) 12345-6789";

// ---------- Preços de produtos ----------
let precoPao = 27.90 ;
let precoBolo = 130.00;
let precoSalgado = 5.50;
let precoDoce = 6.00;

// ---------- Controle de estoque ----------
let estoquePao = 200;       // unidades
let estoqueBolo = 10;       // unidades
let estoqueSalgado = 50;    // unidades
let estoqueDoce = 100;      // unidades

// ---------- Arrays de produtos e categorias ----------
let produtos = ["Pão Francês", "Bolo de Chocolate", "Coxinha", "Brigadeiro"];
let categorias = ["Pães", "Bolos", "Salgados", "Doces"];

// ---------- Objetos completos ----------
let produto1 = {
  nome: "Pão Francês",
  preco: 0.80,
  categoria: "Pães",
  estoque: 200
};

let produto2 = {
  nome: "Bolo de Chocolate",
  preco: 25.00,
  categoria: "Bolos",
  estoque: 10
};

// ---------- Teste com let e const ----------
const taxaEntrega = 5.00;
let promocaoAtiva = true;

// ---------- Depuração com console.log ----------
console.log("📍 Nome da Padaria:", nome);
console.log("📍 Endereço:", endereco);
console.log("📍 Telefone:", telefone);
console.log("💲 Preços:", { precoPao, precoBolo, precoSalgado, precoDoce });
console.log("📦 Estoque:", { estoquePao, estoqueBolo, estoqueSalgado, estoqueDoce });
console.log("📋 Produtos:", produtos);
console.log("📂 Categorias:", categorias);
console.log("🛒 Produto 1:", produto1);
console.log("🛒 Produto 2:", produto2);
console.log("🚚 Taxa de entrega:", taxaEntrega);
console.log("🔥 Promoção ativa?", promocaoAtiva);



function calcular() {
  let preco = parseFloat(document.getElementById("preco").value);
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let valorPago = parseFloat(document.getElementById("valorPago").value);

  if (isNaN(preco) || isNaN(quantidade) || isNaN(valorPago)) {
      document.getElementById("resultado").innerHTML = "⚠️ Preencha todos os campos!";
      return;
  }

  let subtotal = preco * quantidade;

  let desconto = 0;
  if (quantidade >= 10) {
      desconto = subtotal * 0.15;
  } else if (quantidade >= 5) {
      desconto = subtotal * 0.10;
  } else if (quantidade >= 3) {
      desconto = subtotal * 0.03;
  }

  let totalComDesconto = subtotal - desconto;

  let taxaEntrega = 5.00;
  let impostos = totalComDesconto * 0.07;
  let totalFinal = totalComDesconto + impostos + taxaEntrega;

  let troco = valorPago - totalFinal;
  let pontosFidelidade = Math.floor(totalFinal);
  let cotacaoEuro = 6.00;
  let totalEmEuro = totalFinal / cotacaoEuro;

  document.getElementById("resultado").innerHTML = `
      💰 Subtotal: R$ ${subtotal.toFixed(2)}<br>
      💸 Desconto: R$ ${desconto.toFixed(2)}<br>
      ✅ Total com desconto: R$ ${totalComDesconto.toFixed(2)}<br>
      💲 Impostos: R$ ${impostos.toFixed(2)}<br>
      🚚 Taxa de entrega: R$ ${taxaEntrega.toFixed(2)}<br>
      🔹 Total final: R$ ${totalFinal.toFixed(2)}<br>
      💵 Troco: R$ ${troco.toFixed(2)}<br>
      ⭐ Pontos de fidelidade: ${pontosFidelidade}<br>
      💶 Total em Euro: € ${totalEmEuro.toFixed(2)}
  `;
}


let quantidade = 1;

// Função para adicionar ao carrinho
function adicionarCarrinho() {
  alert("✅ Produto adicionado ao carrinho com sucesso!");
}

// Função para mostrar/ocultar detalhes
function verDetalhes() {
  let detalhes = document.getElementById("detalhes");
  if (detalhes.style.display === "none") {
      detalhes.style.display = "block";
  } else {
      detalhes.style.display = "none";
  }
}

// Funções para aumentar/diminuir quantidade
function aumentar() {
  quantidade++;
  document.getElementById("qtd").innerText = quantidade;
}

function diminuir() {
  if (quantidade > 1) {
      quantidade--;
      document.getElementById("qtd").innerText = quantidade;
  }
}

// Função para limpar carrinho
function limparCarrinho() {
  let confirma = confirm("Tem certeza que deseja limpar o carrinho?");
  if (confirma) {
      quantidade = 1;
      document.getElementById("qtd").innerText = quantidade;
      alert("🗑️ Carrinho limpo!");
  }
}



const busca = document.getElementById("busca");
const listaProdutos = document.querySelectorAll("#listaProdutos .produto");
const obs = document.getElementById("obs");
const contador = document.getElementById("contador");

// 🔎 Busca dinâmica
busca.addEventListener("input", () => {
  const termo = busca.value.toLowerCase();
  listaProdutos.forEach(produto => {
    produto.style.display = produto.textContent.toLowerCase().includes(termo) ? "block" : "none";
  });
});

// ⌨️ Atalho Ctrl + Enter para "adicionar ao carrinho"
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    alert("✅ Produto adicionado ao carrinho!");
  }
});

// 📝 Contador de caracteres no campo de observações
obs.addEventListener("input", () => {
  contador.textContent = `${obs.value.length} / 100`;
});

// ⬆️⬇️ Navegação por produtos com as setas do teclado
let index = 0;
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    index = (index + 1) % listaProdutos.length;
    listaProdutos[index].focus();
  } else if (e.key === "ArrowUp") {
    index = (index - 1 + listaProdutos.length) % listaProdutos.length;
    listaProdutos[index].focus();
  }
})


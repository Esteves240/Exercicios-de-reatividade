// ======================================================
// 01 - Seleção de elementos (base para tudo)
// querySelector e querySelectorAll
// Criamos aqui quais elementos queremos escutar na dom
// Primeiro passo para abrir a modal é capturar os elementos
// ======================================================

const galeria = document.querySelector(".galeria");
const modal = document.querySelector(".modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalImagem = document.getElementById("modalImagem");
const btnFechar = document.querySelector(".fechar");

// ======================================================
// 02 - Abrir imagem no modal (event delegation
// ======================================================
galeria.addEventListener("click", (event) => {   // Sempre que houver um clique dentro da galeria, esta função é executada
  const imagem = event.target.closest(".imagem"); // Tentamos descobrir se o clique foi numa imagem (dentro de um .imagem)
  if (!imagem) return;  // Se o clique NÃO aconteceu dentro de um .imagem, saímos da função e não fazemos nada(as always)

  modalTitulo.textContent = imagem.dataset.titulo;   // Colocamos no título do modal o valor guardado no atributo data-titulo do article

  modalImagem.src = imagem.querySelector("img").src; //add img src="aqui"
  modalImagem.alt = imagem.dataset.titulo;           //add img alt

  modal.classList.remove("hidden");
});

// ======================================================
// 06 - Fechar a modal clicando fora (bubbling)
// ======================================================

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// ======================================================
// 07 - stopPropagation
// Evitar que o clique feche a modal
// ======================================================

document.querySelector(".modal-content").addEventListener("click", (event) => {
  event.stopPropagation();
});

// ======================================================
// 08 - Botão fechar (X)
// Mesmo efeito, evento diferente
// ======================================================

btnFechar.addEventListener("click", (event) => {
  event.stopPropagation();
  modal.classList.add("hidden");
});

// ======================================================
// 09 - Fechar modal com tecla ESC (keydown)
// ======================================================
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});



document.addEventListener("DOMContentLoaded", function () {
    const foto = document.getElementById("minha-foto");
    const botaoMsg = document.getElementById("botao-msg");
    const mensagemBox = document.getElementById("mensagem-box");
    const fecharMsg = document.getElementById("fechar-msg");
    botaoMsg.addEventListener("click", function () {
      mensagemBox.style.display = "block";
    });
  
    fecharMsg.addEventListener("click", function () {
      mensagemBox.style.display = "none";
    });
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      foto.addEventListener("click", function () {
        foto.classList.tAoggle("foto-grande");
      });
    }
  });
  // Mostra/esconde o botão ao rolar a página
window.onscroll = function() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Volta ao topo ao clicar
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});


document.addEventListener("DOMContentLoaded", () => {

  // MENU HAMBURGER ABRINDO À ESQUERDA
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    });

    // Fechar menu ao clicar em um link no mobile
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menu.style.display = "none";
        }
      });
    });
  }

  // BOTÃO VOLTAR AO TOPO
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // FOTO INTERATIVA
  const foto = document.getElementById("minha-foto");
  if (foto) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      foto.addEventListener("click", () => {
        foto.classList.toggle("foto-grande");
      });
    }
  }

  // BOTÃO "CLIQUE AQUI"
  const botaoMsg = document.getElementById("botao-msg");
  const mensagemBox = document.getElementById("mensagem-box");
  const fecharMsg = document.getElementById("fechar-msg");

  if (botaoMsg && mensagemBox && fecharMsg) {
    botaoMsg.addEventListener("click", () => {
      mensagemBox.style.display = "block";
    });

    fecharMsg.addEventListener("click", () => {
      mensagemBox.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const foto = document.getElementById("minha-foto");
  const botaoMsg = document.getElementById("botao-msg");
  const mensagemBox = document.getElementById("mensagem-box");
  const fecharMsg = document.getElementById("fechar-msg");
  const backToTop = document.getElementById("backToTop");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  // Caixa de mensagem
  if(botaoMsg && mensagemBox && fecharMsg){
    botaoMsg.addEventListener("click", function () {
      mensagemBox.style.display = "block";
    });

    fecharMsg.addEventListener("click", function () {
      mensagemBox.style.display = "none";
    });
  }

  // Foto interativa (apenas se existir)
  if(foto){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      foto.addEventListener("click", function () {
        foto.classList.toggle("foto-grande");
      });
    }
  }

  // Botão voltar ao topo
  if(backToTop){
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    };

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Menu hamburger
  if(hamburger && menu){
    hamburger.addEventListener("click", () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });
  }
});

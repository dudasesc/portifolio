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
  

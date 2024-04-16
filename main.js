
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual é o filme?");

    
    if (respostaTime.toLowerCase() === "moranguinho") {
      alert("Isso mesmo! O Filme é moranguinho!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  

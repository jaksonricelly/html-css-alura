let nome_usuario = "";
let elemento = document.querySelector("#nome-usuario");

while (nome_usuario == "") {
  nome_usuario = prompt("Qual é o seu nome?");
}

if (nome_usuario == null) {
  elemento.textContent = "Seja  muito bem vindo(a)";
} else {
  elemento.textContent = nome_usuario;
}

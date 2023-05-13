let contador = 0;
let elementoContador = document.getElementById("contador");

document.getElementById("adicionar").addEventListener("click", function() {
  contador++;
  elementoContador.textContent = contador;

});

document.getElementById("subtrair").addEventListener("click", function() {
  contador--;
  elementoContador.textContent = contador;

});

document.getElementById("resetar").addEventListener("click", function() {
  contador = 0;
  elementoContador.textContent = contador;

});
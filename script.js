function gerarSenha() {
  const usarLetras = document.getElementById("letras").checked;
  const usarNumeros = document.getElementById("numeros").checked;
  const usarSimbolos = document.getElementById("simbolos").checked;

  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+{}[]<>?/|";

  let caracteres = "";
  if (usarLetras) caracteres += letras;
  if (usarNumeros) caracteres += numeros;
  if (usarSimbolos) caracteres += simbolos;

  let senha = "";
  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  document.getElementById("senha").value = senha;
}

function copiarSenha() {
  const senha = document.getElementById("senha");
  senha.select();
  document.execCommand("copy");
  alert("Senha copiada!");
}

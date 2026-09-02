function curtirPost(botao) {
  const contador = botao.querySelector('.likes');
  let numeroAtual = parseInt(contador.innerText);
  contador.innerText = numeroAtual + 1;
}

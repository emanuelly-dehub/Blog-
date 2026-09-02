// Função para disparar a contagem de curtidas
function curtirPost(botao) {
  const elementoLikes = botao.querySelector('.likes');
  let totalLikes = parseInt(elementoLikes.innerText);
  
  // Incrementa a curtida
  totalLikes++;
  elementoLikes.innerText = totalLikes;
  
  // Efeito simples de feedback no botão
  botao.style.transform = "scale(1.05)";
  setTimeout(() => {
    botao.style.transform = "scale(1)";
  }, 150);
}

// Função para buscar/filtrar posts dinamicamente pelo título
function filtrarPosts() {
  const termo = document.getElementById('campo-busca').value.toLowerCase();
  const posts = document.querySelectorAll('.card-post');

  posts.forEach(post => {
    const titulo = post.querySelector('.post-titulo').innerText.toLowerCase();
    
    // Se o título incluir o texto pesquisado, exibe; caso contrário, oculta
    if (titulo.includes(termo)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

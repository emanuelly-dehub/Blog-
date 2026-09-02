function curtirPost(botao) {
  const elementoLikes = botao.querySelector('.likes');
  let totalLikes = parseInt(elementoLikes.innerText);
  
  totalLikes++;
  elementoLikes.innerText = totalLikes;
  
  botao.style.transform = "scale(1.08)";
  setTimeout(() => {
    botao.style.transform = "scale(1)";
  }, 150);
}

function filtrarPosts() {
  const termo = document.getElementById('campo-busca').value.toLowerCase();
  const posts = document.querySelectorAll('.card-post');

  posts.forEach(post => {
    const textoPost = post.innerText.toLowerCase();
    
    if (textoPost.includes(termo)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

function adicionarFilmeFavorito(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var campo_link = document.querySelector('#link');
  var filmeFavorito = campoFilmeFavorito.value
  var link = campo_link.value
  var link_id = link.substring(link.length-11, link.length)
  listarFilmesNaTela(filmeFavorito)
  link_do_filme(link_id)
  campoFilmeFavorito.value = ""
  campo_link.value = ""
  ///console.log(link_id)
}

function listarFilmesNaTela(filme) {
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme}
  
function link_do_filme(links) {
  var link_filme =  "<iframe width='854' height='480' src='https://www.youtube.com/embed/"+links+"?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br>"
  player.innerHTML = player.innerHTML + link_filme
  ///console.log(link_filme)
}
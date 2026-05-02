const filtrarAutores = () => {
  const autor = prompt("Ingrese el autor a buscar")
  const filtro = libros.filter(f => f.autor === autor)
  console.log(filtro)
}
filtrarAutores()
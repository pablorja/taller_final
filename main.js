//crear usuario pablo
const registros = [{nombre:"pablo", email:"pablo.santamaria@upb.edu.com"}]
const crearusuario = () => {
    const nombre= prompt("Ingrese el nombre")
    const email= prompt("Ingrese el email")
    registros.push({ nombre, email, })
}
crearusuario()
console.log(registros)

//crear libros david
const libros = [{titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", prestado: false}]

const crearLibro = () => {
    const titulo= prompt("Ingrese el titulo del libro")
    const autor= prompt("Ingrese el autor del libro")
    const prestado = false
    libros.push({ titulo, autor, prestado })
}
crearLibro()
console.log(libros)

//prestar libro luis
 const prestarLibro = () => {
  const titulo = prompt("¿Qué libro desea prestar?")
 
  libros.forEach(libro => {
    if (libro.titulo === titulo && libro.prestado === false) {
      libro.prestado = true
      console.log("Libro prestado con éxito:", libro.titulo)
    } else if (libro.titulo === titulo && libro.prestado === true) {
      console.log("El libro ya está prestado")
    }
  })
}
prestarLibro()
console.log(libros)

//devolver libro luis
const devolverLibro = () => {
  const titulo = prompt("¿Qué libro desea devolver?")
 
  libros.forEach(libro => {
    if (libro.titulo === titulo && libro.prestado === true) {
      libro.prestado = false
      console.log("Libro devuelto con éxito:", libro.titulo)
    }
  })
}
devolverLibro()
console.log(libros)

//filtrar autores david
const filtrarAutores = () => {
  const autor = prompt("Ingrese el autor a buscar")
  const filtro = libros.filter(f => f.autor === autor)
  console.log(filtro)
}
filtrarAutores()
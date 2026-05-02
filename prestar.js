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
// Array de libros disponibles
const libros = [
  { id: 1, nombre: "Clean Code", disponible: true },
  { id: 2, nombre: "JavaScript Avanzado", disponible: true },
  { id: 3, nombre: "Estructura de Datos", disponible: false }
]

// Función para prestar un libro
const prestarLibro = (idLibro) => {
  const libro = libros.find(l => l.id === idLibro)
  
  if (!libro) {
    console.log("El libro no existe")
    return false
  }
  
  if (!libro.disponible) {
    console.log(`El libro "${libro.nombre}" no está disponible`)
    return false
  }
  
  libro.disponible = false
  console.log(`"${libro.nombre}" ha sido prestado exitosamente`)
  return true
}

// Función para devolver un libro
const devolverLibro = (idLibro) => {
  const libro = libros.find(l => l.id === idLibro)
  
  if (!libro) {
    console.log("El libro no existe")
    return false
  }
  
  if (libro.disponible) {
    console.log(`El libro "${libro.nombre}" ya está disponible`)
    return false
  }
  
  libro.disponible = true
  console.log(`"${libro.nombre}" ha sido devuelto exitosamente`)
  return true
}

// Ejemplos de uso
console.log("--- Pruebas del sistema de préstamo ---\n")
prestarLibro(1)
prestarLibro(1)
devolverLibro(1)
prestarLibro(2)
prestarLibro(999)
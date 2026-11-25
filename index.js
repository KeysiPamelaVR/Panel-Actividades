
const tareas = [
    { titulo: "Comprar café", prioridad: "alta", estado: "pendiente" },
    { titulo: "Leer", prioridad: "baja", estado: "completada" },
  ];

  function esTituloValido(titulo) {
    return titulo.length >= 3 && titulo.length <= 80;
  }
  
  function crearTarea(titulo, prioridad) {
    if (!esTituloValido(titulo)) {
      console.log("Título no válido");
      return false;
    }
    tareas.push({ titulo: titulo, prioridad: prioridad, estado: "pendiente" });
    return true;
  }

  function contarPendientes() {
    return tareas.filter(t => t.estado === "pendiente").length;
  }
  
  function listar() {
    for (const t of tareas) {
        console.log(`${t.titulo} (${t.prioridad}) - ${t.estado}`);
    }
    return true;
}
  (contarPendientes())
  esTituloValido("Comprar pan");
  esTituloValido("Holis")
  listar();
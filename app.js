// Función para agregar tarea
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("task-list");
  
    // Crear el elemento de la tarea
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Botón para eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = () => {
      taskList.removeChild(li);
    };
  
    // Añadir el botón al li
    li.appendChild(deleteButton);
  
    // Agregar la tarea al listado
    taskList.appendChild(li);
  
    // Limpiar el input
    taskInput.value = "";
  }
// 📌 LISTA DE TAREAS DESDE UN FORMULARIO
// Obtener el formulario donde se añaden las tareas
const taskForm = document.getElementById('task-form');
// Obtener la lista de tareas que se muestran
const taskList = document.getElementById('task-list');

// 🌟 Agregar el evento para el formulario de añadir tarea
taskForm.addEventListener('submit', (e) => {
    // Prevenir el comportamiento por default en los formularios
    e.preventDefault();
    // Tomar el id del input
    const taskInput = document.getElementById('task-input');
    // Atrapar y guardar el valor de la constante del input
    const task = taskInput.value;
    // Lógica para agregar la tarea a la lista
    if (task) {
        taskList.append(createTaskElement(task));
        // Guardar las tareas en localstorage
        storeTaskInLocalStorage(task);
        taskInput.value = ''
        console.log(task);
    }
});

// 🌟 Crear los botones de editar y eliminar dinámicamente
const createButton = (text, className) => {
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
};

// 🌟 Crear los elementos de las tareas dinámicamente
const createTaskElement = (task) => {
    const li = document.createElement('li');
    // Añadir el texto de la tarea
    li.textContent = task;
    // Crear el div para los botones
    const divBtns = document.createElement('div');
    // Añadir los botones al div
    divBtns.append(createButton('❌', 'delete-btn'), createButton('🖊️', 'edit-btn'));
    // Añadir el div al elemento li
    li.append(divBtns);
    return li;
};
// 🌟 Implementar las funciones de los botones
taskList.addEventListener('click', (e) => {
    // Detecta a cual de los dos botones de le da clic
    if (e.target.classList.contains('delete-btn')) {
        // e.target es el span (botón)
        // e.target.parentElement es el div que contiene los botones
        // e.target.parentElement.parentElement es el li (elemento de la tarea)
        deleteTask(e.target.parentElement.parentElement);
    } else if (e.target.classList.contains('edit-btn')) {
        editTask(e.target.parentElement.parentElement);
    }
});
// 🌟 Funcion para eliminar la tarea
const deleteTask = (taskItem) => {
    // Extraer el texto de la tarea que está dentro del elemento li
    // El texto es el primer nodo hijo (childNodes[0]) del elemento li
    const taskText = taskItem.firstChild.textContent.trim();

    if (confirm(`¿Deseas eliminar la tarea "${taskText}"?`)) {
        taskItem.remove();
        updateLocalStorage(); // Actualiza el localStorage después de eliminar
        console.log(taskItem);
    }
};
// 🌟 Funcion para editar la tarea
const editTask = (taskItem) => {
    const newTask = prompt('Edita la tarea: ',
        taskItem.firstChild.textContent);
    console.log(newTask);
    if (newTask !== null) {
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage(); // Actualiza el localStorage después de eliminar
    }
};
// 🌟 Función para utilizar el método LocalStorage
// Variable para guardar las tareas con localstorage
const storeTaskInLocalStorage = (task) => {
    /** Convertir el resultado de LocalStorage en un objeto o array 
     * mediante JSON */
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Agregar los elementos al array existente
    tasks.push(task);
    /** Aquí se guarda el array del localstorage como un string */
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
/** 🌟 Funcion para mostrar las tareas creadas y almacenadas en el 
 * localstorage */
const loadTasks = () => {
    // Nuevamente obtenemos la información dentro de tasks
    const tasks = JSON.parse(localStorage.getItem('tasks')) || '[]';
    /** Por cada tarea que exista la vamos a agregar en el contenedor 
     * padre */
    tasks.forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
};
// Cargar automáticamente las tareas ya creadas dentro de la lista
loadTasks();
// 🌟 Actualizar la informacion cuando se editen las tareas
const updateLocalStorage = () => {
    /** Trae todos los elementos del contenedor padre <ul> y 
     * las almacena en un array */
    const tasks = Array.from(taskList.querySelectorAll('li')).map(
        (li) => li.firstChild.textContent
    );
    // Mostrar el array
    console.log(JSON.parse(localStorage.getItem('tasks')));
    /** Cargar nuevamente la información en el localstorage para
    actualizarla */
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// 📌 CAMBIAR EL COLOR A MODO DARK THEME
// Obtiene el botón para cambiar el tema mediante su ID y lo guarda en una variable
const themeToggleButton = document.getElementById('toggle-theme-btn');
// Recupera el tema guardado en localStorage y lo guarda en la variable currentTheme
const currentTheme = localStorage.getItem('theme');
// Aplica el tema guardado al cargar la página
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}
// Añade un listener al botón para que cuando se haga clic en él:
themeToggleButton.addEventListener('click', () => {
    // Alterna la clase 'dark-theme' en el body
    document.body.classList.toggle('dark-theme');
    // Verifica si el body tiene la clase 'dark-theme' y guarda 'dark' o 'light' según corresponda
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    // Guarda el tema actual en localStorage bajo la clave 'theme'
    localStorage.setItem('theme', theme);
    console.log('Tema guardado:', theme);
});
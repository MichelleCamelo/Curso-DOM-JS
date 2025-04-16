// 📌 MÉTODOS DE SELECCION
// Con métodos getElement...
// const itemId = document.getElementById('app');
// console.log(itemId);

// const itemsClass = document.getElementsByClassName('menu-items');
// console.log(itemsClass);

// const parrafo = document.getElementsByTagName('h1');
// console.log(parrafo);

// // Con  métodos querySelector
// const itemIdQuery = document.querySelector('#app');
// console.log(itemIdQuery);

// const itemsClassQuery = document.querySelectorAll('.menu-items');
// console.log(itemsClassQuery);

// 📌 NAVEGACIÓN ENTRE NODOS
document.addEventListener('DOMContentLoaded', () => {
    // Muestra el elemento con el id "parent"
    const parent = document.getElementById("parent");
    console.log(parent);
    // Muestra todos los elementos hijo del elemento padre
    const parentChildren = parent.children;
    console.log(parentChildren);
    // Muestra el elemento hijo en la 2a posición
    const secondChild = parent.children[1];
    console.log(secondChild);
    // Muestra el ultimo elemento hijo
    const lastChild = parent.lastElementChild;
    console.log(lastChild);
    // Muestra el elemento previo al elemento con id "parent"
    const previousSibling = parent.previousElementSibling;
    console.log(previousSibling);
    // Muestra el siguiente elemento hermano del elemento con id "parent"
    const nextSibling = parent.nextElementSibling;
    console.log(nextSibling);
});

// // 📌 MANIPULACIÓN DE ATRIBUTOS Y PROPIEDADES
// // Accedemos al input del DOM
// const inputCelda = document.querySelector('#nombre');
// // Modificar el value del input desde JavaScript
// inputCelda.value = 'Cambio Nombre a Apellido';
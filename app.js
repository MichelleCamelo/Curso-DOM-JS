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
// document.addEventListener('DOMContentLoaded', () => {
//     // Muestra el elemento con el id "parent"
//     const parent = document.getElementById("parent");
//     console.log(parent);
//     // Muestra todos los elementos hijo del elemento padre
//     const parentChildren = parent.children;
//     console.log(parentChildren);
//     // Muestra el elemento hijo en la 2a posición
//     const secondChild = parent.children[1];
//     console.log(secondChild);
//     // Muestra el ultimo elemento hijo
//     const lastChild = parent.lastElementChild;
//     console.log(lastChild);
//     // Muestra el elemento previo al elemento con id "parent"
//     const previousSibling = parent.previousElementSibling;
//     console.log(previousSibling);
//     // Muestra el siguiente elemento hermano del elemento con id "parent"
//     const nextSibling = parent.nextElementSibling;
//     console.log(nextSibling);
// });

// // 📌 MANIPULACIÓN DE ATRIBUTOS Y PROPIEDADES
// // Accedemos al input del DOM
// const inputCelda = document.querySelector('#nombre');
// // Modificar el value del input desde JavaScript
// inputCelda.value = 'Cambio Nombre a Apellido';

// 📌 MANIPULACIÓN DE TEXTO EN HTML
// let ejemplo = document.getElementById('ejemplo');
// // Considera solo el "Texto visible"
// console.log(ejemplo.innerText);
// // Considera tanto el "Texto visible" como el "Texto invisible"
// console.log(ejemplo.textContent);

// 📌 MODIFICANDO ESTILOS EN HTML
// Guardar el elemento dentro de la variable
// const title = document.querySelector('h1');
// // Cambiar el color del elemento a texto rojo
// title.style.color = 'red';
// // Seleccionamos el elemento con clase "menu"
// const menu = document.querySelector('.menu');
// // Se cambia el fondo por color morado, texto color verde y tamaño
// menu.style.backgroundColor = 'purple';
// menu.style.color = "green";
// menu.style.fontSize = "20px";
// // Se cambia el nombre de la clase de "menu" a "main-menu"
// menu.className = 'main-menu';

// 📌 MODIFICANDO LA VISIBILIDAD DE ELEMENTOS HTML
// Se crea una variable para el botón y otra para el menú

const botonToggle = document.querySelector("button");
const menu = document.querySelector(".menu");
// Estilos anteriores
const title = document.querySelector('h1');
title.style.color = 'red';
menu.style.backgroundColor = 'purple';
menu.style.color = "green";
menu.style.fontSize = "20px";
/** AHORA: Agregamos un evento para el botón
utilizamos el método toggle que tiene la propiedad classList */ 
botonToggle.addEventListener('click', () => {
    menu.classList.toggle("invisible");
});

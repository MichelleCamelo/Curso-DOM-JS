// 📌 CREAR EVENTOS Y COMO ELIMINARLOS
// Guardar elementos en variables
// const container = document.querySelector(".container");
// const boton = document.querySelector("button")
// /** 1. Eventos para cambiar el color del contenedor cuando se pasa
//  * el mouse por encima de este mismo
//  */
// container.addEventListener('mouseover', () => {
//     container.style.backgroundColor = 'blue';
//     container.style.color = 'white';
// });
// container.addEventListener('mouseout', () => {
//     container.style.backgroundColor = 'red';
//     container.style.color = 'black';
// });
// /** 2. Evento al darle click al botón
//  * a. Crear el evento del boton y accionarlo con click */
// boton.addEventListener('click', () => {
//     alert('Botón click');
// });
// // b. Crear funcion para remover el evento del boton luego de darle click
// const quietButton = () => {
//     alert('Hoalaaa');
//     boton.removeEventListener("click", quietButton)
// }
// boton.addEventListener("click", quietButton);

// 📌 eventObject()
// Seleccionar el botón con id btn
// const button = document.querySelector("#btn");
// // Definimos la función que se ejecutará cuando ocurra el evento 'click'
// // 'event' es el objeto evento (eventObject) que contiene información sobre el evento que ocurrió
// const buttonClickedEvent = (event) => {
//     // Imprimimos el objeto evento completo en la consola, contiene detalles del evento
//     console.log(event);
//     // Imprimimos el elemento HTML que disparó el evento (en este caso, el botón que se clickeó)
//     console.log(event.target);
//     // Imprimimos el 'id' del elemento que fue clickeado (si tiene un 'id')
//     console.log(event.target.id);
//     // Imprimimos el texto contenido dentro del botón clickeado
//     console.log(event.target.textContent);
// };

// /** Añadimos un listener de eventos al botón, que ejecuta la función 'buttonClickedEvent'
//  * cada vez que el botón es clickeado */
// button.addEventListener("click", buttonClickedEvent);
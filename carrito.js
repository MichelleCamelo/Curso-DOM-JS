// 📌 CREACIÓN DE ELEMENTOS CON innerHTML E insertAdjacentElement() 
// // 🌟PRIMER MÉTODO: innerHTML
// /** Obtenemos el elemento del DOM con el id "contentArea" y lo 
//  * almacenamos en la variable 'contentArea' */
// const contentArea = document.getElementById("contentArea");
// /** Usamos 'innerHTML' para reemplazar todo el contenido del elemento 
//  * 'contentArea' con un nuevo párrafo */
// contentArea.innerHTML = `<p style="color:red">Este es un nuevo parrafo realizado desde 
// js con el método innerHTML</p>`;

// // 🌟SEGUNDO MÉTODO: insertAdjacentHTML()
// /** Insertamos un nuevo párrafo al final del contenido actual de 
//  * 'contentArea' usando 'insertAdjacentHTML' con "beforeend". 
//  * "beforeend" inserta el contenido justo antes del cierre del 
//  * elemento, es decir, al final del elemento */
// contentArea.insertAdjacentHTML("beforeend", `<p style="color:green">Este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforeend</p>`);

// /** "beforebegin" inserta el contenido antes de que comience el elemento, 
//  * es decir, fuera del elemento y justo antes de él (miralo el html desde 
//  * el navegador, estara fuera de section) */
// contentArea.insertAdjacentHTML("beforebegin", `<p style="color:green">Este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforebegin</p>`);

// /** "afterend" inserta el contenido después del cierre del elemento, 
//  * es decir, fuera del elemento y justo después de él */
// contentArea.insertAdjacentHTML("afterend", `<p style="color:green">Este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterend</p>`);

// /** "afterbegin" inserta el contenido justo después de que comience el 
//  * elemento, es decir, al inicio del elemento */
// contentArea.insertAdjacentHTML("afterbegin", `<p style="color:green">Este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterbegin</p>`);

// 📌 AGREGANDO ELEMENTOS CON innerHTML E insertAdjacentHTML() 
// 🌟PRIMER MÉTODO: innerHTML
// const listArea = document.getElementById("listArea");
// listArea.innerHTML += `<li style="font-weight:bold; color:red; 
// font-size:20px"> Item 5 agregado con innerHTML</li>`;
// // 🌟SEGUNDO MÉTODO: insertAdjacentHTML()
// listArea.insertAdjacentHTML(`beforeend`, `<li style="
//     font-weight:bold; color:green; font-size:20px">
//     Item 6 agregado con insertAdjacentHTML()</li>`);

// 📌 CREANDO ELEMENTOS CON createElement()
// 🌟 Crear un nuevo elemento <p> y agregarle texto
// Crear el elemento párrafo
const nuevoPElement = document.createElement('p');
// Añadir contenido al párrafo usando textContent como solicitado
nuevoPElement.textContent = 'Fuí creado con Create Element';
// Aplicar estilos más llamativos directamente al elemento p
nuevoPElement.style.fontStyle = 'italic';
nuevoPElement.style.color = '#ffffff';
nuevoPElement.style.backgroundColor = '#b8a8eb';
nuevoPElement.style.padding = '12px 15px';
nuevoPElement.style.borderRadius = '8px';
nuevoPElement.style.boxShadow = '0 4px 8px #000000';
nuevoPElement.style.margin = '20px 0 10px';
nuevoPElement.style.fontSize = '16px';
nuevoPElement.style.fontWeight = 'bold';
nuevoPElement.style.textAlign = 'center';
nuevoPElement.style.textTransform = 'uppercase';
nuevoPElement.style.letterSpacing = '1px';
nuevoPElement.style.transition = 'transform 0.3s ease';

// Agregar efecto hover con JavaScript
nuevoPElement.onmouseover = function () {
    this.style.transform = 'scale(1.05)';
    this.style.backgroundColor = '#beffdf';
    this.style.color = '#000000';

};

nuevoPElement.onmouseout = function () {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#95c2ab';
    this.style.color = '#ffffff';


};
// Seleccionamos 'contentArea' y agregamos el nuevo <p> al final
const contentArea = document.getElementById('contentArea');
// Se añade como último hijo
contentArea.append(nuevoPElement);

// // 🌟 Seleccionamos 'listArea' para trabajar con la lista
// const listArea = document.getElementById(`listArea`);
// // 'prepend' agrega el nuevo <li> al principio de la lista
// const newItem = document.createElement(`li`);
// newItem.textContent = `Item 5 - prepend`;
// listArea.prepend(newItem);  // Se añade como primer hijo
// // 'before' inserta el nuevo <li> antes de 'listArea' (fuera de la lista)
// const newItem2 = document.createElement(`li`);
// newItem2.textContent = `Item 6 - before`;
// listArea.before(newItem2);  // Se añade justo antes de la lista
// // 'after' inserta el nuevo <li> después de 'listArea' (fuera de la lista)
// const newItem3 = document.createElement(`li`);
// newItem3.textContent = `Item 7 - after`;
// listArea.after(newItem3);  // Se añade justo después de la lista

// 📌 REMOVER ELEMENTOS CON remove() Y removeChild()
// 🌟 PRIMER MÉTODO: remove()
// Seleccionamos el primer <li> con querySelector
const firstItem = document.querySelector('li');
console.log(firstItem) // Mostramos en consola
// Eliminamos el primer <li> directamente usando el método remove()
firstItem.remove();  // Elimina el <li> que se seleccionó
// 🌟 SEGUNDO MÉTODO: removeChild()
/** Seleccionamos la lista <ul> y eliminamos su primer hijo
 * usando removeChild */
// const list = document.querySelector('ul');
// console.log(list)
// // Elimina el primer <li> dentro de la <ul>
// list.removeChild(list.firstElementChild);
// // 👀 La otra forma de eliminar elementos según posición
// // Seleccionamos por id a la lista
// const listForma2 = document.getElementById('listArea');
// console.log(listForma2)
// // Crear otra variable para atrapar la posicion de la lista (item 2)
// const removeItem = listForma2.children[1];
// // Eliminar el elemento con el método removeChild()
// listForma2.removeChild(removeItem);

// 📌 CLONACIÓN Y REEMPLAZO DE ELEMENTOS CON cloneNode y replaceChild
// 🌟 PRIMER MÉTODO: cloneNode()
// Seleccionar el elemento a clonar
// const contentArea = document.querySelector('#contentArea');
// const originalP = contentArea.querySelector('p');
// // Clonar el primer elemento p del contenedor padre
// const clonParagraph = originalP.cloneNode(true); // True para especificar que lo clone
// // Insertar el nodo clonado
// contentArea.append(clonParagraph);
// // Modificar el nodo clonado
// clonParagraph.textContent = 'Texto nuevo clonado';
// // Mostramos en consola
// console.log(clonParagraph);
// 🌟 SEGUNDO MÉTODO: replaceWith()
// Seleccionar los elementos
// const list = document.querySelector('#listArea');
// const originalP = contentArea.querySelector('p');
// // Clonar el primer elemento p del contenedor padre
// const clonParagraph = originalP.cloneNode(true); // True para especificar que lo clone
// // Seleccionando el tercer elemento de la lista.
// const itemToReplace = list.children[2];
// // Reemplazar el elemento con replaceWith()
// itemToReplace.replaceWith(clonParagraph);
// // Añadido... Solo para aplicar estilos
// clonParagraph.textContent = 'Cambio del texto - Uso de replaceWith';
// clonParagraph.style.color = 'red';
// clonParagraph.style.fontSize = '25px';
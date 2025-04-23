// 📌 DELEGACIÓN DE EVENTOS Y PREVENCIÓN DE COMPORTAMIENTO PREDETERMINADO
// ⚡ Como NO se debería hacer / Sin delegación de eventos
// const itemsChild = document.querySelectorAll('li');
// console.log(itemsChild);
// itemsChild.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.classList.toggle('highlight');
//         console.log(item);
//     });
// });
// Método con getElementById
const itemsChild = document.getElementById('soyunID');
console.log(itemsChild);
// Método con querySelector
const listParent = document.querySelector('ul');
console.log(listParent);

// 🌟 Como SÍ se debería hacer / con delegación y con validación
// const listParent = document.querySelector('ul');
// console.log(listParent);
// Se invoca al elemento declarado anteriormente 
listParent.addEventListener('click', (e) => {
    // La variable "listItems" ayuda a guardar el método closest()  
    const listItems = e.target.closest('li');
    // Validar si el elemento se activa para agregar el
    if (listItems) {
        listItems.classList.toggle('highlight');
        console.log(listItems);
    };
});

// Seleccionamos el formulario con el ID "myForm"
const form = document.getElementById("myForm");
// Añadimos un listener para el evento 'submit' del formulario
form.addEventListener("submit", (event) => {
    // Prevenimos el comportamiento por defecto del formulario, que es recargar la página
    event.preventDefault();
    // Obtenemos el valor del campo de texto "name" del formulario
    const name = form.elements["name"].value;
    console.log(name); // Imprimimos el nombre en la consola para verificar
    // Validamos que el nombre tenga al menos 3 letras
    if (name.length < 3) {
        alert("El nombre necesita más de 3 letras"); // Mostramos alerta si no cumple
        return; // Salimos de la función si la validación falla
    }
    // Obtenemos el valor del campo de texto "email" del formulario
    const email = form.elements["email"].value;
    console.log(email); // Imprimimos el email en la consola para verificar
    // Validamos que el email contenga un símbolo "@" para asegurarnos de que es válido
    if (!email.includes("@")) {
        alert("Please enter a valid email address"); // Mostramos alerta si el email no es válido
        return; // Salimos de la función si la validación falla
    }
    // Si todo está correcto, mostramos un mensaje de éxito
    alert("Formulario enviado exitosamente!");
    // Mostramos los valores de "name" y "email" en la consola
    console.log(`El nombre del usuario es: ${name} y su correo es: ${email}`);
    // Creamos un objeto con los datos del formulario
    const formData = {
        name: name, // Asignamos el valor de "name" al objeto
        email: email, // Asignamos el valor de "email" al objeto
    };
    // Imprimimos el objeto con los datos en la consola
    console.log(formData);
});

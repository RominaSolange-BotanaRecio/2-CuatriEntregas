document.addEventListener("DOMContentLoaded", () => {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(respuesta => respuesta.json())
        .then(datos => {
            datos.forEach(gato => {
                const tarjeta = document.createElement("div");
                tarjeta.className = "tarjeta";
                tarjeta.innerHTML = `
                    <img src="${gato.url}" alt="Imagen de gato">
                `;
                contenedorTarjetas.appendChild(tarjeta);
            });
        })
        .catch(error => console.error("Error al obtener las imágenes:", error));
});

// SE COMPRUEBA LA LIBRERÍA
window.addEventListener('DOMContentLoaded', () => {
    const estadoDiv = document.getElementById('estado');
    if (typeof mammoth !== 'undefined') {
        estadoDiv.textContent = "✓ Librería lista para procesar archivos.";
        estadoDiv.style.color = "#28a745";
    } else {
        estadoDiv.textContent = "✗ Error: La librería Mammoth no cargó. Revisa tu conexión a internet o descarga el archivo local.";
        estadoDiv.style.color = "#d9534f";
    }

    // Botón accesible que dispara el input de archivo oculto
    document.getElementById('btn-seleccionar').addEventListener('click', () => {
        document.getElementById('archivo-word').click();
    });

    // Referencias usadas por las acciones sobre el documento cargado (descargar / quitar)
    const inputArchivo = document.getElementById('archivo-word');
    const visor = document.getElementById('visor-contenido');
    const accionesDocumento = document.getElementById('acciones-documento');
    const btnDescargar = document.getElementById('btn-descargar');
    const btnQuitar = document.getElementById('btn-quitar');

    const MENSAJE_INICIAL = "El documento seleccionado se mostrará aquí...";

    // Se guarda el HTML convertido y el nombre base del archivo para la descarga
    let htmlConvertidoActual = null;
    let nombreBaseActual = null;

    function mostrarAccionesDocumento() {
        accionesDocumento.hidden = false;
    }

    function ocultarAccionesDocumento() {
        accionesDocumento.hidden = true;
    }

    // BOTÓN "QUITAR DOCUMENTO": vuelve el visor a su estado inicial
    btnQuitar.addEventListener('click', () => {
        inputArchivo.value = "";
        visor.textContent = MENSAJE_INICIAL;
        htmlConvertidoActual = null;
        nombreBaseActual = null;
        ocultarAccionesDocumento();
    });

    // BOTÓN "DESCARGAR COMO HTML": genera un archivo .html standalone a partir
    // del HTML ya convertido, sin volver a llamar a Mammoth
    btnDescargar.addEventListener('click', () => {
        if (!htmlConvertidoActual) {
            return;
        }

        const documentoCompleto = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>${nombreBaseActual}</title>
</head>
<body>
${htmlConvertidoActual}
</body>
</html>`;

        const blob = new Blob([documentoCompleto], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        const enlaceTemporal = document.createElement('a');
        enlaceTemporal.href = url;
        enlaceTemporal.download = `${nombreBaseActual}.html`;
        enlaceTemporal.click();

        URL.revokeObjectURL(url);
    });

    // SWITCH DE TEMA CLARO / OSCURO
    const switchTema = document.getElementById('switch-tema');
    const temaGuardado = localStorage.getItem('tema');

    // Sincroniza la posición visual del switch con el tema ya aplicado
    // (el tema en sí se aplicó antes, en el script inline del <head>, para evitar parpadeos)
    if (temaGuardado === 'dark') {
        switchTema.checked = true;
    }

    switchTema.addEventListener('change', () => {
        if (switchTema.checked) {
            document.documentElement.dataset.theme = 'dark';
            localStorage.setItem('tema', 'dark');
        } else {
            delete document.documentElement.dataset.theme;
            localStorage.setItem('tema', 'light');
        }
    });

    // SE PROCESA EL ARCHIVO CARGADO
    inputArchivo.addEventListener('change', async function (evento) {
        // Validación de existencia segura de archivos en la lista del input
        if (!evento.target.files || evento.target.files.length === 0) {
            return;
        }

        const archivoSeleccionado = evento.target.files[0];

        visor.innerHTML = "<em>Procesando y convirtiendo documento...</em>";
        ocultarAccionesDocumento();

        try {
            // Blob#arrayBuffer() reemplaza a FileReader#readAsArrayBuffer()
            const arrayBuffer = await archivoSeleccionado.arrayBuffer();

            // CONFIGURACIÓN DE ALTO RENDIMIENTO:
            // SE LE INDICA A MAMMOTH COMO TRATAR EL DOCUMENTO
            const opciones = {

                // MUESTRA EN UN FONDO GRIS LA IMAGEN PROCESADA
                convertImage: function (elemento) {
                    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='30'>
                        <rect width='100' height='30' style='fill:#ddd;'/>
                        <text x='10' y='20' style='font-family:Arial;font-size:12px;fill:#666;'>[Imagen Omitida]</text>
                    </svg>`;

                    return {
                        src: "data:image/svg+xml," + encodeURIComponent(svg)
                    };
                }
            };

            // SE PASA EL DOCUMENTO OPTIMIZADO A LA PAGINA
            const resultado = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer }, opciones);

            if (resultado.value.trim() === "") {
                visor.innerHTML = "<span style='color:orange;'> El documento está vacío o no contiene texto compatible.</span>";
                htmlConvertidoActual = null;
                nombreBaseActual = null;
            } else {
                visor.innerHTML = resultado.value;
                htmlConvertidoActual = resultado.value;
                // Nombre del archivo original sin la extensión .docx, para nombrar la descarga
                nombreBaseActual = archivoSeleccionado.name.replace(/\.docx$/i, "");
                mostrarAccionesDocumento();
            }
        } catch (error) {
            console.error(error);
            visor.innerHTML = "<span style='color:red;'>Error al leer o procesar el archivo.</span>";
            htmlConvertidoActual = null;
            nombreBaseActual = null;
        }
    });
});

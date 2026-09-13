// ==========================================================================
// DICCIONARIO DE TRADUCCIONES
// ==========================================================================
const TRADUCCIONES = {
    es: {
        tituloPagina: "Visor de Word en Pantalla",
        titulo: "Insertar y Visualizar Documento de Word",
        estadoVerificando: "Verificando conexión con librería Mammoth...",
        estadoOk: "✓ Librería lista para procesar archivos.",
        estadoError: "✗ Error: La librería Mammoth no cargó. Revisa tu conexión a internet o descarga el archivo local.",
        btnSeleccionar: "Haz clic aquí para seleccionar tu archivo (.docx)",
        labelArchivo: "Seleccionar archivo Word",
        contenidoTitulo: "Contenido del Documento:",
        visorInicial: "El documento seleccionado se mostrará aquí...",
        visorProcesando: "Procesando y convirtiendo documento...",
        visorVacio: "El documento está vacío o no contiene texto compatible.",
        visorErrorProceso: "Error al leer o procesar el archivo.",
        tipoInvalido: "Formato no válido. Por favor seleccioná un archivo .docx.",
        btnDescargar: "Descargar como HTML",
        btnCopiar: "Copiar HTML",
        btnCopiado: "¡Copiado!",
        btnQuitar: "Quitar documento",
        configAbrir: "Abrir configuración",
        configTema: "Tema",
        configClaro: "Claro",
        configOscuro: "Oscuro",
        configSistema: "Sistema",
        configIdioma: "Idioma",
        imagenOmitida: "[Imagen Omitida]",
        footerRepo: "Código en GitHub",
        footerMammoth: "Hecho con Mammoth.js"
    },
    en: {
        tituloPagina: "Word Document Viewer",
        titulo: "Insert and View a Word Document",
        estadoVerificando: "Checking connection with the Mammoth library...",
        estadoOk: "✓ Library ready to process files.",
        estadoError: "✗ Error: The Mammoth library did not load. Check your internet connection or download the file locally.",
        btnSeleccionar: "Click here to select your file (.docx)",
        labelArchivo: "Select Word file",
        contenidoTitulo: "Document Content:",
        visorInicial: "The selected document will be shown here...",
        visorProcesando: "Processing and converting document...",
        visorVacio: "The document is empty or has no compatible text.",
        visorErrorProceso: "Error reading or processing the file.",
        tipoInvalido: "Invalid format. Please select a .docx file.",
        btnDescargar: "Download as HTML",
        btnCopiar: "Copy HTML",
        btnCopiado: "Copied!",
        btnQuitar: "Remove document",
        configAbrir: "Open settings",
        configTema: "Theme",
        configClaro: "Light",
        configOscuro: "Dark",
        configSistema: "System",
        configIdioma: "Language",
        imagenOmitida: "[Image Omitted]",
        footerRepo: "Code on GitHub",
        footerMammoth: "Made with Mammoth.js"
    }
};

let idiomaActual = localStorage.getItem('idioma') || (navigator.language.startsWith('en') ? 'en' : 'es');

let estadoLibreriaOk = null;
// 'inicial' | 'procesando' | 'contenido' | 'vacio' | 'error' | 'tipoInvalido'
let visorEstado = 'inicial';

function t(clave) {
    return TRADUCCIONES[idiomaActual][clave] || clave;
}

function formatearTamano(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

window.addEventListener('DOMContentLoaded', () => {
    const estadoDiv = document.getElementById('estado');
    const inputArchivo = document.getElementById('archivo-word');
    const visor = document.getElementById('visor-contenido');
    const accionesDocumento = document.getElementById('acciones-documento');
    const btnDescargar = document.getElementById('btn-descargar');
    const btnCopiar = document.getElementById('btn-copiar');
    const btnQuitar = document.getElementById('btn-quitar');
    const btnConfig = document.getElementById('btn-config');
    const popupConfig = document.getElementById('popup-config');
    const tituloPaginaEl = document.getElementById('titulo-pagina');
    const zonaCarga = document.getElementById('btn-seleccionar');
    const infoArchivo = document.getElementById('info-archivo');

    let htmlConvertidoActual = null;
    let nombreBaseActual = null;

    // ======================================================
    // TRADUCCIÓN DE LA INTERFAZ
    // ======================================================
    function aplicarIdioma() {
        document.documentElement.lang = idiomaActual;
        tituloPaginaEl.textContent = t('tituloPagina');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
        });

        if (estadoLibreriaOk === true) {
            estadoDiv.textContent = t('estadoOk');
        } else if (estadoLibreriaOk === false) {
            estadoDiv.textContent = t('estadoError');
        } else {
            estadoDiv.textContent = t('estadoVerificando');
        }

        switch (visorEstado) {
            case 'inicial':
                visor.textContent = t('visorInicial');
                break;
            case 'procesando':
                visor.innerHTML = `<em>${t('visorProcesando')}</em>`;
                break;
            case 'vacio':
                visor.innerHTML = `<span style='color:orange;'>${t('visorVacio')}</span>`;
                break;
            case 'error':
                visor.innerHTML = `<span style='color:red;'>${t('visorErrorProceso')}</span>`;
                break;
            case 'tipoInvalido':
                visor.innerHTML = `<span style='color:red;'>${t('tipoInvalido')}</span>`;
                break;
            // 'contenido' no se retraduce: es el HTML propio del documento convertido
        }

        document.querySelectorAll('input[name="idioma"]').forEach(radio => {
            radio.checked = radio.value === idiomaActual;
        });
    }

    function cambiarIdioma(nuevoIdioma) {
        idiomaActual = nuevoIdioma;
        localStorage.setItem('idioma', idiomaActual);
        aplicarIdioma();
    }

    document.querySelectorAll('input[name="idioma"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) cambiarIdioma(e.target.value);
        });
    });

    // ======================================================
    // VERIFICACIÓN DE LA LIBRERÍA
    // ======================================================
    estadoLibreriaOk = typeof mammoth !== 'undefined';
    aplicarIdioma();

    // ======================================================
    // SELECCIÓN DE ARCHIVO (click en la zona)
    // ======================================================
    zonaCarga.addEventListener('click', () => {
        inputArchivo.click();
    });

    function mostrarAccionesDocumento() {
        accionesDocumento.hidden = false;
    }

    function ocultarAccionesDocumento() {
        accionesDocumento.hidden = true;
    }

    function mostrarInfoArchivo(archivo) {
        infoArchivo.textContent = `${archivo.name} • ${formatearTamano(archivo.size)}`;
        infoArchivo.hidden = false;
    }

    function ocultarInfoArchivo() {
        infoArchivo.hidden = true;
        infoArchivo.textContent = "";
    }

    // BOTÓN "QUITAR DOCUMENTO"
    btnQuitar.addEventListener('click', () => {
        inputArchivo.value = "";
        visorEstado = 'inicial';
        visor.textContent = t('visorInicial');
        htmlConvertidoActual = null;
        nombreBaseActual = null;
        ocultarAccionesDocumento();
        ocultarInfoArchivo();
    });

    // BOTÓN "DESCARGAR COMO HTML"
    btnDescargar.addEventListener('click', () => {
        if (!htmlConvertidoActual) return;

        const documentoCompleto = `<!DOCTYPE html>
<html lang="${idiomaActual}">
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

    // BOTÓN "COPIAR HTML"
    btnCopiar.addEventListener('click', async () => {
        if (!htmlConvertidoActual) return;
        try {
            await navigator.clipboard.writeText(htmlConvertidoActual);
            btnCopiar.textContent = t('btnCopiado');
            setTimeout(() => {
                btnCopiar.textContent = t('btnCopiar');
            }, 1500);
        } catch (error) {
            console.error(error);
        }
    });

    // ======================================================
    // POPUP DE CONFIGURACIÓN (tema + idioma)
    // ======================================================
    function abrirPopup() {
        popupConfig.hidden = false;
        btnConfig.setAttribute('aria-expanded', 'true');
    }

    function cerrarPopup() {
        popupConfig.hidden = true;
        btnConfig.setAttribute('aria-expanded', 'false');
    }

    btnConfig.addEventListener('click', (e) => {
        e.stopPropagation();
        popupConfig.hidden ? abrirPopup() : cerrarPopup();
    });

    document.addEventListener('click', (e) => {
        if (!popupConfig.hidden && !popupConfig.contains(e.target) && e.target !== btnConfig) {
            cerrarPopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popupConfig.hidden) {
            cerrarPopup();
            btnConfig.focus();
        }
    });

    // ======================================================
    // TEMA: CLARO / OSCURO / SISTEMA
    // ======================================================
    const mediaOscuro = window.matchMedia('(prefers-color-scheme: dark)');

    function aplicarTema(tema) {
        if (tema === 'dark') {
            document.documentElement.dataset.theme = 'dark';
        } else if (tema === 'light') {
            delete document.documentElement.dataset.theme;
        } else {
            if (mediaOscuro.matches) {
                document.documentElement.dataset.theme = 'dark';
            } else {
                delete document.documentElement.dataset.theme;
            }
        }
    }

    function guardarYAplicarTema(tema) {
        localStorage.setItem('tema', tema);
        aplicarTema(tema);
    }

    const temaGuardado = localStorage.getItem('tema') || 'system';
    document.querySelectorAll('input[name="tema"]').forEach(radio => {
        radio.checked = radio.value === temaGuardado;
        radio.addEventListener('change', (e) => {
            if (e.target.checked) guardarYAplicarTema(e.target.value);
        });
    });
    aplicarTema(temaGuardado);

    mediaOscuro.addEventListener('change', () => {
        const temaActivo = localStorage.getItem('tema') || 'system';
        if (temaActivo === 'system') {
            aplicarTema('system');
        }
    });

    // ======================================================
    // PROCESAMIENTO DEL ARCHIVO (compartido entre click y drag&drop)
    // ======================================================
    async function procesarArchivo(archivo) {
        const esDocx = /\.docx$/i.test(archivo.name);

        if (!esDocx) {
            visorEstado = 'tipoInvalido';
            visor.innerHTML = `<span style='color:red;'>${t('tipoInvalido')}</span>`;
            ocultarAccionesDocumento();
            ocultarInfoArchivo();
            return;
        }

        mostrarInfoArchivo(archivo);
        visorEstado = 'procesando';
        visor.innerHTML = `<em>${t('visorProcesando')}</em>`;
        ocultarAccionesDocumento();

        try {
            const arrayBuffer = await archivo.arrayBuffer();

            const opciones = {
                convertImage: mammoth.images.imgElement(function (elemento) {
                    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='30'>
                        <rect width='100' height='30' style='fill:#ddd;'/>
                        <text x='10' y='20' style='font-family:Arial;font-size:12px;fill:#666;'>${t('imagenOmitida')}</text>
                    </svg>`;

                    return Promise.resolve({
                        src: "data:image/svg+xml," + encodeURIComponent(svg)
                    });
                })
            };

            const resultado = await mammoth.convertToHtml({ arrayBuffer: arrayBuffer }, opciones);

            if (resultado.value.trim() === "") {
                visorEstado = 'vacio';
                visor.innerHTML = `<span style='color:orange;'>${t('visorVacio')}</span>`;
                htmlConvertidoActual = null;
                nombreBaseActual = null;
            } else {
                visorEstado = 'contenido';
                visor.innerHTML = resultado.value;
                htmlConvertidoActual = resultado.value;
                nombreBaseActual = archivo.name.replace(/\.docx$/i, "");
                mostrarAccionesDocumento();
            }
        } catch (error) {
            console.error(error);
            visorEstado = 'error';
            visor.innerHTML = `<span style='color:red;'>${t('visorErrorProceso')}</span>`;
            htmlConvertidoActual = null;
            nombreBaseActual = null;
        }
    }

    // Selección vía input de archivo
    inputArchivo.addEventListener('change', (evento) => {
        if (!evento.target.files || evento.target.files.length === 0) return;
        procesarArchivo(evento.target.files[0]);
    });

    // ======================================================
    // DRAG & DROP
    // ======================================================
    // Evita que el navegador abra el archivo si se suelta fuera de la zona
    ['dragover', 'drop'].forEach(evt => {
        document.addEventListener(evt, (e) => e.preventDefault());
    });

    ['dragenter', 'dragover'].forEach(evt => {
        zonaCarga.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation();
            zonaCarga.classList.add('input-zona--arrastrando');
        });
    });

    ['dragleave', 'drop'].forEach(evt => {
        zonaCarga.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation();
            zonaCarga.classList.remove('input-zona--arrastrando');
        });
    });

    zonaCarga.addEventListener('drop', (e) => {
        const archivos = e.dataTransfer.files;
        if (archivos && archivos.length > 0) {
            procesarArchivo(archivos[0]);
        }
    });
});

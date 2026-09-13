// ==========================================================================
// DICCIONARIO DE TRADUCCIONES (10 idiomas más hablados del mundo)
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
        configAccesibilidad: "Accesibilidad",
        configContraste: "Alto contraste",
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
        configAccesibilidad: "Accessibility",
        configContraste: "High contrast",
        configIdioma: "Language",
        imagenOmitida: "[Image Omitted]",
        footerRepo: "Code on GitHub",
        footerMammoth: "Made with Mammoth.js"
    },
    fr: {
        tituloPagina: "Visionneuse de documents Word",
        titulo: "Insérer et visualiser un document Word",
        estadoVerificando: "Vérification de la connexion à la bibliothèque Mammoth...",
        estadoOk: "✓ Bibliothèque prête à traiter les fichiers.",
        estadoError: "✗ Erreur : la bibliothèque Mammoth n'a pas pu être chargée. Vérifiez votre connexion Internet ou téléchargez le fichier localement.",
        btnSeleccionar: "Cliquez ici pour sélectionner votre fichier (.docx)",
        labelArchivo: "Sélectionner un fichier Word",
        contenidoTitulo: "Contenu du document :",
        visorInicial: "Le document sélectionné s'affichera ici...",
        visorProcesando: "Traitement et conversion du document...",
        visorVacio: "Le document est vide ou ne contient pas de texte compatible.",
        visorErrorProceso: "Erreur lors de la lecture ou du traitement du fichier.",
        tipoInvalido: "Format non valide. Veuillez sélectionner un fichier .docx.",
        btnDescargar: "Télécharger en HTML",
        btnCopiar: "Copier le HTML",
        btnCopiado: "Copié !",
        btnQuitar: "Supprimer le document",
        configAbrir: "Ouvrir les paramètres",
        configTema: "Thème",
        configClaro: "Clair",
        configOscuro: "Sombre",
        configSistema: "Système",
        configAccesibilidad: "Accessibilité",
        configContraste: "Contraste élevé",
        configIdioma: "Langue",
        imagenOmitida: "[Image omise]",
        footerRepo: "Code sur GitHub",
        footerMammoth: "Fait avec Mammoth.js"
    },
    pt: {
        tituloPagina: "Visualizador de Documentos Word",
        titulo: "Inserir e Visualizar Documento do Word",
        estadoVerificando: "Verificando conexão com a biblioteca Mammoth...",
        estadoOk: "✓ Biblioteca pronta para processar arquivos.",
        estadoError: "✗ Erro: a biblioteca Mammoth não carregou. Verifique sua conexão com a internet ou baixe o arquivo localmente.",
        btnSeleccionar: "Clique aqui para selecionar seu arquivo (.docx)",
        labelArchivo: "Selecionar arquivo do Word",
        contenidoTitulo: "Conteúdo do Documento:",
        visorInicial: "O documento selecionado será exibido aqui...",
        visorProcesando: "Processando e convertendo documento...",
        visorVacio: "O documento está vazio ou não contém texto compatível.",
        visorErrorProceso: "Erro ao ler ou processar o arquivo.",
        tipoInvalido: "Formato inválido. Selecione um arquivo .docx.",
        btnDescargar: "Baixar como HTML",
        btnCopiar: "Copiar HTML",
        btnCopiado: "Copiado!",
        btnQuitar: "Remover documento",
        configAbrir: "Abrir configurações",
        configTema: "Tema",
        configClaro: "Claro",
        configOscuro: "Escuro",
        configSistema: "Sistema",
        configAccesibilidad: "Acessibilidade",
        configContraste: "Alto contraste",
        configIdioma: "Idioma",
        imagenOmitida: "[Imagem Omitida]",
        footerRepo: "Código no GitHub",
        footerMammoth: "Feito com Mammoth.js"
    },
    ru: {
        tituloPagina: "Просмотр документов Word",
        titulo: "Вставить и просмотреть документ Word",
        estadoVerificando: "Проверка подключения к библиотеке Mammoth...",
        estadoOk: "✓ Библиотека готова к обработке файлов.",
        estadoError: "✗ Ошибка: библиотека Mammoth не загрузилась. Проверьте подключение к интернету или скачайте файл локально.",
        btnSeleccionar: "Нажмите здесь, чтобы выбрать файл (.docx)",
        labelArchivo: "Выбрать файл Word",
        contenidoTitulo: "Содержимое документа:",
        visorInicial: "Выбранный документ будет показан здесь...",
        visorProcesando: "Обработка и конвертация документа...",
        visorVacio: "Документ пуст или не содержит поддерживаемого текста.",
        visorErrorProceso: "Ошибка при чтении или обработке файла.",
        tipoInvalido: "Неверный формат. Пожалуйста, выберите файл .docx.",
        btnDescargar: "Скачать как HTML",
        btnCopiar: "Копировать HTML",
        btnCopiado: "Скопировано!",
        btnQuitar: "Удалить документ",
        configAbrir: "Открыть настройки",
        configTema: "Тема",
        configClaro: "Светлая",
        configOscuro: "Тёмная",
        configSistema: "Системная",
        configAccesibilidad: "Специальные возможности",
        configContraste: "Высокая контрастность",
        configIdioma: "Язык",
        imagenOmitida: "[Изображение пропущено]",
        footerRepo: "Код на GitHub",
        footerMammoth: "Сделано с Mammoth.js"
    },
    zh: {
        tituloPagina: "Word 文档查看器",
        titulo: "插入并查看 Word 文档",
        estadoVerificando: "正在检查与 Mammoth 库的连接……",
        estadoOk: "✓ 库已准备好处理文件。",
        estadoError: "✗ 错误：Mammoth 库未能加载。请检查您的网络连接或下载本地文件。",
        btnSeleccionar: "点击此处选择您的文件（.docx）",
        labelArchivo: "选择 Word 文件",
        contenidoTitulo: "文档内容：",
        visorInicial: "所选文档将在此处显示……",
        visorProcesando: "正在处理并转换文档……",
        visorVacio: "文档为空或不包含可识别的文本。",
        visorErrorProceso: "读取或处理文件时出错。",
        tipoInvalido: "格式无效。请选择 .docx 文件。",
        btnDescargar: "下载为 HTML",
        btnCopiar: "复制 HTML",
        btnCopiado: "已复制！",
        btnQuitar: "移除文档",
        configAbrir: "打开设置",
        configTema: "主题",
        configClaro: "浅色",
        configOscuro: "深色",
        configSistema: "跟随系统",
        configAccesibilidad: "无障碍",
        configContraste: "高对比度",
        configIdioma: "语言",
        imagenOmitida: "[图片已省略]",
        footerRepo: "GitHub 上的代码",
        footerMammoth: "由 Mammoth.js 构建"
    },
    hi: {
        tituloPagina: "वर्ड दस्तावेज़ व्यूअर",
        titulo: "वर्ड दस्तावेज़ डालें और देखें",
        estadoVerificando: "Mammoth लाइब्रेरी से कनेक्शन जाँचा जा रहा है...",
        estadoOk: "✓ फ़ाइलें प्रोसेस करने के लिए लाइब्रेरी तैयार है।",
        estadoError: "✗ त्रुटि: Mammoth लाइब्रेरी लोड नहीं हुई। अपना इंटरनेट कनेक्शन जाँचें या फ़ाइल स्थानीय रूप से डाउनलोड करें।",
        btnSeleccionar: "अपनी फ़ाइल (.docx) चुनने के लिए यहाँ क्लिक करें",
        labelArchivo: "वर्ड फ़ाइल चुनें",
        contenidoTitulo: "दस्तावेज़ की सामग्री:",
        visorInicial: "चयनित दस्तावेज़ यहाँ दिखाया जाएगा...",
        visorProcesando: "दस्तावेज़ को प्रोसेस और परिवर्तित किया जा रहा है...",
        visorVacio: "दस्तावेज़ खाली है या इसमें संगत टेक्स्ट नहीं है।",
        visorErrorProceso: "फ़ाइल पढ़ने या प्रोसेस करने में त्रुटि हुई।",
        tipoInvalido: "अमान्य प्रारूप। कृपया एक .docx फ़ाइल चुनें।",
        btnDescargar: "HTML के रूप में डाउनलोड करें",
        btnCopiar: "HTML कॉपी करें",
        btnCopiado: "कॉपी हो गया!",
        btnQuitar: "दस्तावेज़ हटाएँ",
        configAbrir: "सेटिंग्स खोलें",
        configTema: "थीम",
        configClaro: "हल्का",
        configOscuro: "गहरा",
        configSistema: "सिस्टम",
        configAccesibilidad: "सुगम्यता",
        configContraste: "उच्च कंट्रास्ट",
        configIdioma: "भाषा",
        imagenOmitida: "[छवि छोड़ी गई]",
        footerRepo: "GitHub पर कोड",
        footerMammoth: "Mammoth.js से बनाया गया"
    },
    ar: {
        tituloPagina: "عارض مستندات وورد",
        titulo: "إدراج وعرض مستند وورد",
        estadoVerificando: "جارٍ التحقق من الاتصال بمكتبة Mammoth...",
        estadoOk: "✓ المكتبة جاهزة لمعالجة الملفات.",
        estadoError: "✗ خطأ: تعذّر تحميل مكتبة Mammoth. تحقق من اتصالك بالإنترنت أو نزّل الملف محليًا.",
        btnSeleccionar: "انقر هنا لاختيار ملفك (.docx)",
        labelArchivo: "اختر ملف وورد",
        contenidoTitulo: "محتوى المستند:",
        visorInicial: "سيظهر المستند المحدد هنا...",
        visorProcesando: "جارٍ معالجة المستند وتحويله...",
        visorVacio: "المستند فارغ أو لا يحتوي على نص متوافق.",
        visorErrorProceso: "حدث خطأ أثناء قراءة الملف أو معالجته.",
        tipoInvalido: "صيغة غير صالحة. الرجاء اختيار ملف .docx.",
        btnDescargar: "تنزيل كملف HTML",
        btnCopiar: "نسخ HTML",
        btnCopiado: "تم النسخ!",
        btnQuitar: "إزالة المستند",
        configAbrir: "فتح الإعدادات",
        configTema: "المظهر",
        configClaro: "فاتح",
        configOscuro: "داكن",
        configSistema: "النظام",
        configAccesibilidad: "إمكانية الوصول",
        configContraste: "تباين عالٍ",
        configIdioma: "اللغة",
        imagenOmitida: "[تم حذف الصورة]",
        footerRepo: "الكود على GitHub",
        footerMammoth: "صُنع باستخدام Mammoth.js"
    },
    bn: {
        tituloPagina: "ওয়ার্ড ডকুমেন্ট ভিউয়ার",
        titulo: "ওয়ার্ড ডকুমেন্ট যুক্ত করুন এবং দেখুন",
        estadoVerificando: "Mammoth লাইব্রেরির সংযোগ যাচাই করা হচ্ছে...",
        estadoOk: "✓ ফাইল প্রক্রিয়া করার জন্য লাইব্রেরি প্রস্তুত।",
        estadoError: "✗ ত্রুটি: Mammoth লাইব্রেরি লোড হয়নি। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন বা ফাইলটি স্থানীয়ভাবে ডাউনলোড করুন।",
        btnSeleccionar: "আপনার ফাইল (.docx) নির্বাচন করতে এখানে ক্লিক করুন",
        labelArchivo: "ওয়ার্ড ফাইল নির্বাচন করুন",
        contenidoTitulo: "ডকুমেন্টের বিষয়বস্তু:",
        visorInicial: "নির্বাচিত ডকুমেন্ট এখানে দেখানো হবে...",
        visorProcesando: "ডকুমেন্ট প্রক্রিয়া ও রূপান্তর করা হচ্ছে...",
        visorVacio: "ডকুমেন্টটি খালি অথবা সামঞ্জস্যপূর্ণ টেক্সট নেই।",
        visorErrorProceso: "ফাইল পড়তে বা প্রক্রিয়া করতে ত্রুটি হয়েছে।",
        tipoInvalido: "অবৈধ ফরম্যাট। অনুগ্রহ করে একটি .docx ফাইল নির্বাচন করুন।",
        btnDescargar: "HTML হিসেবে ডাউনলোড করুন",
        btnCopiar: "HTML কপি করুন",
        btnCopiado: "কপি হয়েছে!",
        btnQuitar: "ডকুমেন্ট সরান",
        configAbrir: "সেটিংস খুলুন",
        configTema: "থিম",
        configClaro: "হালকা",
        configOscuro: "গাঢ়",
        configSistema: "সিস্টেম",
        configAccesibilidad: "প্রবেশযোগ্যতা",
        configContraste: "উচ্চ কনট্রাস্ট",
        configIdioma: "ভাষা",
        imagenOmitida: "[ছবি বাদ দেওয়া হয়েছে]",
        footerRepo: "GitHub-এ কোড",
        footerMammoth: "Mammoth.js দিয়ে তৈরি"
    },
    ur: {
        tituloPagina: "ورڈ دستاویز ویور",
        titulo: "ورڈ دستاویز داخل کریں اور دیکھیں",
        estadoVerificando: "Mammoth لائبریری کے کنکشن کی جانچ ہو رہی ہے...",
        estadoOk: "✓ فائلیں پراسیس کرنے کے لیے لائبریری تیار ہے۔",
        estadoError: "✗ خرابی: Mammoth لائبریری لوڈ نہیں ہوئی۔ اپنا انٹرنیٹ کنکشن چیک کریں یا فائل مقامی طور پر ڈاؤن لوڈ کریں۔",
        btnSeleccionar: "اپنی فائل (.docx) منتخب کرنے کے لیے یہاں کلک کریں",
        labelArchivo: "ورڈ فائل منتخب کریں",
        contenidoTitulo: "دستاویز کا مواد:",
        visorInicial: "منتخب کردہ دستاویز یہاں دکھائی جائے گی...",
        visorProcesando: "دستاویز پراسیس اور تبدیل کی جا رہی ہے...",
        visorVacio: "دستاویز خالی ہے یا اس میں مطابقت پذیر متن موجود نہیں۔",
        visorErrorProceso: "فائل پڑھنے یا پراسیس کرنے میں خرابی ہوئی۔",
        tipoInvalido: "غلط فارمیٹ۔ براہ کرم ایک .docx فائل منتخب کریں۔",
        btnDescargar: "HTML کے طور پر ڈاؤن لوڈ کریں",
        btnCopiar: "HTML کاپی کریں",
        btnCopiado: "کاپی ہو گیا!",
        btnQuitar: "دستاویز ہٹائیں",
        configAbrir: "ترتیبات کھولیں",
        configTema: "تھیم",
        configClaro: "ہلکا",
        configOscuro: "گہرا",
        configSistema: "سسٹم",
        configAccesibilidad: "رسائی",
        configContraste: "زیادہ تضاد",
        configIdioma: "زبان",
        imagenOmitida: "[تصویر چھوڑ دی گئی]",
        footerRepo: "GitHub پر کوڈ",
        footerMammoth: "Mammoth.js کے ساتھ بنایا گیا"
    }
};

let idiomaActual = localStorage.getItem('idioma') || (navigator.language.startsWith('en') ? 'en' : 'es');

let estadoLibreriaOk = null;
// 'inicial' | 'procesando' | 'contenido' | 'vacio' | 'error' | 'tipoInvalido'
let visorEstado = 'inicial';

function t(clave) {
    return TRADUCCIONES[idiomaActual][clave] || clave;
}

function esRTL(idioma) {
    return idioma === 'ar' || idioma === 'ur';
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
    const checkContraste = document.getElementById('check-contraste');

    let htmlConvertidoActual = null;
    let nombreBaseActual = null;

    // ======================================================
    // TRADUCCIÓN DE LA INTERFAZ
    // ======================================================
    function aplicarIdioma() {
        document.documentElement.lang = idiomaActual;
        document.documentElement.dir = esRTL(idiomaActual) ? 'rtl' : 'ltr';
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
    // POPUP DE CONFIGURACIÓN
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
    // ALTO CONTRASTE
    // ======================================================
    function aplicarContraste(activo) {
        if (activo) {
            document.documentElement.dataset.contraste = 'true';
        } else {
            delete document.documentElement.dataset.contraste;
        }
    }

    const contrasteGuardado = localStorage.getItem('contraste') === 'true';
    checkContraste.checked = contrasteGuardado;
    aplicarContraste(contrasteGuardado);

    checkContraste.addEventListener('change', (e) => {
        const activo = e.target.checked;
        localStorage.setItem('contraste', activo ? 'true' : 'false');
        aplicarContraste(activo);
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

    inputArchivo.addEventListener('change', (evento) => {
        if (!evento.target.files || evento.target.files.length === 0) return;
        procesarArchivo(evento.target.files[0]);
    });

    // ======================================================
    // DRAG & DROP
    // ======================================================
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

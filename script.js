/**
 * Arreglo de objetos con todas las preguntas, opciones, respuesta correcta
 * y justificaciones específicas tanto para aciertos como para cada equivocación,
 * basado en el archivo Cuestionario_Examen_Movil_Integral_P2.docx.
 */
const quizData = [
  {
    id: 1,
    question: "¿Qué medida de control de autenticación y autorización previene de manera adecuada el acceso no autorizado tras una sesión activa?",
    options: [
      "Permitir que el token JWT no tenga fecha de expiración configurada.",
      "Almacenar la contraseña del usuario en texto plano dentro de la memoria caché.",
      "Omitir la validación de roles en el servidor confiando ciegamente en la interfaz móvil.",
      "Implementar expiración estricta de tokens de sesión y borrado seguro tras la inactividad."
    ],
    correctIndex: 3,
    generalJustification: "La gestión segura de sesiones exige que los tokens (como JWT) tengan un tiempo de vida limitado (TTL corto) y se eliminen de forma segura cuando el usuario cierra sesión o permanece inactivo, evitando el secuestro de sesión si el dispositivo queda desatendido o el token es comprometido.",
    optionExplanations: [
      "Un token JWT sin fecha de expiración permite que un atacante que lo intercepte tenga acceso perpetuo a la cuenta.",
      "Guardar contraseñas en texto plano en caché expone las credenciales ante cualquier acceso físico o malware en el dispositivo.",
      "La interfaz móvil puede ser modificada por el usuario; la autorización y validación de roles siempre deben ejecutarse en el servidor (backend).",
      "Limitar la vigencia del token e invalidarlo por inactividad reduce drásticamente la ventana de exposición ante accesos no autorizados."
    ]
  },
  {
    id: 2,
    question: "¿Cuál es la contramedida más efectiva para mitigar el riesgo de ingeniería inversa y manipulación de código binario en aplicaciones móviles?",
    options: [
      "Almacenar todas las credenciales cifradas en archivos de texto plano.",
      "Ofuscación de código y detección de root/jailbreak.",
      "Utilizar exclusivamente conexiones HTTP sin validación de certificados.",
      "Deshabilitar la depuración únicamente en entornos de desarrollo de prueba."
    ],
    correctIndex: 1,
    generalJustification: "La ofuscación de código renombra clases, métodos y símbolos dificultando la lectura del binario decompilado, mientras que la detección de root/jailbreak identifica entornos comprometidos donde suelen ejecutarse herramientas de instrumentación dinámica (como Frida) o parches de binarios.",
    optionExplanations: [
      "Guardar credenciales en archivos de texto plano dentro del paquete facilita su extracción inmediata al descomprimir el APK/IPA.",
      "Combinar ofuscación (ProGuard/R8, ofuscación en Dart) con detección de entornos comprometidos eleva significativamente el costo de la ingeniería inversa.",
      "Usar HTTP sin validación vulnera el tránsito de red, no protege el binario y además expone los datos a ataques Man-in-the-Middle.",
      "La depuración debe deshabilitarse obligatoriamente en entornos de producción (release), no solo en entornos de prueba."
    ]
  },
  {
    id: 3,
    question: "¿Cuál es el propósito principal de implementar la verificación de integridad del entorno (Root/Jailbreak Detection) en aplicaciones de alta seguridad?",
    options: [
      "Aumentar de manera artificial el rendimiento del procesador gráfico de la aplicación.",
      "Identificar si el dispositivo ha vulnerado los controles de seguridad del sistema operativo para restringir operaciones críticas.",
      "Impedir de forma permanente que el usuario descargue actualizaciones desde la tienda oficial.",
      "Obligar al usuario a cambiar el proveedor de servicios de telefonía móvil."
    ],
    correctIndex: 1,
    generalJustification: "En un dispositivo con Root (Android) o Jailbreak (iOS), el aislamiento entre aplicaciones (Application Sandbox) se rompe. Detectar esta condición permite a la app bloquear su ejecución o restringir transacciones sensibles antes de que los datos sean comprometidos.",
    optionExplanations: [
      "La detección de root/jailbreak es un control de seguridad y no tiene ninguna relación con el rendimiento de la GPU.",
      "Detecta si el sandbox del sistema operativo fue vulnerado para proteger llaves criptográficas, almacenamiento local y operaciones críticas.",
      "No controla ni bloquea las descargas o actualizaciones de Google Play Store o Apple App Store.",
      "El estado de root/jailbreak depende del sistema operativo del dispositivo, no de la operadora telefónica."
    ]
  },
  {
    id: 4,
    question: "¿Cuál es la función principal del archivo `pubspec.yaml` en un proyecto de Flutter?",
    options: [
      "Registrar y gestionar las dependencias, paquetes, fuentes y recursos (assets) del proyecto.",
      "Definir las reglas de compilación para C y C++.",
      "Guardar las contraseñas cifradas del usuario final.",
      "Almacenar el código fuente del método `main()`."
    ],
    correctIndex: 0,
    generalJustification: "El archivo `pubspec.yaml` es el manifiesto de configuración de paquetes en proyectos Dart y Flutter: define metadatos del proyecto (nombre, versión), dependencias de terceros (`dependencies`, `dev_dependencies`), imágenes (`assets`) y tipografías (`fonts`).",
    optionExplanations: [
      "Es el archivo central donde Flutter administra librerías externas, versiones del SDK, fuentes e imágenes del proyecto.",
      "Las reglas de compilación de C/C++ se definen en archivos como `CMakeLists.txt` o configuraciones de NDK, no en `pubspec.yaml`.",
      "El archivo `pubspec.yaml` es parte del código fuente estático del proyecto; jamás debe almacenar contraseñas de usuarios.",
      "El punto de entrada `main()` se escribe en código Dart (usualmente en `lib/main.dart`), no en un archivo YAML."
    ]
  },
  {
    id: 5,
    question: "¿Qué widget proporciona un menú lateral deslizable que suele ocultarse y mostrarse al presionar un botón de tipo hamburguesa?",
    options: [
      "Drawer",
      "TabBar",
      "Align",
      "Center"
    ],
    correctIndex: 0,
    generalJustification: "El widget `Drawer` en Material Design se integra dentro de un `Scaffold` (en la propiedad `drawer`) para mostrar un panel de navegación lateral deslizable desde el borde de la pantalla.",
    optionExplanations: [
      "`Drawer` crea el panel lateral deslizable estándar que se abre automáticamente con el ícono de menú (hamburguesa) en el `AppBar`.",
      "`TabBar` muestra una fila horizontal de pestañas, no un panel lateral deslizable.",
      "`Align` es un widget de diseño (layout) que posiciona a su hijo dentro de sí mismo según una alineación dada.",
      "`Center` es un widget de posicionamiento que simplemente centra a su widget hijo disponible."
    ]
  },
  {
    id: 6,
    question: "¿Qué comando descarga e instala las dependencias que han sido declaradas previamente en el archivo `pubspec.yaml`?",
    options: [
      "flutter pub add",
      "flutter pub get",
      "flutter build apk",
      "flutter analyze"
    ],
    correctIndex: 1,
    generalJustification: "El comando `flutter pub get` lee las dependencias declaradas en `pubspec.yaml`, resuelve las versiones compatibles, descarga los paquetes desde pub.dev a la caché local y actualiza el archivo `pubspec.lock`.",
    optionExplanations: [
      "`flutter pub add <paquete>` sirve para agregar una nueva dependencia al `pubspec.yaml` desde la terminal, pero cuando ya fueron declaradas previamente en el archivo se utiliza `flutter pub get`.",
      "`flutter pub get` sincroniza, descarga e instala todos los paquetes listados en el archivo `pubspec.yaml`.",
      "`flutter build apk` compila el proyecto en un paquete instalable `.apk` para Android.",
      "`flutter analyze` ejecuta el analizador estático de código Dart para encontrar errores y advertencias de sintaxis o estilo."
    ]
  },
  {
    id: 7,
    question: "¿Qué mecanismo criptográfico debe implementarse obligatoriamente para proteger datos sensibles almacenados localmente en el dispositivo móvil?",
    options: [
      "Android Keystore / iOS Keychain.",
      "Hash MD5 sin sal (salt) en la base de datos local SQLite",
      "Algoritmo de codificación Base64 en el almacenamiento compartido.",
      "Almacenamiento directo en NSUserDefaults con cifrado simétrico fijo."
    ],
    correctIndex: 0,
    generalJustification: "Tanto Android Keystore como iOS Keychain están respaldados por hardware seguro (TEE / Secure Enclave), permitiendo generar y resguardar llaves criptográficas y secretos sin exponerlos en memoria ni en archivos accesibles.",
    optionExplanations: [
      "Android Keystore e iOS Keychain proveen almacenamiento seguro respaldado por hardware a nivel de sistema operativo para llaves y tokens sensibles.",
      "MD5 es un algoritmo criptográficamente roto y vulnerable a colisiones; además, un hash sin salt es fácil de revertir con tablas Rainbow.",
      "Base64 NO es un algoritmo de cifrado, es únicamente un esquema de codificación reversible por cualquiera sin necesidad de una clave.",
      "`NSUserDefaults` / `SharedPreferences` guardan archivos XML/plist locales y usar una llave simétrica fija (hardcoded) permite descifrarlos fácilmente."
    ]
  },
  {
    id: 8,
    question: "¿Cuál de las siguientes opciones describe mejor el propósito del widget `SingleChildScrollView`?",
    options: [
      "Mostrar elementos en forma de cuadrícula",
      "Crear listas infinitas optimizadas con carga perezosa",
      "Permitir que un único widget hijo (como un formulario largo) se vuelva desplazable para evitar desbordamientos en pantalla.",
      "Dibujar un rectángulo temporal para simular la carga de contenido"
    ],
    correctIndex: 2,
    generalJustification: "`SingleChildScrollView` envuelve a un único widget hijo (por ejemplo, una `Column` con múltiples campos de un formulario) para dotarlo de desplazamiento (scroll) cuando su contenido supera el tamaño de la pantalla o cuando aparece el teclado virtual, evitando el clásico error de 'RenderFlex overflowed'.",
    optionExplanations: [
      "Para mostrar elementos en forma de cuadrícula se utiliza `GridView`, no `SingleChildScrollView`.",
      "Para listas infinitas con carga perezosa (lazy loading) se utiliza `ListView.builder`.",
      "Envuelve un único widget hijo para permitir el scroll vertical u horizontal y evitar errores de desbordamiento en pantallas pequeñas.",
      "Para dibujar un recuadro temporal de reserva se suele usar el widget `Placeholder`."
    ]
  },
  {
    id: 9,
    question: "¿Cuáles son los comandos utilizados para generar los ejecutables de producción destinados a la distribución en dispositivos Android?",
    options: [
      "flutter build apk o flutter build appbundle",
      "flutter run --android",
      "flutter build ios",
      "flutter pub get android"
    ],
    correctIndex: 0,
    generalJustification: "En Flutter, `flutter build apk` genera el archivo instalable `.apk` y `flutter build appbundle` genera el paquete `.aab` (Android App Bundle), que es el formato estándar requerido para publicar en Google Play Store en modo release.",
    optionExplanations: [
      "`flutter build apk` y `flutter build appbundle` compilan la aplicación en modo producción (release) lista para distribuirse en Android.",
      "`flutter run` sirve para ejecutar y depurar la app en un dispositivo o emulador conectado, además la bandera `--android` no existe.",
      "`flutter build ios` genera el compilado para dispositivos Apple (iOS), no para Android.",
      "`flutter pub get android` es un comando inválido; `pub get` solo gestiona dependencias de Dart/Flutter."
    ]
  },
  {
    id: 10,
    question: "¿Cuál es la principal diferencia entre un `StatelessWidget` y un `StatefulWidget` en Flutter?",
    options: [
      "Los `StatelessWidget` no pueden contener widgets de tipo `Text` o `Image`.",
      "Los `StatefulWidget` pueden mantener un estado mutable a lo largo de su ciclo de vida.",
      "Los `StatelessWidget` solo se pueden ejecutar en dispositivos Android.",
      "Los `StatefulWidget` son más rápidos y consumen menos memoria."
    ],
    correctIndex: 1,
    generalJustification: "Un `StatelessWidget` es inmutable (sus propiedades no cambian internamente una vez construido), mientras que un `StatefulWidget` se asocia con un objeto `State` que puede mutar dinámicamente mediante `setState()` y volver a renderizar la interfaz durante la vida del widget.",
    optionExplanations: [
      "Tanto `StatelessWidget` como `StatefulWidget` pueden contener cualquier tipo de widget hijo, incluidos `Text` e `Image`.",
      "Los `StatefulWidget` poseen un objeto `State` separado que conserva datos dinámicos y redibuja la UI cuando ocurren cambios.",
      "Ambos widgets son multiplataforma y funcionan por igual en Android, iOS, Web y Escritorio.",
      "En realidad, `StatelessWidget` es ligeramente más ligero porque no necesita instanciar ni gestionar un objeto `State` adicional."
    ]
  },
  {
    id: 11,
    question: "¿Qué comando de Flutter se debe ejecutar para verificar si existen dependencias faltantes o problemas de configuración en el entorno de desarrollo?",
    options: [
      "flutter analyze",
      "flutter devices",
      "flutter doctor",
      "flutter upgrade"
    ],
    correctIndex: 2,
    generalJustification: "`flutter doctor` inspecciona el sistema completo y genera un diagnóstico sobre el estado del SDK de Flutter, Android Studio, Android SDK, Xcode, licencias, navegadores y dispositivos conectados.",
    optionExplanations: [
      "`flutter analyze` revisa el código fuente Dart en busca de errores de sintaxis o buenas prácticas, no revisa la instalación del entorno.",
      "`flutter devices` únicamente lista los dispositivos físicos o emuladores conectados disponibles para ejecutar la app.",
      "`flutter doctor` diagnostica el entorno de desarrollo e informa qué herramientas o licencias faltan por configurar.",
      "`flutter upgrade` descarga y actualiza la versión del SDK de Flutter desde el repositorio oficial."
    ]
  },
  {
    id: 12,
    question: "¿Cuál es la recomendación clave al diseñar mecanismos de control de sesiones basados en Biometría (Huella dactilar / Face ID) en aplicaciones móviles?",
    options: [
      "Implementar la autenticación biométrica de forma exclusiva en el servidor backend remoto.",
      "Almacenar la imagen de la huella digital o el mapa facial directamente en la base de datos de la app.",
      "Utilizar la biometría únicamente para desbloquear el acceso a un token seguro cifrado localmente, respaldado por una clave secreta.",
      "Descartar por completo el uso de PIN o contraseña alterna como método de respaldo."
    ],
    correctIndex: 2,
    generalJustification: "Según el estándar OWASP MASVS, la autenticación biométrica local no debe consistir en un simple booleano (`true`/`false` fácil de evadir con Frida), sino que debe estar vinculada criptográficamente al Keystore/Keychain para desbloquear una clave secreta o token cifrado.",
    optionExplanations: [
      "Los sensores biométricos del teléfono validan al usuario de forma local mediante el hardware seguro del dispositivo (TEE/Secure Enclave), nunca enviando rasgos crudos al servidor.",
      "Las aplicaciones jamás tienen acceso directo a la imagen de la huella o mapa facial por privacidad y seguridad del sistema operativo.",
      "Integrar la biometría con el Keystore/Keychain garantiza que solo tras una validación criptográfica exitosa se desencripte el token de sesión.",
      "Siempre debe existir un mecanismo de respaldo seguro (PIN/credencial) en caso de fallo del sensor biométrico."
    ]
  },
  {
    id: 13,
    question: "¿Cómo debe manejarse la información de registro (logging) en código de producción para evitar la fuga de datos sensibles?",
    options: [
      "Guardando los registros de errores sin cifrar en el almacenamiento externo público.",
      "Registrando credenciales completas únicamente durante las horas nocturnas.",
      "Imprimiendo todas las variables de la sesión directamente en la consola global.",
      "Suprimiendo logs que contengan tokens, contraseñas o Información de Identificación Personal (PII)."
    ],
    correctIndex: 3,
    generalJustification: "Los registros del sistema (como `logcat` en Android o la consola del sistema) pueden ser leídos por herramientas de diagnóstico o atacantes con acceso al dispositivo. En producción se deben desactivar los logs de depuración y sanitizar cualquier dato sensible (tokens, contraseñas, PII).",
    optionExplanations: [
      "El almacenamiento externo público puede ser leído por cualquier otra aplicación instalada en el dispositivo.",
      "Registrar credenciales en texto plano es una vulnerabilidad crítica sin importar la hora del día en que se realice.",
      "Imprimir variables de sesión en la consola global (`print` o `Log.d`) expone tokens e información privada en el buffer del sistema.",
      "Omitir y sanitizar datos sensibles (PII, credenciales, tokens) en producción previene la exposición involuntaria de información."
    ]
  },
  {
    id: 14,
    question: "¿Cuál de los siguientes widgets NO corresponde a la categoría de entrada de datos o controles de selección?",
    options: [
      "TextFormField",
      "Switch",
      "Checkbox",
      "AppBar"
    ],
    correctIndex: 3,
    generalJustification: "`AppBar` es un componente estructural de navegación y encabezado superior de la pantalla, mientras que `TextFormField`, `Switch` y `Checkbox` son widgets interactivos de formulario para capturar entradas o selecciones del usuario.",
    optionExplanations: [
      "`TextFormField` SÍ es un widget de entrada de datos que permite al usuario escribir texto con soporte de validación.",
      "`Switch` SÍ es un control de selección booleana (encendido/apagado).",
      "`Checkbox` SÍ es un control de selección que permite marcar o desmarcar una opción.",
      "`AppBar` NO es un control de entrada de formulario; es la barra superior de navegación y título de la aplicación."
    ]
  },
  {
    id: 15,
    question: "¿Qué representa la mitigación contra la vulnerabilidad de inyección de código (por ejemplo, SQL Injection local) en bases de datos móviles?",
    options: [
      "El uso de consultas parametrizadas y sentencias preparadas (Prepared Statements).",
      "Reemplazar caracteres especiales mediante expresiones regulares simples en el cliente.",
      "Utilizar bases de datos de código abierto sin cifrado de columnas.",
      "Concatenar directamente las cadenas de texto ingresadas por el usuario en la sentencia SQL."
    ],
    correctIndex: 0,
    generalJustification: "Las consultas parametrizadas (usando marcadores `?` y arreglos de argumentos como `whereArgs` en `sqflite`) separan estrictamente la estructura del comando SQL de los datos proporcionados por el usuario, impidiendo que la entrada altere la lógica de la consulta.",
    optionExplanations: [
      "Las sentencias preparadas tratan la entrada del usuario estrictamente como datos literales y nunca como código ejecutable SQL.",
      "Las expresiones regulares manuales suelen ser incompletas y fáciles de evadir mediante codificaciones o variantes de sintaxis.",
      "El tipo de licencia de la base de datos o la falta de cifrado no corrige ni impide las vulnerabilidades de inyección SQL.",
      "Concatenar cadenas (`\"SELECT * FROM users WHERE name = '\" + input + \"'\"`) es precisamente la causa directa de la vulnerabilidad SQL Injection."
    ]
  },
  {
    id: 16,
    question: "¿Qué riesgo introduce la persistencia de datos sensibles en la memoria caché del teclado virtual (Input Method Editor - IME)?",
    options: [
      "Que el dispositivo sufra un reinicio inesperado por falta de espacio en memoria.",
      "Que otras aplicaciones maliciosas con acceso al historial del teclado puedan extraer contraseñas o información personal ingresada.",
      "Que el consumo de batería aumente exponencialmente durante la escritura.",
      "Que la pantalla táctil deje de responder a los gestos táctiles del usuario."
    ],
    correctIndex: 1,
    generalJustification: "Los teclados virtuales almacenan palabras ingresadas en su diccionario de autocompletado y sugerencias predictivas. Si no se desactiva la sugerencia/autocorrección en campos sensibles (`enableSuggestions: false`, `autocorrect: false`, `obscureText: true`), terceros o teclados personalizados pueden capturar PII, tarjetas o contraseñas.",
    optionExplanations: [
      "La caché de palabras del teclado ocupa unos pocos kilobytes y no provoca reinicios del sistema por memoria.",
      "El diccionario predictivo del teclado guarda los términos escritos, permitiendo que otras apps o usuarios descubran datos confidenciales.",
      "El almacenamiento en caché del IME no tiene impacto significativo en el consumo energético de la batería.",
      "La caché de texto del teclado es puramente de software y no afecta el hardware del digitalizador táctil."
    ]
  },
  {
    id: 17,
    question: "¿Cuál es el principal riesgo asociado al uso inseguro de WebViews en aplicaciones móviles híbridas o nativas?",
    options: [
      "Consumo excesivo de memoria RAM debido al motor de renderizado web.",
      "Imposibilidad absoluta de cargar recursos remotos mediante protocolos seguros.",
      "Incompatibilidad automática con los estilos de diseño nativos de Material Design.",
      "Ejecución de código arbitrario mediante vulnerabilidades de inyección y exposición de interfaces JavaScript."
    ],
    correctIndex: 3,
    generalJustification: "Cuando un `WebView` habilita JavaScript sin restricciones, expone puentes nativos (`addJavascriptInterface`) o permite el acceso a archivos locales (`allowFileAccess`), un ataque de Cross-Site Scripting (XSS) o una página maliciosa puede ejecutar código nativo y robar archivos internos de la app.",
    optionExplanations: [
      "Aunque un WebView consume recursos de RAM, ese es un aspecto de rendimiento y no el principal riesgo de seguridad.",
      "Los WebViews soportan perfectamente la carga de recursos remotos mediante HTTPS.",
      "El aspecto visual respecto a Material Design es un tema de diseño de interfaz (UI), no una vulnerabilidad de seguridad.",
      "La combinación de XSS con puentes JavaScript-Nativo o acceso a esquemas `file://` permite ejecutar código arbitrario y exfiltrar datos locales."
    ]
  },
  {
    id: 18,
    question: "En el contexto de la comunicación en red, ¿qué práctica asegura la prevención de ataques de intermediario (Man-in-the-Middle)?",
    options: [
      "Deshabilitar el protocolo HTTPS para mejorar la velocidad de transmisión de datos.",
      "Aceptar todos los certificados autofirmados mediante una excepción en el código.",
      "Implementar validación estricta de certificados con Pinning SSL/TLS.",
      "Utilizar parámetros codificados en la URL en lugar de peticiones POST seguras."
    ],
    correctIndex: 2,
    generalJustification: "El Certificate Pinning (Pinning SSL/TLS) obliga a la aplicación a confiar únicamente en el certificado específico o llave pública (SPKI) del servidor legítimo, impidiendo que un atacante intercepte el tráfico incluso si instaló un certificado raíz (CA) malicioso en el dispositivo.",
    optionExplanations: [
      "Deshabilitar HTTPS transmite toda la información en texto plano, facilitando por completo cualquier ataque Man-in-the-Middle.",
      "Aceptar cualquier certificado (`badCertificateCallback: true`) anula la verificación de identidad del servidor y abre la puerta a interceptaciones.",
      "La validación estricta de TLS junto con Certificate Pinning garantiza que la app solo se comunique con el servidor auténtico.",
      "Los parámetros en la URL viajan expuestos en historiales y logs de proxies; no sustituyen ni aseguran el canal criptográfico."
    ]
  },
  {
    id: 19,
    question: "¿Qué herramienta de depuración en Flutter permite actualizar el código en ejecución de forma inmediata sin perder el estado actual de la aplicación?",
    options: [
      "Hot Restart",
      "Cold Boot",
      "Full Rebuild",
      "Hot Reload"
    ],
    correctIndex: 3,
    generalJustification: "`Hot Reload` inyecta los archivos de código fuente Dart actualizados directamente en la Máquina Virtual de Dart (Dart VM) en ejecución y reconstruye el árbol de widgets preservando intacto el estado actual (`State`) de la aplicación.",
    optionExplanations: [
      "`Hot Restart` reinicia la aplicación desde `main()` y destruye todo el estado actual, volviendo a los valores iniciales.",
      "`Cold Boot` se refiere a iniciar el emulador o dispositivo desde cero (apagado).",
      "`Full Rebuild` recompila por completo el proyecto nativo e instala de nuevo el binario, perdiendo todo el estado.",
      "`Hot Reload` aplica los cambios en la interfaz casi al instante conservando el estado en memoria de la sesión actual."
    ]
  },
  {
    id: 20,
    question: "¿Qué widget sirve como estructura básica visual para una pantalla en Flutter, integrando componentes como la `AppBar`, el `Drawer` y el `FloatingActionButton`?",
    options: [
      "Container",
      "Scaffold",
      "Stack",
      "StatefulWidget"
    ],
    correctIndex: 1,
    generalJustification: "El widget `Scaffold` implementa la estructura de diseño visual estándar de Material Design, ofreciendo ranuras predefinidas para `appBar`, `body`, `floatingActionButton`, `drawer`, `bottomNavigationBar` y `snackBar`.",
    optionExplanations: [
      "`Container` es una caja de diseño genérica para aplicar márgenes, rellenos (padding), bordes o colores a un widget hijo.",
      "`Scaffold` provee el esqueleto completo de una pantalla Material Design con soporte directo para `AppBar`, `Drawer` y `FloatingActionButton`.",
      "`Stack` sirve para superponer varios widgets uno encima de otro en el eje Z, no como estructura de pantalla Material.",
      "`StatefulWidget` es una clase base para widgets con estado, no un componente visual con ranuras para `AppBar` o `Drawer`."
    ]
  }
];

// Estado actual del cuestionario (permite mezclar preguntas sin perder la referencia)
let currentQuestions = [...quizData];
let userAnswers = {}; // { questionId: selectedOptionIndex }
let isGraded = false;

// Referencias del DOM
const questionsContainer = document.getElementById("questions-container");
const quizForm = document.getElementById("quiz-form");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressBarFill = document.getElementById("progress-bar-fill");
const validationAlert = document.getElementById("validation-alert");

const resultBanner = document.getElementById("result-banner");
const scoreNumber = document.getElementById("score-number");
const scorePercentage = document.getElementById("score-percentage");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const countCorrect = document.getElementById("count-correct");
const countIncorrect = document.getElementById("count-incorrect");
const countUnanswered = document.getElementById("count-unanswered");

const btnReset = document.getElementById("btn-reset");
const btnRetryTop = document.getElementById("btn-retry-top");
const btnShuffle = document.getElementById("btn-shuffle");

/**
 * Convierte texto entre comillas invertidas (`codigo`) en etiquetas <code> seguras
 */
function formatCodeText(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/`([^`]+)`/g, "<code>$1</code>");
}

/**
 * Renderiza todas las tarjetas de preguntas en el DOM
 */
function renderQuiz() {
  questionsContainer.innerHTML = "";

  currentQuestions.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = `question-card-${item.id}`;

    const letters = ["A", "B", "C", "D"];

    const optionsHTML = item.options
      .map((optionText, optIndex) => {
        const isChecked = userAnswers[item.id] === optIndex;
        return `
          <label class="option-label ${isChecked ? "selected" : ""}" id="label-q${item.id}-opt${optIndex}">
            <input
              type="radio"
              name="question-${item.id}"
              value="${optIndex}"
              data-question-id="${item.id}"
              ${isChecked ? "checked" : ""}
            />
            <span class="option-text">
              <strong>${letters[optIndex]})</strong> ${formatCodeText(optionText)}
            </span>
            <span class="option-tag hidden" id="tag-q${item.id}-opt${optIndex}"></span>
          </label>
        `;
      })
      .join("");

    card.innerHTML = `
      <div class="question-header">
        <span class="question-number">Pregunta ${index + 1}</span>
        <span class="status-badge hidden" id="badge-q${item.id}"></span>
      </div>
      <h3 class="question-title">${formatCodeText(item.question)}</h3>
      <div class="options-group" role="radiogroup" aria-label="Pregunta ${index + 1}">
        ${optionsHTML}
      </div>
      <div class="feedback-box hidden" id="feedback-q${item.id}"></div>
    `;

    questionsContainer.appendChild(card);
  });

  attachOptionListeners();
  updateProgress();
}

/**
 * Registra los eventos al seleccionar una opción
 */
function attachOptionListeners() {
  const radioInputs = questionsContainer.querySelectorAll('input[type="radio"]');
  radioInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const qId = Number(e.target.dataset.questionId);
      const selectedIdx = Number(e.target.value);
      userAnswers[qId] = selectedIdx;

      // Actualizar estilo visual de selección en esa pregunta
      const card = document.getElementById(`question-card-${qId}`);
      const allLabels = card.querySelectorAll(".option-label");
      allLabels.forEach((lbl) => lbl.classList.remove("selected"));

      const activeLabel = document.getElementById(`label-q${qId}-opt${selectedIdx}`);
      if (activeLabel) activeLabel.classList.add("selected");

      updateProgress();

      // Si ya había sido calificado y el usuario cambia una respuesta, volvemos a evaluar en tiempo real
      if (isGraded) {
        gradeQuiz(false);
      }
    });
  });
}

/**
 * Actualiza la barra superior de progreso de preguntas respondidas
 */
function updateProgress() {
  const total = currentQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const percent = Math.round((answeredCount / total) * 100);

  progressText.textContent = `Respondidas: ${answeredCount} de ${total}`;
  progressPercent.textContent = `${percent}%`;
  progressBarFill.style.width = `${percent}%`;

  if (answeredCount === total) {
    validationAlert.classList.add("hidden");
  }
}

/**
 * Califica el cuestionario y muestra la justificación detallada para cada respuesta
 */
function gradeQuiz(scrollToTop = true) {
  isGraded = true;
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  const letters = ["A", "B", "C", "D"];

  currentQuestions.forEach((item) => {
    const selectedIdx = userAnswers[item.id];
    const hasAnswered = selectedIdx !== undefined;
    const isCorrect = hasAnswered && selectedIdx === item.correctIndex;

    const card = document.getElementById(`question-card-${item.id}`);
    const badge = document.getElementById(`badge-q${item.id}`);
    const feedbackBox = document.getElementById(`feedback-q${item.id}`);

    // Limpiar estados previos de la tarjeta
    card.classList.remove("state-correct", "state-incorrect", "state-unanswered");
    badge.className = "status-badge";
    feedbackBox.className = "feedback-box";

    // Limpiar etiquetas de todas las opciones de esta pregunta
    item.options.forEach((_, optIdx) => {
      const label = document.getElementById(`label-q${item.id}-opt${optIdx}`);
      const tag = document.getElementById(`tag-q${item.id}-opt${optIdx}`);
      label.classList.remove("correct-option", "wrong-selected");
      tag.className = "option-tag hidden";
      tag.textContent = "";
    });

    // Resaltar siempre cuál era la opción correcta
    const correctLabel = document.getElementById(`label-q${item.id}-opt${item.correctIndex}`);
    const correctTag = document.getElementById(`tag-q${item.id}-opt${item.correctIndex}`);
    correctLabel.classList.add("correct-option");
    correctTag.className = "option-tag tag-right";
    correctTag.textContent = "✔ Correcta";

    // Evaluar los 3 escenarios posibles: Correcto, Incorrecto o Sin responder
    if (isCorrect) {
      correctCount++;
      card.classList.add("state-correct");
      badge.classList.add("correct");
      badge.textContent = "✔ Correcto";

      feedbackBox.classList.add("feedback-correct");
      feedbackBox.innerHTML = `
        <div class="feedback-title">✅ ¡Respuesta Correcta! (Opción ${letters[item.correctIndex]})</div>
        <p class="feedback-detail">
          <strong>Por qué estás en lo correcto:</strong> ${formatCodeText(item.optionExplanations[item.correctIndex])}
        </p>
        <p class="feedback-detail">
          <strong>Fundamento técnico:</strong> ${formatCodeText(item.generalJustification)}
        </p>
      `;
    } else if (hasAnswered && !isCorrect) {
      incorrectCount++;
      card.classList.add("state-incorrect");
      badge.classList.add("incorrect");
      badge.textContent = "✖ Incorrecto";

      const wrongLabel = document.getElementById(`label-q${item.id}-opt${selectedIdx}`);
      const wrongTag = document.getElementById(`tag-q${item.id}-opt${selectedIdx}`);
      wrongLabel.classList.add("wrong-selected");
      wrongTag.className = "option-tag tag-wrong";
      wrongTag.textContent = "✖ Tu elección";

      feedbackBox.classList.add("feedback-incorrect");
      feedbackBox.innerHTML = `
        <div class="feedback-title">❌ Respuesta Incorrecta (Elegiste la opción ${letters[selectedIdx]})</div>
        <p class="feedback-detail">
          <strong>Por qué tu selección es incorrecta:</strong> ${formatCodeText(item.optionExplanations[selectedIdx])}
        </p>
        <p class="feedback-detail">
          <strong>Respuesta correcta (${letters[item.correctIndex]}):</strong> ${formatCodeText(item.options[item.correctIndex])}
        </p>
        <p class="feedback-detail">
          <strong>Justificación:</strong> ${formatCodeText(item.generalJustification)}
        </p>
      `;
    } else {
      unansweredCount++;
      card.classList.add("state-unanswered");
      badge.classList.add("unanswered");
      badge.textContent = "⚠ Sin responder";

      feedbackBox.classList.add("feedback-unanswered");
      feedbackBox.innerHTML = `
        <div class="feedback-title">⚠️ No seleccionaste ninguna opción en esta pregunta</div>
        <p class="feedback-detail">
          <strong>Respuesta correcta (${letters[item.correctIndex]}):</strong> ${formatCodeText(item.options[item.correctIndex])}
        </p>
        <p class="feedback-detail">
          <strong>Justificación:</strong> ${formatCodeText(item.generalJustification)}
        </p>
      `;
    }
  });

  // Actualizar resumen superior
  const total = currentQuestions.length;
  const finalPercent = Math.round((correctCount / total) * 100);

  scoreNumber.textContent = `${correctCount}/${total}`;
  scorePercentage.textContent = `${finalPercent}%`;
  countCorrect.textContent = correctCount;
  countIncorrect.textContent = incorrectCount;
  countUnanswered.textContent = unansweredCount;

  if (finalPercent === 100) {
    resultTitle.textContent = "🏆 ¡Excelente! Dominio total del examen";
    resultMessage.textContent =
      "Has respondido correctamente las 20 preguntas. Revisa debajo el desglose técnico de cada reactivo.";
  } else if (finalPercent >= 80) {
    resultTitle.textContent = "🎉 ¡Muy buen resultado! Aprobado con alto desempeño";
    resultMessage.textContent =
      "Tienes una base muy sólida en Flutter y seguridad móvil. Revisa las justificaciones en rojo para afinar los detalles.";
  } else if (finalPercent >= 60) {
    resultTitle.textContent = "📘 Resultado Aprobatorio — Puedes mejorar";
    resultMessage.textContent =
      "Aprobaste el cuestionario, pero te recomendamos leer con atención la justificación de tus equivocaciones para reforzar conceptos.";
  } else {
    resultTitle.textContent = "📚 Necesitas repasar los temas del examen";
    resultMessage.textContent =
      "Revisa la justificación detallada en cada tarjeta para comprender por qué falló tu elección y cuál es el fundamento correcto.";
  }

  resultBanner.classList.remove("hidden");

  if (unansweredCount > 0) {
    validationAlert.classList.remove("hidden");
  } else {
    validationAlert.classList.add("hidden");
  }

  if (scrollToTop) {
    resultBanner.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Reinicia todas las respuestas y estados del cuestionario
 */
function resetQuiz() {
  userAnswers = {};
  isGraded = false;
  resultBanner.classList.add("hidden");
  validationAlert.classList.add("hidden");
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Mezcla aleatoriamente el orden de las preguntas y reinicia el intento
 */
function shuffleQuestions() {
  for (let i = currentQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
  }
  resetQuiz();
}

// Eventos de botones y formulario
quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  gradeQuiz(true);
});

btnReset.addEventListener("click", resetQuiz);
btnRetryTop.addEventListener("click", resetQuiz);
btnShuffle.addEventListener("click", shuffleQuestions);

// Inicializar el cuestionario al cargar la página
document.addEventListener("DOMContentLoaded", renderQuiz);

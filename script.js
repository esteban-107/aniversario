function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

// Función para crear efectos al hacer clic en botones
function crearEfectosBoton(event) {
  const botonDiv = event.currentTarget;
  const rect = botonDiv.getBoundingClientRect();
  
  // Crear contenedor temporal para los efectos
  const contenedorEfectos = document.createElement('div');
  contenedorEfectos.className = 'efecto-boton';
  contenedorEfectos.style.position = 'absolute';
  contenedorEfectos.style.left = rect.left + 'px';
  contenedorEfectos.style.top = rect.top + 'px';
  contenedorEfectos.style.width = rect.width + 'px';
  contenedorEfectos.style.height = rect.height + 'px';
  contenedorEfectos.style.pointerEvents = 'none';
  document.body.appendChild(contenedorEfectos);
  
  // Crear un corazón
  const corazon = document.createElement('div');
  corazon.className = 'corazon';
  corazon.textContent = '❤️';
  
  const randomX = Math.random() * 100;
  const randomTx = (Math.random() - 0.5) * 150;
  
  corazon.style.left = randomX + '%';
  corazon.style.setProperty('--tx', randomTx + 'px');
  corazon.style.fontSize = '40px';
  
  contenedorEfectos.appendChild(corazon);
  
  setTimeout(() => corazon.remove(), 2500);
  
  // Crear fuegos artificiales
  const colores = ['particula-rojo', 'particula-oro', 'particula-rosa'];
  for (let j = 0; j < 15; j++) {
    const particula = document.createElement('div');
    const color = colores[Math.floor(Math.random() * colores.length)];
    particula.className = 'particula ' + color;
    
    const angulo = (j / 15) * Math.PI * 2;
    const velocidad = 60 + Math.random() * 30;
    const px = Math.cos(angulo) * velocidad;
    const py = Math.sin(angulo) * velocidad;
    
    particula.style.left = '50%';
    particula.style.top = '50%';
    particula.style.setProperty('--px', px + 'px');
    particula.style.setProperty('--py', py + 'px');
    
    contenedorEfectos.appendChild(particula);
    
    setTimeout(() => particula.remove(), 1500);
  }
  
  // Remover contenedor después de que terminen los efectos
  setTimeout(() => contenedorEfectos.remove(), 3000);
}

// Función para crear corazones flotantes
function crearCorazones() {
  const contenedor = document.getElementById('fuegos-artificiales');
  const corazones = ['❤️', '💕', '💖', '💗'];
  
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const corazon = document.createElement('div');
      corazon.className = 'corazon';
      corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
      
      const randomX = Math.random() * 100;
      const randomTx = (Math.random() - 0.5) * 200;
      
      corazon.style.left = randomX + '%';
      corazon.style.setProperty('--tx', randomTx + 'px');
      
      contenedor.appendChild(corazon);
      
      setTimeout(() => corazon.remove(), 3000);
    }, i * 100);
  }
}

// Función para crear fuegos artificiales (partículas)
function crearFuegosArtificiales() {
  const contenedor = document.getElementById('fuegos-artificiales');
  const colores = ['particula-rojo', 'particula-oro', 'particula-rosa'];
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      for (let j = 0; j < 20; j++) {
        const particula = document.createElement('div');
        const color = colores[Math.floor(Math.random() * colores.length)];
        particula.className = 'particula ' + color;
        
        const angulo = (j / 20) * Math.PI * 2;
        const velocidad = 80 + Math.random() * 40;
        const px = Math.cos(angulo) * velocidad;
        const py = Math.sin(angulo) * velocidad;
        
        particula.style.left = '50%';
        particula.style.top = '50%';
        particula.style.setProperty('--px', px + 'px');
        particula.style.setProperty('--py', py + 'px');
        
        contenedor.appendChild(particula);
        
        setTimeout(() => particula.remove(), 1500);
      }
    }, i * 800);
  }
}

// Ejecutar animaciones al cargar la página
window.addEventListener('load', () => {
  crearCorazones();
  crearFuegosArtificiales();
});

// Contadores desactivados temporalmente mientras se reinician desde 0
// Mantener estructura para reutilizar el diseño en el futuro.
// Primer contador: inicio de nuestra relación = 1 de mayo de 2022.
// Segundo contador: comienza el 31 de octubre de 2021.

const inicio = new Date(2022, 4, 1); // inicio de nuestra relación: 1 de mayo de 2022
const inicioVerdadero = new Date(2021, 9, 31); // segundo contador: 31 de octubre de 2021
const hoy = new Date();

function calcularDiferencia(fechaInicio, fechaFin) {
  let años = fechaFin.getFullYear() - fechaInicio.getFullYear();
  let meses = fechaFin.getMonth() - fechaInicio.getMonth();
  let dias = fechaFin.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoDiaMesAnterior = new Date(fechaFin.getFullYear(), fechaFin.getMonth(), 0).getDate();
    dias += ultimoDiaMesAnterior;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses, dias };
}

const diferencia = calcularDiferencia(inicio, hoy);
document.getElementById("años").innerText = diferencia.años;
document.getElementById("meses").innerText = diferencia.meses;
document.getElementById("dias").innerText = diferencia.dias;

const diferenciaVerdadera = calcularDiferencia(inicioVerdadero, hoy);
document.getElementById("añosVerdadero").innerText = diferenciaVerdadera.años;
document.getElementById("mesesVerdadero").innerText = diferenciaVerdadera.meses;
document.getElementById("diasVerdadero").innerText = diferenciaVerdadera.dias;

const frasesSorpresa = [
  "Te amo infinitamente amor ✨❤️",
  "Cada momento a tu lado es increible 🌟💖",
  "Deseo que cumplas todos tus sueños amor🌙✨",
  "Eres hermosa 💓🌹",
  "Quiero verte titulada mi niña 📜💘",
  "Espero poder tener una historia sin final a tu lado 💌🌺",
  "Enfocate en ti y seras una mijita rica aún más 💞🌟",
  "TE AMOOOOOOOOOOOO 🏡💕",
  "Para ti siempre estaré 🤍😊",
  "Te estoy pensando 🎶❤️"
];

function sorpresa() {
  const frase = frasesSorpresa[Math.floor(Math.random() * frasesSorpresa.length)];
  document.getElementById('sorpresaTexto').innerText = frase;
  document.getElementById('sorpresaModal').classList.add('visible');
}

function cerrarSorpresa() {
  document.getElementById('sorpresaModal').classList.remove('visible');
}

// Función para agregar una nueva frase al diario
function agregarFrase() {
  const textarea = document.getElementById('nuevaFrase');
  const nombreInput = document.getElementById('nombreAutor');
  const frase = textarea.value.trim();
  const nombre = nombreInput.value.trim();
  
  if (frase === '') {
    alert('Por favor escribe una frase');
    return;
  }
  
  if (nombre === '') {
    alert('Por favor escribe tu nombre');
    return;
  }
  
  // Crear objeto de frase con fecha
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const nuevaFrase = {
    texto: frase,
    autor: nombre,
    fecha: fecha
  };
  
  // Guardar en Firebase
  db.ref('mensajes').push(nuevaFrase);
  
  // Limpiar campos
  textarea.value = '';
  nombreInput.value = '';
  nombreInput.focus();
}

// Función para eliminar una frase
function eliminarFrase(key) {
  if (confirm('¿Estás seguro que deseas eliminar esta frase?')) {
    db.ref('mensajes').child(key).remove();
  }
}

// Función para cargar y mostrar las frases guardadas
function cargarFrases() {
  const listaMensajes = document.getElementById('listaMensajes');
  
  // Escuchar cambios en tiempo real
  db.ref('mensajes').on('value', (snapshot) => {
    const data = snapshot.val();
    listaMensajes.innerHTML = '';
    
    if (!data) {
      listaMensajes.innerHTML = '<p class="sin-frases">Aún no hay nada. ¡Escribe algo! 💭</p>';
      return;
    }
    
    // Convertir a array y ordenar por fecha (más recientes primero)
    const frases = Object.keys(data).map(key => ({ key, ...data[key] })).reverse();
    
    frases.forEach(frase => {
      const elemento = document.createElement('div');
      elemento.className = 'frase-item';
      elemento.innerHTML = `
        <p class="texto-frase">"${frase.texto}"</p>
        <div class="frase-footer">
          <span class="fecha-frase"><strong>${frase.autor || 'Anónimo'}</strong> - ${frase.fecha}</span>
          <button onclick="eliminarFrase('${frase.key}')" class="btn-eliminar">✕</button>
        </div>
      `;
      listaMensajes.appendChild(elemento);
    });
  });
}

// Cargar frases al abrir la sección de mensajes
document.addEventListener('DOMContentLoaded', () => {
  cargarFrases();
});
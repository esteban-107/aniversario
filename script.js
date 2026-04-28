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

// Fecha de inicio de la relación
const inicio = new Date("2022-05-01");

const hoy = new Date();

// Calcular años, meses y días
let años = hoy.getFullYear() - inicio.getFullYear();
let meses = hoy.getMonth() - inicio.getMonth();
let dias = hoy.getDate() - inicio.getDate();

// Ajustar si los días son negativos
if (dias < 0) {
  meses--;
  const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
  dias += ultimoDiaMesAnterior;
}

// Ajustar si los meses son negativos
if (meses < 0) {
  años--;
  meses += 12;
}

document.getElementById("años").innerText = años;
document.getElementById("meses").innerText = meses;
document.getElementById("dias").innerText = dias;

// Fecha de inicio verdadera
const inicioVerdadero = new Date("2021-10-31");

let añosVerdadero = hoy.getFullYear() - inicioVerdadero.getFullYear();
let mesesVerdadero = hoy.getMonth() - inicioVerdadero.getMonth();
let diasVerdadero = hoy.getDate() - inicioVerdadero.getDate();

// Ajustar si los días son negativos
if (diasVerdadero < 0) {
  mesesVerdadero--;
  const ultimoDiaMesAnteriorVerdadero = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
  diasVerdadero += ultimoDiaMesAnteriorVerdadero;
}

// Ajustar si los meses son negativos
if (mesesVerdadero < 0) {
  añosVerdadero--;
  mesesVerdadero += 12;
}

document.getElementById("añosVerdadero").innerText = añosVerdadero;
document.getElementById("mesesVerdadero").innerText = mesesVerdadero;
document.getElementById("diasVerdadero").innerText = diasVerdadero;

function sorpresa() {
  alert("Te amo muchísimo ❤️");
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
  
  // Obtener frases guardadas
  let frases = JSON.parse(localStorage.getItem('diarioFrases')) || [];
  
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
    id: Date.now(),
    texto: frase,
    autor: nombre,
    fecha: fecha
  };
  
  // Agregar frase al inicio del array
  frases.unshift(nuevaFrase);
  
  // Guardar en localStorage
  localStorage.setItem('diarioFrases', JSON.stringify(frases));
  
  // Limpiar campos
  textarea.value = '';
  nombreInput.value = '';
  nombreInput.focus();
  
  // Actualizar la lista
  cargarFrases();
}

// Función para eliminar una frase
function eliminarFrase(id) {
  if (confirm('¿Estás seguro que deseas eliminar esta frase?')) {
    let frases = JSON.parse(localStorage.getItem('diarioFrases')) || [];
    frases = frases.filter(f => f.id !== id);
    localStorage.setItem('diarioFrases', JSON.stringify(frases));
    cargarFrases();
  }
}

// Función para cargar y mostrar las frases guardadas
function cargarFrases() {
  const listaMensajes = document.getElementById('listaMensajes');
  const frases = JSON.parse(localStorage.getItem('diarioFrases')) || [];
  
  listaMensajes.innerHTML = '';
  
  if (frases.length === 0) {
    listaMensajes.innerHTML = '<p class="sin-frases">Aún no hay nada. ¡Escribe algo! 💭</p>';
    return;
  }
  
  frases.forEach(frase => {
    const elemento = document.createElement('div');
    elemento.className = 'frase-item';
    elemento.innerHTML = `
      <p class="texto-frase">"${frase.texto}"</p>
      <div class="frase-footer">
        <span class="fecha-frase"><strong>${frase.autor || 'Anónimo'}</strong> - ${frase.fecha}</span>
        <button onclick="eliminarFrase(${frase.id})" class="btn-eliminar">✕</button>
      </div>
    `;
    listaMensajes.appendChild(elemento);
  });
}

// Cargar frases al abrir la sección de mensajes
document.addEventListener('DOMContentLoaded', () => {
  cargarFrases();
});
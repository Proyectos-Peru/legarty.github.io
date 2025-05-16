// =======================
// Loader visual
// =======================
function mostrarLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'flex';
}

function ocultarLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
}

// =======================
// Login simulado
// =======================
function loginUser() {
  mostrarLoader();
  setTimeout(() => {
    ocultarLoader();
    window.location.href = 'dashboard.html';
  }, 1200);
}

// =======================
// Cerrar sesión con modal
// =======================
function abrirModalCerrarSesion() {
  const modal = document.getElementById('modalLogout');
  if (modal) modal.style.display = 'flex';
}

function cerrarModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
}

function cerrarSesion() {
  mostrarLoader();
  setTimeout(() => {
    ocultarLoader();
    window.location.href = 'index.html';
  }, 1000);
}

// =======================
// Pedido
// =======================
function realizarPedido() {
  const cantidad = document.getElementById('cantidad').value;
  const fecha = document.getElementById('fecha').value;

  if (!cantidad || !fecha) {
    alert("Por favor completa los campos obligatorios.");
    return;
  }

  mostrarLoader();
  setTimeout(() => {
    ocultarLoader();
    document.querySelector('.form-section').style.display = 'none';
    document.getElementById('confirmacionPedido').style.display = 'block';
  }, 1500);
}

// =======================
// Modal: Historial
// =======================
function verDetallePedido(id) {
  const modal = document.getElementById('pedidoModal');
  if (!modal) return;

  const detalles = {
    '00123': { fecha: '05 mayo 2025', cantidad: '12 cajas', estado: 'Entregado' },
    '00118': { fecha: '25 abril 2025', cantidad: '8 cajas', estado: 'Entregado' },
    '00110': { fecha: '10 abril 2025', cantidad: '10 cajas', estado: 'Cancelado' },
  };

  const data = detalles[id] || {};
  document.getElementById('modalId').textContent = id;
  document.getElementById('modalFecha').textContent = data.fecha || 'N/D';
  document.getElementById('modalCantidad').textContent = data.cantidad || 'N/D';
  document.getElementById('modalEstado').textContent = data.estado || 'N/D';

  modal.style.display = 'flex';
}

// =======================
// Recuperación de contraseña
// =======================
function mostrarModalRecuperacion() {
  const modal = document.getElementById('modalRecuperacion');
  if (modal) modal.style.display = 'flex';
}

// =======================
// Placeholder editar perfil
// =======================
function editarPerfil() {
  const modal = document.getElementById('modalPerfil');
  if (modal) modal.style.display = 'flex';
}

// =======================
// Render gráfico (impacto/reportes)
// =======================
document.addEventListener('DOMContentLoaded', function () {
  const grafico = document.getElementById('reporteGrafico') || document.getElementById('impactoGrafico');
  if (grafico && grafico.getContext) {
    const ctx = grafico.getContext('2d');
    const data = [40, 25, 20, 15];
    const colors = ['#379237', '#8BC34A', '#C5E1A5', '#E8F5E9'];
    let start = 0;

    data.forEach((valor, i) => {
      const slice = (valor / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.arc(125, 125, 100, start, start + slice);
      ctx.fillStyle = colors[i];
      ctx.fill();
      start += slice;
    });
  }
});

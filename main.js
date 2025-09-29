const productosArtesanales = [
    { 
        nombre: "Jarra de Arcilla Tradicional", 
        precio: 25.00, 
        descripcion: "Pieza modelada y cocida a baja temperatura, perfecta para bebidas.", 
        imagen: "./images/jarra.jpg" // Ruta local actualizada
    },
    { 
        nombre: "Poncho de Lana", 
        precio: 85.50, 
        descripcion: "Tejido a mano con lana natural, ideal para clima frío y uso elegante.", 
        imagen: "./images/poncho.jpg" // Ruta local actualizada
    },
    { 
        nombre: "Canasta de paja", 
        precio: 15.99, 
        descripcion: "Diseño trenzado resistente para almacenamiento o decoración de interiores.", 
        imagen: "./images/canasta.jpg" // Ruta local actualizada
    },
    { 
        nombre: "Collar de Semillas", 
        precio: 12.00, 
        descripcion: "Diseño ecológico creado con semillas y fibras naturales de la selva.", 
        imagen: "./images/collar.jpg" // Ruta local actualizada
    },
    { 
        nombre: "Caja de Madera Tallada", 
        precio: 45.00, 
        descripcion: "Madera maciza tallada a mano con motivos florales, barniz natural.", 
        imagen: "./images/caja.jpg" // Ruta local actualizada
    },
    { 
        nombre: "Jabones Artesanales", 
        precio: 5.50, 
        descripcion: "Paquete de tres jabones naturales con aceites esenciales y miel de abeja.", 
        imagen: "./images/jabon.jpg" // Ruta local actualizada
    },
];

// ... (El resto del código del archivo main.js o main.ts sigue aquí)
 
function renderizarProductos() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    // Limpiar el mensaje de "Cargando productos..."
    grid.innerHTML = '';

    productosArtesanales.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-lg shadow-lg overflow-hidden transition duration-300';
        
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800">${producto.nombre}</h3>
                <p class="text-gray-600 mt-2">${producto.descripcion}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-2xl font-extrabold text-artesanal">$${producto.precio.toFixed(2)}</span>
                    <button class="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', renderizarProductos);
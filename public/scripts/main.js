// Funcionalidad del carrito
let cartItems = [];
let selectedPayment = null;

document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listeners a todos los botones "Agregar al Carrito"
    const buttons = document.querySelectorAll('.btn-comprar');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            addToCart(this);
        });
    });

    // Eventos del carrito flotante
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    
    cartBtn.addEventListener('click', function() {
        cartModal.classList.toggle('active');
    });

    // Cerrar modal del carrito
    if (closeCartModal) {
        closeCartModal.addEventListener('click', function() {
            cartModal.classList.remove('active');
        });
    }

    // Botón de checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', function() {
        if (cartItems.length > 0) {
            cartModal.classList.remove('active');
            openPaymentModal();
        } else {
            alert('El carrito está vacío');
        }
    });

    // Eventos del modal de pago
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remover selección anterior
            document.querySelectorAll('.payment-method').forEach(m => {
                m.classList.remove('selected');
            });
            // Agregar selección a este método
            this.classList.add('selected');
            selectedPayment = this.dataset.payment;
        });
    });

    const confirmPayment = document.getElementById('confirmPayment');
    confirmPayment.addEventListener('click', function() {
        if (selectedPayment) {
            completePayment();
        } else {
            alert('Por favor selecciona un medio de pago');
        }
    });

    const cancelPayment = document.getElementById('cancelPayment');
    cancelPayment.addEventListener('click', function() {
        closePaymentModal();
    });

    // Cerrar modal de pago al hacer click fuera
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.addEventListener('click', function(e) {
        if (e.target === paymentModal) {
            closePaymentModal();
        }
    });
});

function addToCart(button) {
    // Obtener información de la hamburguesa
    const card = button.closest('.hamburger-card');
    const name = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
    
    // Agregar al carrito
    cartItems.push({
        name: name,
        price: price
    });
    
    // Actualizar contador y vista
    updateCartCount();
    updateCartDisplay();
    
    // Efecto visual
    button.textContent = '✓ Agregado';
    button.style.background = 'linear-gradient(135deg, #51cf66 0%, #37a946 100%)';
    
    setTimeout(() => {
        button.textContent = 'Agregar al Carrito';
        button.style.background = '';
    }, 1500);
    
    console.log(`Agregado: ${name} - $${price}`);
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = cartItems.length;
    
    // Animación del carrito
    const cartFloating = document.getElementById('cartBtn');
    cartFloating.style.transform = 'scale(1.15)';
    setTimeout(() => {
        cartFloating.style.transform = 'scale(1)';
    }, 300);
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">El carrito está vacío</div>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    // Calcular total
    let total = 0;
    let itemsHtml = '';
    
    cartItems.forEach((item, index) => {
        total += item.price;
        itemsHtml += `
            <div class="cart-item">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHtml;
    cartTotal.textContent = total.toFixed(2);
}

function openPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.classList.add('active');
    selectedPayment = null;
    
    // Remover selección anterior
    document.querySelectorAll('.payment-method').forEach(m => {
        m.classList.remove('selected');
    });
}

function closePaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.classList.remove('active');
}

function completePayment() {
    const paymentNames = {
        'credit': 'Tarjeta Crédito',
        'debit': 'Tarjeta Débito',
        'paypal': 'PayPal',
        'transfer': 'Transferencia Bancaria',
        'wallet': 'Billetera Digital',
        'cash': 'Efectivo'
    };
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    
    alert(`✓ Pago realizado exitosamente!\n\nMétodo: ${paymentNames[selectedPayment]}\nTotal: $${total}\n\nGracias por tu compra! 🍔`);
    
    // Limpiar carrito
    cartItems = [];
    selectedPayment = null;
    updateCartCount();
    updateCartDisplay();
    closePaymentModal();
}

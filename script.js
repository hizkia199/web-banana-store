
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

// Show button when scroll is 100px or more
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



const textElement = document.getElementById("animated-text");
const texts = [
    "Experience the best hand-picked, organic bananas, delivered straight to your doorstep.",
    "Enjoy farm-fresh bananas with every order.",
    "Get bananas delivered fresh and fast."
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[currentTextIndex];
    if (isDeleting) {
        textElement.innerHTML = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    } else {
        textElement.innerHTML = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500); // Wait before deleting
            return;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200); // Speed of typing and deleting
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


document.addEventListener('DOMContentLoaded', function () {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Add click event listener to each FAQ item
    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle 'open' class on the clicked item
            this.classList.toggle('open');

            // Close all other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== this && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Hide all modals on load
    document.querySelectorAll('.modal').forEach(modal => {
        console.log('Hiding modal:', modal.id);
        modal.style.display = 'none';
    });

    // Function to handle quantity changes and price calculation
    const handleQuantityAndPrice = (modalId, pricePerUnit) => {
        let quantity = 1;
        const quantityInput = document.getElementById(`quantity-${modalId}`);
        const totalPriceDisplay = document.getElementById(`total-price-${modalId}`);

        const updateTotalPrice = () => {
            const total = (quantity * pricePerUnit).toFixed(2);
            totalPriceDisplay.textContent = total;
        };

        document.getElementById(`increase-quantity-${modalId}`).addEventListener('click', () => {
            if (quantity < 10) {
                quantity++;
                quantityInput.value = quantity;
                updateTotalPrice();
            }
        });

        document.getElementById(`decrease-quantity-${modalId}`).addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateTotalPrice();
            }
        });

        updateTotalPrice(); // Initial price update
    };

    // Initialize quantity and price handling for each modal
    handleQuantityAndPrice('1', 2.99); // Fresh Bananas
    handleQuantityAndPrice('2', 1.50); // Banana Leaves
    handleQuantityAndPrice('3', 4.99); // Banana Smoothies

    // Open modal when clicking Buy Now
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModal = document.getElementById(button.getAttribute('data-target'));
            console.log('Opening modal:', targetModal.id);
            targetModal.style.display = 'block';
        });
    });

    // Close modal on click of close button
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });
});


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call to display the time immediately
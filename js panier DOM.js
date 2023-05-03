// Sélectionner tous les éléments nécessaires
const quantiteinputs = document.querySelectorAll('.quantite-input');
const minusButtons = document.querySelectorAll('.moins');
const plusButtons = document.querySelectorAll('.plus');
const removeButtons = document.querySelectorAll('.supprimer-btn');
const aimerButtons = document.querySelectorAll('.aimer-btn');
const totalPriceElement = document.getElementById('total-price');

// Mettre à jour le prix total
function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.item').forEach((item) => {
        const priceElement = item.querySelector('.price');
        const quantiteInput = item.querySelector('.quantite-input');
        const price = parseFloat(priceElement.textContent);
        const quantite = parseInt(quantiteInput.value);
        totalPrice += price * quantite;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2) + "$";
}

// Gérer le clic sur le bouton "-"
moinsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const quantiteInput = button.nextElementSibling;
        let quantite = parseInt(quantiteInput.value);
        if (quantite > 1) {
            quantite--;
            quantiteInput.value = quantite;
            updateTotalPrice();
        }
    });
});

// Gérer le clic sur le bouton "+"
plusButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const quantiteInput =button.nextElementSibling;
        let quantite = parseInt(quantiteInput.value);
        if (quantite < 1) {
            quantite++;
            quantiteInput.value = quantite;
            updateTotalPrice();
        }
    });
});

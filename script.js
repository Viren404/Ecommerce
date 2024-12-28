document.querySelector('.cta-button').addEventListener('click', function () {
    alert('Redirecting to the booking page!');
});

document.querySelector('nav a[href="#about-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about-us').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('nav a[href="#contact-us"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#contact-us').scrollIntoView({ behavior: 'smooth' });
});

const sidebar = document.getElementById('sidebar');

// Toggle Sidebar on Mobile
document.querySelector('.cta-button').addEventListener('click', function () {
    sidebar.classList.toggle('open');
});
function showPopup(id) {
    document.getElementById('popup-' + id).style.display = 'flex';
}
function closePopup(id) {
    document.getElementById('popup-' + id).style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
    const deliveryType = document.getElementById('delivery-type');
    const distance = document.getElementById('distance');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const urgencyFactor = document.getElementById('urgency-factor');
    const calculatedCost = document.getElementById('calculated-cost');
    const bookingForm = document.getElementById('booking-form');

    function calculateCost() {
        const typeRate = parseFloat(deliveryType.selectedOptions[0].getAttribute('data-rate'));
        const dist = parseFloat(distance.value || 0);
        const hrs = parseFloat(hours.value || 0);
        const mins = parseFloat(minutes.value || 0) / 60;
        const urgency = parseFloat(urgencyFactor.value);

        if (!dist) {
            calculatedCost.value = 'Enter valid distance';
            return;
        }

        const timeFactor = 1 + (hrs + mins) * 0.2; // Example: Time adds 20% per hour
        const cost = dist * typeRate * timeFactor * urgency;

        calculatedCost.value = `₹${cost.toFixed(2)}`;
    }

    [deliveryType, distance, hours, minutes, urgencyFactor].forEach((element) =>
        element.addEventListener('input', calculateCost)
    );

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking Confirmed!\n' + calculatedCost.value);
    });
});

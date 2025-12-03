function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    window.scrollTo(0, 0);
}
document.getElementById('membershipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        plan: document.getElementById('plan').value
    };
    
    showConfirmationModal(formData);
});
function showConfirmationModal(formData) {
    const modal = document.getElementById('confirmationModal');
    const detailsElement = document.querySelector('.confirmation-details');
    
    const planNames = {
        'book-lover': 'Book Lover - ₱199/month',
        'cafe-connoisseur': 'Café Connoisseur - ₱399/month',
        'literary-elite': 'Literary Elite - ₱999/month'
    };
    detailsElement.innerHTML = `
        <strong>Name:</strong> ${formData.name}<br>
        <strong>Email:</strong> ${formData.email}<br>
        <strong>Phone:</strong> ${formData.phone}<br>
        <strong>Plan:</strong> ${planNames[formData.plan]}
    `;
    
    window.pendingRegistration = formData;
    
    modal.style.display = 'flex';
    
    document.querySelector('.overlay').style.filter = 'blur(6px)';
}
function confirmRegistration() {
    if (window.pendingRegistration) {
        showSuccessModal(window.pendingRegistration);
        
        closeConfirmationModal();
        
        document.getElementById('membershipForm').reset();
        
        window.pendingRegistration = null;
    }
}
function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
    
    document.querySelector('.overlay').style.filter = 'none';
    
    window.pendingRegistration = null;
}
function showSuccessModal(formData) {
    const modal = document.getElementById('successModal');
    const modalBody = document.querySelector('.modal-body p:first-child');
    
    modalBody.innerHTML = `Welcome to Quilla, ${formData.name}! Check your email for membership details.`;
    
    modal.style.display = 'flex';
    
    document.querySelector('.overlay').style.filter = 'blur(6px)';
}
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
    
    document.querySelector('.overlay').style.filter = 'none';
    
    window.scrollTo(0, 0);
}
window.onclick = function(event) {
    const confirmationModal = document.getElementById('confirmationModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target == confirmationModal) {
        closeConfirmationModal();
    }
    if (event.target == successModal) {
        closeModal();
    }
}
function toggleSidebar() {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.classList.toggle("show");
}
function scrollToContent() {
    document.getElementById("foot").scrollIntoView({ behavior: "smooth" });
} 
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobile = document.getElementById('mobile').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false; // Prevent form submission
    }

    // Check if mobile number is exactly 10 digits
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return false; // Prevent form submission
    }

    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Check if email is valid (this is handled by the input type="email", but we can add custom validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // Check if address is provided
    if (address.trim() === '') {
        alert('Please enter your address.');
        return false; // Prevent form submission
    }
    window.location.href="specifications/index.html"
    return true; // Allow form submission
}

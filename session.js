// session.js - Session management for Cyber Kissan

class SessionManager {
    constructor() {
        this.checkSession();
    }

    checkSession() {
        const isLoggedIn = localStorage.getItem('cyberKissanLoggedIn');
        const mobile = localStorage.getItem('cyberKissanMobile');
        const loginTime = localStorage.getItem('cyberKissanLoginTime');

        if (isLoggedIn === 'true' && mobile && loginTime) {
            this.showLoggedInState(mobile);
        } else {
            this.showLoggedOutState();
        }
    }

    showLoggedInState(mobile) {
        // Update navigation
        const loginLink = document.querySelector('a[href="login.html"]');
        if (loginLink) {
            loginLink.innerHTML = '<i class="fas fa-user"></i> My Account';
            loginLink.href = 'profile.html';
        }

        // Add logout button in header
        const header = document.querySelector('.header');
        if (header && !document.querySelector('.logout-btn')) {
            const logoutBtn = document.createElement('button');
            logoutBtn.className = 'btn logout-btn';
            logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
            logoutBtn.onclick = () => this.logout();
            logoutBtn.style.marginLeft = '15px';
            logoutBtn.style.background = '#FF5722';
            header.appendChild(logoutBtn);
        }
    }

    showLoggedOutState() {
        // Reset navigation
        const accountLink = document.querySelector('a[href="profile.html"]');
        if (accountLink) {
            accountLink.innerHTML = 'Login';
            accountLink.href = 'login.html';
        }

        // Remove logout button
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.remove();
        }
    }

    logout() {
        if (confirm('Are you sure you want to logout?')) {
            // Clear all session data
            localStorage.removeItem('cyberKissanLoggedIn');
            localStorage.removeItem('cyberKissanMobile');
            localStorage.removeItem('cyberKissanLoginTime');
            localStorage.removeItem('cyberKissanOTP');
            localStorage.removeItem('cyberKissanOTPTime');

            // Show success message
            alert('✅ Successfully logged out!');

            // Redirect to home
            window.location.href = 'index.html';
        }
    }
}

// Initialize session manager
document.addEventListener('DOMContentLoaded', function () {
    new SessionManager();
});

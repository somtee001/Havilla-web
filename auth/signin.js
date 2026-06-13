// Element Registry
const plannerBtn = document.getElementById('plannerBtn');
const ownerBtn = document.getElementById('ownerBtn');
const plannerForm = document.getElementById('plannerForm');
const ownerForm = document.getElementById('ownerForm');
const formHeader = document.getElementById('header');
const formSubtext = document.getElementById('subtext');

/**
 * Swaps role-specific views and text layouts smoothly
 * @param {'planner' | 'owner'} role 
 */
function switchRole(role) {
    if (!plannerForm || !ownerForm) return;

    if (role === 'planner') {
        // Form states
        plannerForm.classList.remove('hidden');
        ownerForm.classList.add('hidden');

        // Toggle UI markers
        if (plannerBtn && ownerBtn) {
            plannerBtn.className = "w-1/2 py-2 text-sm font-medium bg-[#0A243F] text-white transition-colors duration-200";
            ownerBtn.className = "w-1/2 py-2 text-sm font-medium bg-white text-gray-500 transition-colors duration-200";
        }

        // Display copy
        if (formHeader) formHeader.textContent = 'Sign into Your Account';
        if (formSubtext) formSubtext.textContent = 'Welcome back. Sign in to continue planning smarter with Havilla.';
    } else {
        // Form states
        ownerForm.classList.remove('hidden');
        plannerForm.classList.add('hidden');

        // Toggle UI markers
        if (plannerBtn && ownerBtn) {
            ownerBtn.className = "w-1/2 py-2 text-sm font-medium bg-[#0A243F] text-white transition-colors duration-200";
            plannerBtn.className = "w-1/2 py-2 text-sm font-medium bg-white text-gray-500 transition-colors duration-200";
        }

        // Display copy
        if (formHeader) formHeader.textContent = 'Welcome Back, Workspace Manager!';
        if (formSubtext) formSubtext.textContent = 'Sign in to your internal workspace dashboard to respond to quote requests, manage event space listings, and communicate with clients.';
    }
}

/**
 * Input field password visibility switch
 * @param {HTMLElement} eyeIcon 
 */
function togglePassword(eyeIcon) {
    const input = eyeIcon.previousElementSibling;
    if (!input) return;

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.textContent = '🔒';
    } else {
        input.type = 'password';
        eyeIcon.textContent = '👁';
    }
}

// Redirect and Form Submission Interceptors
if (plannerForm) {
    plannerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'landingPage.html'; // Direct planners to the core site
    });
}

if (ownerForm) {
    ownerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'owner-dashboard.html'; // Direct owners to management workspace
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    switchRole('planner');
});
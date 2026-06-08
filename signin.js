const plannerBtn = document.getElementById('plannerBtn');
const ownerBtn = document.getElementById('ownerBtn');
const plannerForm = document.getElementById('plannerForm');
const ownerForm = document.getElementById('ownerForm');

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

function togglePassword(eyeIcon) {
    const input = eyeIcon.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

function switchRole(role) {
    plannerForm.classList.add('hidden');
    ownerForm.classList.add('hidden');

    if (role === 'planner') {
        plannerBtn.classList.add('bg-[#0A243F]', 'text-white');
        plannerBtn.classList.remove('bg-white', 'text-gray-500');
        ownerBtn.classList.add('bg-white', 'text-gray-500');
        ownerBtn.classList.remove('bg-[#0A243F]', 'text-white');
        plannerForm.classList.remove('hidden');
        document.getElementById('header').textContent = 'Sign into Your Account';
        document.getElementById('subtext').textContent = 'Welcome back. Sign in to continue planning smarter with Havilla.';
    } else {
        ownerBtn.classList.add('bg-[#0A243F]', 'text-white');
        ownerBtn.classList.remove('bg-white', 'text-gray-500');
        plannerBtn.classList.add('bg-white', 'text-gray-500');
        plannerBtn.classList.remove('bg-[#0A243F]', 'text-white');
        ownerForm.classList.remove('hidden');
        document.getElementById('header').textContent = 'Welcome Back!';
        document.getElementById('subtext').textContent = 'Sign in to your internal workspace to manage bookings, respond to quote requests, list venue, and communicate with clients.';
    }
}

// Planner form validation
plannerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('plannerEmail').value.trim();
    const password = document.getElementById('plannerPassword').value.trim();

    if (email === '') {
        alert('Please enter your email address');
        return;
    }

    if (password === '') {
        alert('Please enter your password');
        return;
    }

    // All good - redirect to dashboard
    window.location.href = '../index.html';
});

// Owner form validation
ownerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('ownerEmail').value.trim();
    const password = document.getElementById('ownerPassword').value.trim();

    if (email === '') {
        alert('Please enter your email address');
        return;
    }

    if (password === '') {
        alert('Please enter your password');
        return;
    }

    // All good - redirect to dashboard
    window.location.href = '../index.html';
});

// default to planner on page load
switchRole('planner');
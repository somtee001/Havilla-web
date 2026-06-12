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
    if (input && (input.type === 'password' || input.type === 'text')) {
        input.type = input.type === 'password' ? 'text' : 'password';
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
        document.getElementById('subtext').textContent = 'Join Havilla as an event planner and simplify venue discovery, booking coordination, and event management from one modern dashboard.';
    } else {
        ownerBtn.classList.add('bg-[#0A243F]', 'text-white');
        ownerBtn.classList.remove('bg-white', 'text-gray-500');
        plannerBtn.classList.add('bg-white', 'text-gray-500');
        plannerBtn.classList.remove('bg-[#0A243F]', 'text-white');
        ownerForm.classList.remove('hidden');
        document.getElementById('subtext').textContent = 'Join Havilla as a venue owner and simplify venue listing, booking management, availability management, and client communication all from one modern dashboard.';
    }
}

// --- Dynamic Fields Live Validation Engine ---

function validateFields(config) {
    const nameVal = config.name.value.trim();
    const emailVal = config.email.value.trim();
    const passVal = config.password.value.trim();
    const confirmVal = config.confirmPassword.value.trim();
    const isChecked = config.terms.checked;

    const allFilled = nameVal !== '' && emailVal !== '' && passVal !== '' && confirmVal !== '';
    const passwordsMatch = passVal === confirmVal;

    if (allFilled && passwordsMatch && isChecked) {
        config.submit.disabled = false;
        config.submit.classList.remove('bg-[#a8c4e0]', 'cursor-not-allowed');
        config.submit.classList.add('bg-[#0A243F]', 'cursor-pointer', 'hover:bg-[#0A243F]/90');
    } else {
        config.submit.disabled = true;
        config.submit.classList.remove('bg-[#0A243F]', 'cursor-pointer', 'hover:bg-[#0A243F]/90');
        config.submit.classList.add('bg-[#a8c4e0]', 'cursor-not-allowed');
    }
}

// 1. Planner Config & Event Listeners
const plannerConfig = {
    name: document.getElementById('plannerFullName'),
    email: document.getElementById('plannerEmail'),
    password: document.getElementById('plannerPassword'),
    confirmPassword: document.getElementById('plannerConfirmPassword'),
    terms: document.getElementById('plannerTerms'),
    submit: document.getElementById('plannerSubmit')
};

function checkPlanner() { validateFields(plannerConfig); }

plannerConfig.name.addEventListener('input', checkPlanner);
plannerConfig.email.addEventListener('input', checkPlanner);
plannerConfig.password.addEventListener('input', checkPlanner);
plannerConfig.confirmPassword.addEventListener('input', checkPlanner);
plannerConfig.terms.addEventListener('change', checkPlanner);

// 2. Venue Owner Config & Event Listeners
const ownerConfig = {
    name: document.getElementById('ownerFullName'),
    email: document.getElementById('ownerEmail'),
    password: document.getElementById('ownerPassword'),
    confirmPassword: document.getElementById('ownerConfirmPassword'),
    terms: document.getElementById('ownerTerms'),
    submit: document.getElementById('ownerSubmit')
};

function checkOwner() { validateFields(ownerConfig); }

ownerConfig.name.addEventListener('input', checkOwner);
ownerConfig.email.addEventListener('input', checkOwner);
ownerConfig.password.addEventListener('input', checkOwner);
ownerConfig.confirmPassword.addEventListener('input', checkOwner);
ownerConfig.terms.addEventListener('change', checkOwner);


// --- Submissions Handling ---

plannerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Planner Form submitted successfully!');
    plannerForm.reset();
    checkPlanner();
});

ownerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Venue Owner Form submitted successfully!');
    ownerForm.reset();
    checkOwner();
});

// Boot default state
switchRole('planner');
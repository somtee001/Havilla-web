const plannerBtn = document.getElementById('plannerBtn');
const ownerBtn = document.getElementById('ownerBtn');
const plannerForm = document.getElementById('plannerForm');
const ownerForm = document.getElementById('ownerForm');

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex'); 
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

// default to planner on page load
switchRole('planner');
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
}

function switchRole(role) {
    const plannerBtn = document.getElementById('plannerBtn');
    const ownerBtn = document.getElementById('ownerBtn');

    if (role === 'planner') {
        plannerBtn.classList.add('bg-[#0A243F]', 'text-white');
        plannerBtn.classList.remove('bg-white', 'text-gray-500');
        ownerBtn.classList.add('bg-white', 'text-gray-500');
        ownerBtn.classList.remove('bg-[#0A243F]', 'text-white');
    } else {
        ownerBtn.classList.add('bg-[#0A243F]', 'text-white');
        ownerBtn.classList.remove('bg-white', 'text-gray-500');
        plannerBtn.classList.add('bg-white', 'text-gray-500');
        plannerBtn.classList.remove('bg-[#0A243F]', 'text-white');
    }
}
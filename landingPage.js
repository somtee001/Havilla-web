/**
 * Safe Navigation Drawer Controller
 * Prevents initialization layout desynchronization traps
 */
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;

    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
}
function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    const barsIcon = document.querySelector('.bars i');
    
    navItems.classList.toggle('active');
    
    // Toggle between bars and xmark icons
    if (navItems.classList.contains('active')) {
        barsIcon.classList.remove('fa-bars');
        barsIcon.classList.add('fa-xmark');
    } else {
        barsIcon.classList.remove('fa-xmark');
        barsIcon.classList.add('fa-bars');
    }
}

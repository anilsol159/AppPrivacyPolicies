document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const currentYearElem = document.getElementById('current-year');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }
    
    // Animate compass needle on scroll
    const needle = document.querySelector('.needle');
    if (needle) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const rotation = scrollPosition / 10; // Adjust rotation speed
            needle.style.transform = `rotate(${rotation}deg)`;
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effect to policy sections
    const policySections = document.querySelectorAll('.policy-section');
    policySections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(12, 92, 156, 0.05)';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});
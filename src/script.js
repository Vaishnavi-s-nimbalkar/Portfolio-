// Portfolio External JS
// Dark/Light mode toggle
function toggleMode() {
    const body = document.body;
    const btn = document.querySelector('.toggle-btn');
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        btn.textContent = '☀️ Light Mode';
    } else {
        btn.textContent = '🌙 Dark Mode';
    }
}
// Animate skill bars on scroll
function animateSkills() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const fill = bar.querySelector('.skill-bar-fill');
        const percent = bar.getAttribute('data-skill');
        if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
            fill.style.width = percent + '%';
        }
    });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);

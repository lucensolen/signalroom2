
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-scroll');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const form = document.getElementById('ctaForm');
const statusEl = document.getElementById('formStatus');

if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = "Saved. In a real deployment this would send to your email or CRM.";
    statusEl.style.color = "#f3e2b6";
  });
}

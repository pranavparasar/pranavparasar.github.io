const observer = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }); }, {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => { links.style.display = links.style.display === 'flex' ? '' : 'flex'; links.style.position='absolute'; links.style.top='76px'; links.style.right='14px'; links.style.flexDirection='column'; links.style.padding='18px'; links.style.background='#0b0f14'; links.style.border='1px solid #202832'; links.style.borderRadius='10px'; });

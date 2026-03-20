/* ── Custom Cursor ── */
const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  trail.style.left = e.clientX + 'px';
  trail.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    trail.style.width = '48px';
    trail.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    trail.style.width = '32px';
    trail.style.height = '32px';
  });
});

/* ── Scroll header ── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Theme toggle ── */
document.getElementById('theme-toggle').onclick = () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
};
if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');

/* ── Language ── */
let lang = 'es';

const t = {
  es: {
    'nav-about': 'Sobre mí', 'nav-skills': 'Skills',
    'nav-projects': 'Proyectos', 'nav-contact': 'Contacto', 'nav-cv': 'CV',
    'hero-badge': 'Disponible para trabajar',
    'hero-name': 'Johan David', 'hero-lastname': 'Toro Ortiz',
    'hero-desc': 'Backend Developer · Python · Node.js · AI',
    'hero-cta': 'Ver proyectos',
    'about-label': '01 — About', 'about-title': 'Sobre mí',
    'about-p1': 'Soy Ingeniero de Sistemas graduado de la Universidad CESMAG (febrero 2026), especializado en desarrollo backend y construcción de APIs REST. En el último año desarrollé cuatro proyectos reales: una plataforma e-commerce con pagos PayPal en producción, un sistema de gestión para gimnasios con automatización de tareas, y un analizador de ejercicios con inteligencia artificial y visión por computadora.',
    'about-p2': 'Me enfoco en arquitecturas limpias, seguridad y escalabilidad. Busco oportunidades remotas o en Pasto donde pueda aportar soluciones técnicas de impacto real.',
    'stat-projects': 'Proyectos reales', 'stat-deploy': 'En producción',
    'stat-ai': 'Proyecto de IA', 'stat-tech': 'Tecnologías',
    'skills-label': '02 — Skills', 'skills-title': 'Tecnologías',
    'skill-backend': 'Backend', 'skill-frontend': 'Frontend',
    'skill-db': 'Bases de datos', 'skill-devops': 'DevOps & Tools',
    'skill-ai': 'AI / Computer Vision', 'skill-integrations': 'Integraciones',
    'proj-label': '03 — Projects', 'proj-title': 'Proyectos',
    'tag-ai': 'IA · Computer Vision', 'tag-live': 'En producción',
    'tag-mern': 'MERN Stack', 'tag-vanilla': 'Vanilla JS',
    'proj-ia-title': 'Powerlifting AI Analyzer',
    'proj-ia-desc': 'Sistema de visión por computadora que analiza técnica en sentadilla, press de banca y peso muerto. Detecta 33 puntos corporales, calcula ángulos articulares y cuenta repeticiones automáticamente.',
    'proj-shop-title': 'Tienda Online Full Stack',
    'proj-shop-desc': 'Plataforma e-commerce completa con arquitectura MVC. Incluye autenticación JWT, integración de pagos PayPal, gestión de productos con imágenes, carrito de compras y notificaciones por correo.',
    'proj-gym-title': 'GYM Flow — Gestión de Gimnasio',
    'proj-gym-desc': 'Plataforma MERN para gestión interna de gimnasios. Control de usuarios y membresías, recordatorios automáticos por correo con cron jobs, y panel de administración en React + Tailwind.',
    'proj-school-title': 'Sitio Web — IEME María Goretti',
    'proj-school-desc': 'Sitio web institucional con sección de noticias dinámica conectada a la API de Airtable. Permite al personal publicar contenido sin conocimientos técnicos. Desarrollado como práctica profesional.',
    'contact-label': '04 — Contact', 'contact-title': 'Hablemos',
    'contact-sub': 'Abierto a oportunidades remotas y locales. Respondo en menos de 24 horas.',
    'contact-name': 'Tu nombre', 'contact-email': 'Tu correo',
    'contact-msg': 'Tu mensaje', 'contact-btn': 'Enviar mensaje',
    'footer-text': '© 2026 Johan David Toro Ortiz · Pasto, Colombia'
  },
  en: {
    'nav-about': 'About', 'nav-skills': 'Skills',
    'nav-projects': 'Projects', 'nav-contact': 'Contact', 'nav-cv': 'Resume',
    'hero-badge': 'Available for work',
    'hero-name': 'Johan David', 'hero-lastname': 'Toro Ortiz',
    'hero-desc': 'Backend Developer · Python · Node.js · AI',
    'hero-cta': 'View projects',
    'about-label': '01 — About', 'about-title': 'About me',
    'about-p1': 'I am a Systems Engineer graduated from Universidad CESMAG (February 2026), specializing in backend development and REST API design. Over the past year I built four real projects: a full e-commerce platform with PayPal payments in production, a gym management system with automated workflows, and an AI-powered exercise analyzer using computer vision.',
    'about-p2': 'I focus on clean architecture, security, and scalability. I am looking for remote or local opportunities where I can deliver real technical impact.',
    'stat-projects': 'Real projects', 'stat-deploy': 'In production',
    'stat-ai': 'AI project', 'stat-tech': 'Technologies',
    'skills-label': '02 — Skills', 'skills-title': 'Technologies',
    'skill-backend': 'Backend', 'skill-frontend': 'Frontend',
    'skill-db': 'Databases', 'skill-devops': 'DevOps & Tools',
    'skill-ai': 'AI / Computer Vision', 'skill-integrations': 'Integrations',
    'proj-label': '03 — Projects', 'proj-title': 'Projects',
    'tag-ai': 'AI · Computer Vision', 'tag-live': 'Live',
    'tag-mern': 'MERN Stack', 'tag-vanilla': 'Vanilla JS',
    'proj-ia-title': 'Powerlifting AI Analyzer',
    'proj-ia-desc': 'Computer vision system that analyzes squat, bench press and deadlift technique from video. Detects 33 body landmarks, calculates joint angles and counts reps automatically.',
    'proj-shop-title': 'Full Stack Online Store',
    'proj-shop-desc': 'Complete e-commerce platform with MVC architecture. Includes JWT auth, PayPal payment integration, product management with image uploads, shopping cart and email notifications.',
    'proj-gym-title': 'GYM Flow — Gym Management',
    'proj-gym-desc': 'MERN platform for gym internal management. User and membership control, automated email reminders via cron jobs, and admin dashboard built with React + Tailwind.',
    'proj-school-title': 'School Website — IEME María Goretti',
    'proj-school-desc': 'Institutional website with a dynamic news section powered by the Airtable API. Allows staff to publish content without technical knowledge. Delivered as professional internship.',
    'contact-label': '04 — Contact', 'contact-title': "Let's talk",
    'contact-sub': 'Open to remote and local opportunities. I reply within 24 hours.',
    'contact-name': 'Your name', 'contact-email': 'Your email',
    'contact-msg': 'Your message', 'contact-btn': 'Send message',
    'footer-text': '© 2026 Johan David Toro Ortiz · Pasto, Colombia'
  }
};

function applyLang() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const k = el.getAttribute('data-translate');
    if (t[lang][k]) el.textContent = t[lang][k];
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const k = el.getAttribute('data-translate-placeholder');
    if (t[lang][k]) el.placeholder = t[lang][k];
  });
}

document.getElementById('lang-toggle').onclick = function () {
  lang = lang === 'es' ? 'en' : 'es';
  this.textContent = lang === 'es' ? 'EN' : 'ES';
  applyLang();
};

applyLang();

/* ── Modal data ── */
const projects = {
  ia: {
    es: {
      title: 'Powerlifting AI Analyzer',
      desc: 'Sistema de visión por computadora que analiza la técnica en los tres ejercicios principales del powerlifting a partir de video grabado. Desarrollado íntegramente por Johan David Toro Ortiz.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Video Processing', 'Pose Estimation'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/ia1.png', 'assets/ia2.png', 'assets/ia3.png']
    },
    en: {
      title: 'Powerlifting AI Analyzer',
      desc: 'Computer vision system that analyzes squat, bench press and deadlift technique from recorded video. Detects 33 body landmarks, calculates joint angles and counts reps. Built entirely by Johan David Toro Ortiz.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Video Processing', 'Pose Estimation'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/ia1.png', 'assets/ia2.png', 'assets/ia3.png']
    }
  },
  shop: {
    es: {
      title: 'Tienda Online Full Stack',
      desc: 'Plataforma e-commerce completa con arquitectura MVC, autenticación JWT, pagos con PayPal SDK, gestión de productos con imágenes, carrito de compras y notificaciones por correo. En producción en interconectadosweb.es.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React', 'Vite', 'JWT', 'PayPal SDK', 'Docker'],
      repo: 'https://github.com/david323902/backend-de-tienda-online',
      demo: 'https://frontend-zlkp.onrender.com',
      imgs: ['assets/shop1.png', 'assets/shop2.png', 'assets/shop3.png']
    },
    en: {
      title: 'Full Stack Online Store',
      desc: 'Complete e-commerce platform with MVC architecture, JWT authentication, PayPal SDK payments, product management with image uploads, shopping cart and email notifications. Live at interconectadosweb.es.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React', 'Vite', 'JWT', 'PayPal SDK', 'Docker'],
      repo: 'https://github.com/david323902/backend-de-tienda-online',
      demo: 'https://frontend-zlkp.onrender.com',
      imgs: ['assets/shop1.png', 'assets/shop2.png', 'assets/shop3.png']
    }
  },
  gym: {
    es: {
      title: 'GYM Flow',
      desc: 'Plataforma MERN para gestión interna de gimnasios. Control de usuarios y membresías con roles admin/cliente, recordatorios automáticos de vencimiento por correo mediante cron jobs, y panel de administración en React + Tailwind CSS.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Bcryptjs', 'Node-cron', 'Nodemailer', 'Docker'],
      repo: 'https://github.com/david323902/Flujo-de-gimnasio',
      demo: null,
      imgs: ['assets/gym1.png', 'assets/gym2.png']
    },
    en: {
      title: 'GYM Flow',
      desc: 'MERN platform for gym internal management. User and membership control with admin/client roles, automated expiry reminders via cron jobs and email, and an admin dashboard built with React + Tailwind CSS.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Bcryptjs', 'Node-cron', 'Nodemailer', 'Docker'],
      repo: 'https://github.com/david323902/Flujo-de-gimnasio',
      demo: null,
      imgs: ['assets/gym1.png', 'assets/gym2.png']
    }
  },
  school: {
    es: {
      title: 'Sitio Web — IEME María Goretti',
      desc: 'Sitio web institucional desarrollado con HTML, CSS y JavaScript vanilla. Sección de noticias dinámica conectada a la API de Airtable, permitiendo al personal del colegio gestionar contenido sin intervención técnica. Entregado como práctica profesional.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Airtable API', 'Fetch API'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/school1.png', 'assets/school2.png']
    },
    en: {
      title: 'School Website — IEME María Goretti',
      desc: 'Institutional website built with vanilla HTML, CSS and JavaScript. Dynamic news section powered by the Airtable API, enabling staff to manage content without developer help. Delivered as professional internship project.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Airtable API', 'Fetch API'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/school1.png', 'assets/school2.png']
    }
  }
};

function openModal(id) {
  const p = projects[id][lang];
  const techList = p.tech.map(t => `<li>${t}</li>`).join('');
  const gallery = p.imgs.map(src => `<img src="${src}" alt="">`).join('');
  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" class="btn-demo">↗ Demo en vivo</a>`
    : '';
  const repoLabel = lang === 'es' ? 'Ver código' : 'View code';
  const techLabel = lang === 'es' ? 'Tecnologías' : 'Technologies';

  document.getElementById('modal-body').innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <h4>${techLabel}</h4>
    <ul>${techList}</ul>
    <div class="modal-links">
      <a href="${p.repo}" target="_blank" class="btn-repo">
        <i class="fa-brands fa-github"></i> ${repoLabel}
      </a>
      ${demoBtn}
    </div>
    <div class="gallery">${gallery}</div>
  `;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
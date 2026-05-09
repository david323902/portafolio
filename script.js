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
    // CAMBIO: texto reescrito sin clichés
    'about-p1': 'Ingeniero de Sistemas especializado en backend y arquitecturas REST, con experiencia construyendo productos full-stack end-to-end: desde el modelado de datos hasta el despliegue en producción. Desarrollé cinco proyectos reales — incluyendo una plataforma e-commerce con pagos Stripe activa, un SaaS de gestión de gimnasios con automatización de tareas, y un sistema de visión por computadora que detecta errores de forma en tiempo real.',
    'about-p2': 'Me enfoco en arquitectura limpia, seguridad desde el diseño y CI/CD. Busco un equipo con producto real en producción, donde el backend tenga peso y la arquitectura importe.',
    'stat-projects': 'Proyectos reales', 'stat-deploy': 'En producción',
    'stat-ai': 'Proyecto de IA', 'stat-tech': 'Tecnologías',
    'skills-label': '02 — Skills', 'skills-title': 'Tecnologías',
    'skill-backend': 'Backend', 'skill-frontend': 'Frontend',
    'skill-db': 'Bases de datos', 'skill-devops': 'DevOps & Tools',
    'skill-ai': 'AI / Computer Vision', 'skill-integrations': 'Integraciones',
    'proj-label': '03 — Projects', 'proj-title': 'Proyectos',
    'tag-ai': 'IA · Computer Vision', 'tag-live': 'En producción',
    'tag-mern': 'MERN Stack', 'tag-vanilla': 'Vanilla JS',
    // CAMBIO: tag nuevo para cliente real
    'tag-client': 'Cliente Real',
    // CAMBIO: descripciones actualizadas
    'proj-ia-title': 'Powerlifting AI Analyzer',
    'proj-ia-desc': 'Sistema de visión por computadora que analiza técnica en sentadilla, press de banca y peso muerto desde video real. Detecta 33 puntos corporales, calcula ángulos articulares e identifica errores de forma en tiempo real — generando retroalimentación estructurada para entrenadores y atletas.',
    'proj-shop-title': 'Tienda Online Full Stack',
    // CAMBIO: PayPal → Stripe, agrega métricas reales
    'proj-shop-desc': 'Plataforma e-commerce activa procesando más de 50 solicitudes semanales. Arquitectura MVC con autenticación JWT, integración de pagos con Stripe, gestión de productos con imágenes, carrito de compras y notificaciones por correo. Desplegada con Docker y CI/CD.',
    'proj-gym-title': 'GYM Flow — Gestión de Gimnasio',
    'proj-gym-desc': 'Plataforma SaaS MERN con 2 roles de acceso (admin y secretaria). Automatiza recordatorios de vencimiento de membresías con Node-cron y Nodemailer, eliminando la revisión diaria manual de registros. Panel de administración en React + Tailwind CSS.',
    // NUEVO: licorera
    'proj-licorera-title': 'LicoreraPOS — Punto de Venta',
    'proj-licorera-desc': 'Aplicación de escritorio construida para un cliente real. Funciona 100% offline en equipos modestos. Incluye inventario, ventas con escáner de código de barras, manejo de clientes y crédito, registro de gastos, reportes gráficos y descuentos personalizables. Distribuida como ejecutable portable.',
    'proj-school-title': 'Sitio Web — IEME María Goretti',
    'proj-school-desc': 'Sitio institucional en producción con CMS conectado a Airtable API. Permite al personal publicar y gestionar más de 30 artículos sin conocimientos técnicos. Entregado con manual de usuario como parte de la práctica profesional.',
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
    // CAMBIO: texto en inglés también reescrito
    'about-p1': 'Systems Engineer specializing in backend development and REST architectures, with experience building full-stack products end-to-end: from database modeling to production deployment. Built five real projects — including a live e-commerce platform with Stripe payments, a gym management SaaS with automated workflows, and a computer vision system that detects form errors in real time.',
    'about-p2': 'I focus on clean architecture, security by design, and CI/CD. Looking for a team with a real product in production, where backend depth and architecture decisions actually matter.',
    'stat-projects': 'Real projects', 'stat-deploy': 'In production',
    'stat-ai': 'AI project', 'stat-tech': 'Technologies',
    'skills-label': '02 — Skills', 'skills-title': 'Technologies',
    'skill-backend': 'Backend', 'skill-frontend': 'Frontend',
    'skill-db': 'Databases', 'skill-devops': 'DevOps & Tools',
    'skill-ai': 'AI / Computer Vision', 'skill-integrations': 'Integrations',
    'proj-label': '03 — Projects', 'proj-title': 'Projects',
    'tag-ai': 'AI · Computer Vision', 'tag-live': 'Live',
    'tag-mern': 'MERN Stack', 'tag-vanilla': 'Vanilla JS',
    // CAMBIO: tag nuevo para cliente real
    'tag-client': 'Real Client',
    // CAMBIO: descripciones actualizadas en inglés
    'proj-ia-title': 'Powerlifting AI Analyzer',
    'proj-ia-desc': 'Computer vision system that analyzes squat, bench press and deadlift technique from real video. Detects 33 body landmarks, calculates joint angles and identifies form errors in real time — generating structured feedback for coaches and athletes.',
    'proj-shop-title': 'Full Stack Online Store',
    // CAMBIO: PayPal → Stripe, agrega métricas reales
    'proj-shop-desc': 'Live e-commerce platform processing 50+ weekly requests. MVC architecture with JWT auth, Stripe payment integration, product management with image uploads, shopping cart and email notifications. Deployed with Docker and CI/CD.',
    'proj-gym-title': 'GYM Flow — Gym Management',
    'proj-gym-desc': 'MERN SaaS platform with 2 access roles (admin and secretary). Automates membership expiry reminders with Node-cron and Nodemailer, eliminating daily manual record review. Admin dashboard built with React + Tailwind CSS.',
    // NUEVO: licorera en inglés
    'proj-licorera-title': 'LicoreraPOS — Point of Sale',
    'proj-licorera-desc': 'Desktop application built for a real client. Runs 100% offline on modest hardware. Features inventory management, barcode scanner sales, customer and credit tracking, expense logging, graphical reports and customizable discounts. Distributed as a portable executable.',
    'proj-school-title': 'School Website — IEME María Goretti',
    'proj-school-desc': 'Institutional website in production with an Airtable-powered CMS. Allows staff to publish and manage 30+ articles without technical knowledge. Delivered with a user manual as part of a professional internship.',
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
      // CAMBIO: descripción mejorada con feedback y errores de forma
      desc: 'Sistema de visión por computadora que analiza la técnica en sentadilla, press de banca y peso muerto a partir de video real. Detecta 33 puntos corporales con MediaPipe, calcula ángulos articulares e identifica errores de forma en tiempo real — generando retroalimentación estructurada que entrenadores pueden usar para evaluar a sus atletas. Desarrollado íntegramente por Johan David Toro Ortiz.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Video Processing', 'Pose Estimation'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/ia1.png', 'assets/ia2.png', 'assets/ia3.png']
    },
    en: {
      title: 'Powerlifting AI Analyzer',
      desc: 'Computer vision system that analyzes squat, bench press and deadlift technique from real video. Detects 33 body landmarks with MediaPipe, calculates joint angles and identifies form errors in real time — generating structured feedback coaches can use to assess their athletes. Built entirely by Johan David Toro Ortiz.',
      tech: ['Python', 'MediaPipe', 'OpenCV', 'Video Processing', 'Pose Estimation'],
      repo: 'https://github.com/david323902/Proyecto-de-powerlifter',
      demo: null,
      imgs: ['assets/ia1.png', 'assets/ia2.png', 'assets/ia3.png']
    }
  },
  shop: {
    es: {
      title: 'Tienda Online Full Stack',
      // CAMBIO: PayPal → Stripe en modal
      desc: 'Plataforma e-commerce activa procesando más de 50 solicitudes semanales. Arquitectura MVC con autenticación JWT, pagos con Stripe SDK, gestión de productos con imágenes, carrito de compras y notificaciones por correo. Desplegada con Docker y CI/CD via GitHub Actions.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React', 'Vite', 'JWT', 'Stripe SDK', 'Docker', 'GitHub Actions'],
      repo: 'https://github.com/david323902/backend-de-tienda-online',
      demo: 'https://frontend-zlkp.onrender.com',
      imgs: ['assets/shop1.png', 'assets/shop2.png', 'assets/shop3.png']
    },
    en: {
      title: 'Full Stack Online Store',
      desc: 'Live e-commerce platform processing 50+ weekly requests. MVC architecture with JWT auth, Stripe SDK payments, product management with image uploads, shopping cart and email notifications. Deployed with Docker and CI/CD via GitHub Actions.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'React', 'Vite', 'JWT', 'Stripe SDK', 'Docker', 'GitHub Actions'],
      repo: 'https://github.com/david323902/backend-de-tienda-online',
      demo: 'https://frontend-zlkp.onrender.com',
      imgs: ['assets/shop1.png', 'assets/shop2.png', 'assets/shop3.png']
    }
  },
  gym: {
    es: {
      title: 'GYM Flow',
      desc: 'Plataforma SaaS MERN para gestión interna de gimnasios. Implementa 2 roles de acceso (admin y secretaria) con JWT y Bcrypt. Automatiza recordatorios de vencimiento de membresías con Node-cron y Nodemailer, eliminando la revisión diaria manual de registros. Panel de administración en React + Tailwind CSS.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Bcrypt', 'Node-cron', 'Nodemailer', 'Docker'],
      repo: 'https://github.com/david323902/Flujo-de-gimnasio',
      demo: null,
      imgs: ['assets/gym1.png', 'assets/gym2.png']
    },
    en: {
      title: 'GYM Flow',
      desc: 'MERN SaaS platform for gym internal management. Implements 2 access roles (admin and secretary) with JWT and Bcrypt. Automates membership expiry reminders with Node-cron and Nodemailer, eliminating daily manual record review. Admin dashboard built with React + Tailwind CSS.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Bcrypt', 'Node-cron', 'Nodemailer', 'Docker'],
      repo: 'https://github.com/david323902/Flujo-de-gimnasio',
      demo: null,
      imgs: ['assets/gym1.png', 'assets/gym2.png']
    }
  },
  // NUEVO: modal de LicoreraPOS
  licorera: {
    es: {
      title: 'LicoreraPOS — Punto de Venta',
      desc: 'Aplicación de escritorio construida para un cliente real. Funciona 100% offline en equipos modestos (probado en i3 con HDD). Incluye gestión de inventario, ventas con escáner de código de barras, manejo de clientes y crédito, registro de gastos, reportes gráficos y descuentos personalizables. Empaquetada y distribuida como un único ejecutable portable con Electron.',
      tech: ['Electron', 'React', 'SQLite', 'JavaScript ES6+', 'CSS3'],
      repo: null,
      demo: null,
      imgs: ['assets/licorera1.png', 'assets/licorera2.png']
    },
    en: {
      title: 'LicoreraPOS — Point of Sale',
      desc: 'Desktop application built for a real client. Runs 100% offline on modest hardware (tested on i3 with HDD). Features inventory management, barcode scanner sales, customer and credit tracking, expense logging, graphical reports and customizable discounts. Packaged and distributed as a single portable executable with Electron.',
      tech: ['Electron', 'React', 'SQLite', 'JavaScript ES6+', 'CSS3'],
      repo: null,
      demo: null,
      imgs: ['assets/licorera1.png', 'assets/licorera2.png']
    }
  },
  school: {
    es: {
      title: 'Sitio Web — IEME María Goretti',
      desc: 'Sitio web institucional en producción. Sección de noticias dinámica conectada a la API de Airtable, gestionando más de 30 publicaciones. Permite al personal publicar contenido sin conocimientos técnicos. Entregado con manual de usuario como parte de la práctica profesional en la institución.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Airtable API', 'Fetch API'],
      repo: 'https://github.com/david323902/colegio-maria-goretti',
      demo: 'https://www.iemmariagoretti.edu.co/index.html',
      imgs: ['assets/school1.png', 'assets/school2.png']
    },
    en: {
      title: 'School Website — IEME María Goretti',
      desc: 'Institutional website in production. Dynamic news section powered by the Airtable API, managing 30+ articles. Allows staff to publish content without technical knowledge. Delivered with a user manual as part of a professional internship at the institution.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Airtable API', 'Fetch API'],
      repo: 'https://github.com/david323902/colegio-maria-goretti',
      demo: 'https://www.iemmariagoretti.edu.co/index.html',
      imgs: ['assets/school1.png', 'assets/school2.png']
    }
  }
};

function openModal(id) {
  const p = projects[id][lang];
  const techList = p.tech.map(item => `<li>${item}</li>`).join('');
  const gallery = p.imgs.map(src => `<img src="${src}" alt="" onerror="this.style.display='none'">`).join('');
  const techLabel = lang === 'es' ? 'Tecnologías' : 'Technologies';
  const repoLabel = lang === 'es' ? 'Ver código' : 'View code';
  const demoLabel = lang === 'es' ? 'Demo en vivo' : 'Live demo';
  const noRepoLabel = lang === 'es' ? 'Código privado (cliente real)' : 'Private repo (real client)';

  const repoBtn = p.repo
    ? `<a href="${p.repo}" target="_blank" class="btn-repo"><i class="fa-brands fa-github"></i> ${repoLabel}</a>`
    : `<span class="btn-repo disabled"><i class="fa-brands fa-github"></i> ${noRepoLabel}</span>`;

  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" class="btn-demo">↗ ${demoLabel}</a>`
    : '';

  document.getElementById('modal-body').innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <h4>${techLabel}</h4>
    <ul>${techList}</ul>
    <div class="modal-links">
      ${repoBtn}
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
/**
 * ÉLANE BEAUTY STUDIO — INTERACTIVE CLIENT DEMO
 * Crafted by Veyra Studio
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initStickyHeader();
  initMobileMenu();
  initServicesFilter();
  initGalleryLightbox();
  initAppointmentBooking();
  initWhatsAppDemo();
  initFAQAccordion();
  initScrollReveal();
  initCustomCursor();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. Scroll Progress Bar
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Sticky Header with Scroll Detection
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active section link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    const scrollY = window.pageYOffset + 150;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-btn');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    drawer.classList.add('open');
    toggleBtn.classList.add('active');
    document.body.classList.add('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('active');
    document.body.classList.remove('menu-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   4. Services Data, Filtering, and Quick-Booking Prefill
   -------------------------------------------------------------------------- */
const servicesData = [
  // HAIR
  {
    category: 'hair',
    categoryName: 'Hair',
    name: 'Signature Haircut',
    description: 'A tailored cut, wash, and botanical scalp massage, finished with a bespoke blowout.',
    price: '₹1,200',
    duration: '60 min'
  },
  {
    category: 'hair',
    categoryName: 'Hair',
    name: 'Blowout & Styling',
    description: 'Nourishing wash with luxury thermal styling for effortless volume and high shine.',
    price: '₹900',
    duration: '45 min'
  },
  {
    category: 'hair',
    categoryName: 'Hair',
    name: 'Hair Colour',
    description: 'Full-spectrum tone and gloss application using ammonia-free restorative pigments.',
    price: '₹2,800',
    duration: '90 min'
  },
  {
    category: 'hair',
    categoryName: 'Hair',
    name: 'Balayage',
    description: 'Hand-painted dimensional contouring creating seamless, sun-kissed natural brightness.',
    price: '₹4,500',
    duration: '150 min'
  },
  {
    category: 'hair',
    categoryName: 'Hair',
    name: 'Hair Treatment',
    description: 'Deep bonding peptide therapy that repairs cuticle damage and restores natural elasticity.',
    price: '₹1,800',
    duration: '60 min'
  },

  // SKIN
  {
    category: 'skin',
    categoryName: 'Skin',
    name: 'Signature Facial',
    description: 'Double cleanse, gentle enzymatic exfoliation, custom lymphatic massage, and cold-stone finish.',
    price: '₹1,800',
    duration: '60 min'
  },
  {
    category: 'skin',
    categoryName: 'Skin',
    name: 'Hydrating Facial',
    description: 'Intense hyaluronic acid infusion combined with soothing botanical lipid barrier recovery.',
    price: '₹1,500',
    duration: '45 min'
  },
  {
    category: 'skin',
    categoryName: 'Skin',
    name: 'Glow Treatment',
    description: 'Vitamin C antioxidant booster with micro-current lifting and rose quartz contour sculpting.',
    price: '₹2,200',
    duration: '75 min'
  },
  {
    category: 'skin',
    categoryName: 'Skin',
    name: 'Express Facial',
    description: 'A focused 30-minute radiance refresh for instant clarity and revitalization on the go.',
    price: '₹950',
    duration: '30 min'
  },

  // NAILS
  {
    category: 'nails',
    categoryName: 'Nails',
    name: 'Classic Manicure',
    description: 'Precision nail shaping, organic cuticle care, gentle hand exfoliation, and buff or polish.',
    price: '₹700',
    duration: '45 min'
  },
  {
    category: 'nails',
    categoryName: 'Nails',
    name: 'Gel Manicure',
    description: 'Long-lasting high-gloss gel finish with strengthening base coat and nourishing cuticles.',
    price: '₹1,100',
    duration: '60 min'
  },
  {
    category: 'nails',
    categoryName: 'Nails',
    name: 'Classic Pedicure',
    description: 'Warm botanical foot soak, sea-salt scrub, gentle callus smoothing, and relaxing massage.',
    price: '₹900',
    duration: '50 min'
  },
  {
    category: 'nails',
    categoryName: 'Nails',
    name: 'Gel Pedicure',
    description: 'Complete luxury foot ritual finished with smudge-free, durable LED-cured gel polish.',
    price: '₹1,300',
    duration: '65 min'
  },

  // SPECIAL OCCASIONS
  {
    category: 'special',
    categoryName: 'Special Occasion',
    name: 'Bridal Styling',
    description: 'Curated bridal hair architecture and timeless radiance makeup with preview consultation.',
    price: '₹6,500',
    duration: '180 min'
  },
  {
    category: 'special',
    categoryName: 'Special Occasion',
    name: 'Event Makeup',
    description: 'Sophisticated event-ready skin prep, airbrushed finish, and tailored eye definition.',
    price: '₹2,500',
    duration: '75 min'
  },
  {
    category: 'special',
    categoryName: 'Special Occasion',
    name: 'Hair Styling',
    description: 'Editorial wave styling, sleek chignons, or textured up-dos for celebrations and galas.',
    price: '₹1,400',
    duration: '60 min'
  },
  {
    category: 'special',
    categoryName: 'Special Occasion',
    name: 'Personal Beauty Consultation',
    description: 'One-on-one aesthetic assessment, styling direction, and personalized ritual prescription.',
    price: '₹800',
    duration: '45 min'
  }
];

function initServicesFilter() {
  const grid = document.getElementById('servicesGrid');
  const tabs = document.querySelectorAll('.service-tab-btn');
  if (!grid) return;

  const renderServices = (filterCategory = 'all') => {
    grid.innerHTML = '';
    const filtered = filterCategory === 'all' 
      ? servicesData 
      : servicesData.filter(s => s.category === filterCategory);

    filtered.forEach((service, index) => {
      const card = document.createElement('div');
      card.className = 'service-card reveal';
      card.style.transitionDelay = `${(index % 6) * 0.08}s`;

      card.innerHTML = `
        <div class="service-card-top">
          <span class="service-category-tag">${service.categoryName}</span>
          <h3 class="service-title">${service.name}</h3>
          <p class="service-description">${service.description}</p>
        </div>
        <div class="service-card-bottom">
          <div class="service-meta">
            <span class="service-price">${service.price}</span>
            <span class="service-duration">${service.duration} · Sample price</span>
          </div>
          <button type="button" class="service-book-btn" data-category="${service.category}" data-service="${service.name}">
            Book Ritual &rarr;
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

    // Re-bind booking clicks
    grid.querySelectorAll('.service-book-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        const svc = e.currentTarget.getAttribute('data-service');
        handleSelectServiceForBooking(cat, svc);
      });
    });

    // Trigger reveal on newly inserted cards
    setTimeout(() => {
      grid.querySelectorAll('.service-card').forEach(c => c.classList.add('is-visible'));
    }, 50);
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-filter');
      renderServices(category);
    });
  });

  // Initial render
  renderServices('all');
}

function handleSelectServiceForBooking(categoryKey, serviceName) {
  const serviceSelect = document.getElementById('appointmentService');
  const notesField = document.getElementById('appointmentNotes');
  const appointmentSection = document.getElementById('appointment');

  if (serviceSelect) {
    // Map internal key to option value
    let optionValue = 'Consultation';
    if (categoryKey === 'hair') optionValue = 'Hair';
    else if (categoryKey === 'skin') optionValue = 'Skin';
    else if (categoryKey === 'nails') optionValue = 'Nails';
    else if (categoryKey === 'special') optionValue = 'Special Occasion';

    serviceSelect.value = optionValue;
  }

  if (notesField && serviceName) {
    notesField.value = `Requested Treatment: ${serviceName}`;
  }

  if (appointmentSection) {
    appointmentSection.scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the form briefly
    const formWrapper = document.querySelector('.appointment-wrapper');
    if (formWrapper) {
      formWrapper.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
      formWrapper.style.borderColor = 'var(--accent-champagne)';
      formWrapper.style.boxShadow = '0 0 0 4px rgba(194, 162, 122, 0.25)';
      setTimeout(() => {
        formWrapper.style.borderColor = 'var(--border-delicate)';
        formWrapper.style.boxShadow = 'var(--shadow-medium)';
      }, 1600);
    }
  }
}

/* --------------------------------------------------------------------------
   5. Editorial Gallery Lightbox
   -------------------------------------------------------------------------- */
const galleryItems = [
  {
    src: '/images/gallery-lounge.jpg',
    tag: 'Studio Interior',
    title: 'Arched Brass Styling Suite'
  },
  {
    src: '/images/about.jpg',
    tag: 'Ritual Experience',
    title: 'Restorative Scalp & Hair Consultation'
  },
  {
    src: '/images/gallery-hair.jpg',
    tag: 'Hair Architecture',
    title: 'Sun-Kissed Dimensional Balayage'
  },
  {
    src: '/images/gallery-skincare.jpg',
    tag: 'Botanical Skincare',
    title: 'Cellular Hydration Facial & Contour'
  },
  {
    src: '/images/gallery-nails.jpg',
    tag: 'Nail Detail',
    title: 'Clean Minimalist Nude Manicure'
  },
  {
    src: '/images/gallery-products.jpg',
    tag: 'Formulations',
    title: 'Organic Amber Botanical Elixirs'
  },
  {
    src: '/images/gallery-bridal.jpg',
    tag: 'Special Occasions',
    title: 'Editorial Bridal Beauty & Hair Styling'
  }
];

function initGalleryLightbox() {
  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImg');
  const tagEl = document.getElementById('lightboxTag');
  const titleEl = document.getElementById('lightboxTitle');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const items = document.querySelectorAll('.gallery-item');

  if (!modal || !imgEl) return;

  let currentIndex = 0;

  const showImage = (index) => {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;
    currentIndex = index;

    const item = galleryItems[currentIndex];
    imgEl.src = item.src;
    imgEl.alt = item.title;
    if (tagEl) tagEl.textContent = item.tag;
    if (titleEl) titleEl.textContent = item.title;
  };

  const openLightbox = (index) => {
    showImage(index);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

/* --------------------------------------------------------------------------
   6. Demonstration Appointment Booking Flow
   -------------------------------------------------------------------------- */
function initAppointmentBooking() {
  const form = document.getElementById('appointmentForm');
  const dateInput = document.getElementById('appointmentDate');
  const modal = document.getElementById('appointmentModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const dismissBtn = document.getElementById('modalDismissBtn');

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  if (!form || !modal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Processing Demo Request...</span>`;

    const name = document.getElementById('appointmentName')?.value || 'Guest';
    const phone = document.getElementById('appointmentPhone')?.value || '—';
    const email = document.getElementById('appointmentEmail')?.value || '—';
    const service = document.getElementById('appointmentService')?.value || 'Consultation';
    const date = document.getElementById('appointmentDate')?.value || 'Preferred Date';
    const time = document.getElementById('appointmentTime')?.value || 'Flexible';
    const notes = document.getElementById('appointmentNotes')?.value || 'None';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      // Populate summary in modal
      const nameEl = document.getElementById('summaryName');
      const serviceEl = document.getElementById('summaryService');
      const dateEl = document.getElementById('summaryDate');
      const timeEl = document.getElementById('summaryTime');

      if (nameEl) nameEl.textContent = name;
      if (serviceEl) serviceEl.textContent = service;
      if (dateEl) dateEl.textContent = date;
      if (timeEl) timeEl.textContent = time;

      // Open confirmation modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Reset form fields
      form.reset();
    }, 700);
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   7. WhatsApp Demo Interaction Modal
   -------------------------------------------------------------------------- */
function initWhatsAppDemo() {
  const triggerBtns = document.querySelectorAll('#whatsappTriggerBtn, .whatsapp-trigger');
  const modal = document.getElementById('whatsappModal');
  const closeBtn = document.getElementById('whatsappModalClose');

  if (!modal) return;

  const openWhatsAppModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeWhatsAppModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', openWhatsAppModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeWhatsAppModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeWhatsAppModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeWhatsAppModal();
    }
  });
}

/* --------------------------------------------------------------------------
   8. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordion items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight + 32}px`;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Scroll Reveal Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   10. Custom Subtle Luxury Cursor
   -------------------------------------------------------------------------- */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  };
  requestAnimationFrame(animateRing);

  // Hover magnification for interactive elements
  const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .gallery-item, .faq-question-btn');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* --------------------------------------------------------------------------
   11. Back to Top Smooth Scroll
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

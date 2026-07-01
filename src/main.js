import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Sticky Bottom Bar visibility logic (if needed to hide on scroll up/down)
  // For now, it will be sticky using CSS class: fixed bottom-0 w-full

  // Contact Form Submission (Mock)
  const contactForms = document.querySelectorAll('.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message. We will get back to you shortly!');
      form.reset();
    });
  });

  // WhatsApp Modal & Floating Buttons Injection
  const waModalHtml = `
    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/919894677328" class="fixed bottom-20 right-6 md:bottom-6 md:right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center">
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

    <!-- Mobile Sticky Bottom Bar -->
    <div class="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 flex justify-between px-2 py-2 border-t border-gray-200">
      <a href="tel:+919894677328" class="flex-1 flex flex-col items-center justify-center text-primary py-1">
        <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        <span class="text-xs font-medium">Call Now</span>
      </a>
      <a href="https://wa.me/919894677328" class="flex-1 flex flex-col items-center justify-center text-green-500 py-1 border-l border-r border-gray-200">
        <svg class="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span class="text-xs font-medium">WhatsApp</span>
      </a>
      <a href="contact.html" class="flex-1 flex flex-col items-center justify-center text-primary py-1">
        <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <span class="text-xs font-medium">Book</span>
      </a>
    </div>

    <div id="wa-modal" class="fixed inset-0 bg-black/50 z-[100] hidden flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in transition-all">
        <div class="bg-green-500 p-4 text-white flex justify-between items-center">
          <h3 class="font-bold text-lg flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact on WhatsApp
          </h3>
          <button id="wa-close" type="button" class="text-white hover:text-gray-200 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <form id="wa-form" class="p-6 space-y-4">
          <p class="text-sm text-gray-600 mb-4">Please provide a few details so we can assist you better!</p>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="wa-name" required class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input type="text" id="wa-city" required class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Services Needed</label>
            <select id="wa-service" required class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="" disabled selected>Select a service...</option>
              <option value="Cockroach Control">Cockroach Control</option>
              <option value="Termite Control">Termite Control</option>
              <option value="Rodent Control">Rodent Control</option>
              <option value="Bed Bug Control">Bed Bug Control</option>
              <option value="Mosquito Control">Mosquito Control</option>
              <option value="Red Ant Control">Red Ant Control</option>
              <option value="Rat & Mice">Rat & Mice</option>
              <option value="Other / Not Sure">Other / Not Sure</option>
            </select>
          </div>
          <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4">
            Start Chat
          </button>
        </form>
      </div>
    </div>
  `;
  
  // Inject modal into DOM
  document.body.insertAdjacentHTML('beforeend', waModalHtml);

  const waModal = document.getElementById('wa-modal');
  const waClose = document.getElementById('wa-close');
  const waForm = document.getElementById('wa-form');
  let currentWaTarget = '919894677328'; // Default fallback phone number

  // Intercept all whatsapp links to show the modal instead
  const waLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
  waLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Extract phone number from the original href
      const href = link.getAttribute('href');
      const match = href.match(/wa\.me\/(\d+)/);
      if (match) currentWaTarget = match[1];
      
      waModal.classList.remove('hidden');
    });
  });

  waClose.addEventListener('click', () => {
    waModal.classList.add('hidden');
  });

  waModal.addEventListener('click', (e) => {
    if (e.target === waModal) waModal.classList.add('hidden');
  });

  waForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wa-name').value;
    const city = document.getElementById('wa-city').value;
    const service = document.getElementById('wa-service').value;
    
    // Construct the formatted WhatsApp message
    const message = `Hi Care N Cure Pest Control Service,\n\nI would like to inquire about your services.\n\n*Name:* ${name}\n*City:* ${city}\n*Service Needed:* ${service}`;
    const waUrl = `https://wa.me/${currentWaTarget}?text=${encodeURIComponent(message)}`;
    
    // Close modal, reset form & redirect
    waModal.classList.add('hidden');
    waForm.reset();
    window.open(waUrl, '_blank');
  });
});
